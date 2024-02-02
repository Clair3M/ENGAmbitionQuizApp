import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Quiz } from '../data/QuizStructure.tsx'

import '../output.css';

export const QuizContent = (props: {quiz:Quiz}) => {
    let quiz: Quiz = props.quiz;
    const [question, setQuestion] = useState(quiz.questions[quiz.currentQuestion]);
    const [option, setSelected] = useState('-1');

    const navigate = useNavigate();
    const goToResults = () => {
        navigate('/results');
    }
    const nextQuestion = (e: FormEvent) => {
        e.preventDefault();
        quiz.answers[quiz.currentQuestion] = +option;
        console.log(quiz.answers);
        if (quiz.currentQuestion >= quiz.numQuestions-1) {
            quiz.finishQuiz();
            console.log(quiz.highScore);
            goToResults();
        }
        quiz.currentQuestion += 1;
        setQuestion(quiz.questions[quiz.currentQuestion]);
    }

    return (
        <>
            <div className='p-3 w-full h-16 text-2xl font-medium'>
                <h1>{question.question}</h1>
            </div>
            <form method='post' onSubmit={(e) => nextQuestion(e)}>
                <div className='p-3 w-full h-64 flex flex-col justify-center'>
                    {question.options.map((option, index) => (
                        <label><input
                        type="radio"
                        name="options"
                        className='my-5'
                        value={index}
                        onChange={(e) => setSelected(e.currentTarget.value)} 
                        required/> {option}
                    </label>
                    ))}
                </div>
                <div className='p-3 w-full h-20 items-'>
                    <button type='submit' value='next'>next</button>
                </div>
            </form>
        </>
    )
}
