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
        const score = quiz.highScore
        navigate('/results', {state: {score}});
    }
    const NavButtons = () => {
        let nextButtonText = 'next';
        if (quiz.currentQuestion == quiz.numQuestions-1) {
            nextButtonText = 'submit';
        }
        const nextButton = <button type='submit' value='next' className='right-5 bg-green-200'>{nextButtonText}</button>;
        const previousButton = <button onClick={previousQuestion}>previous</button>;
        let stuff = <></>;
        if (quiz.currentQuestion == 0) {
            stuff = <>{nextButton}</>;
        } else {
            stuff = <>{previousButton} {nextButton}</>;
        }
        return (
            stuff
        )
    }

    const whyWontMethodsWork = (quiz: Quiz) => {
        let correct = 0;
        quiz.info.attempted = true;
        for (let i = 0; i < quiz.numQuestions; i++) {
            if (quiz.questions[i].answerKey == quiz.answers[i]) {
                correct++;
            }
        }
        quiz.highScore = correct / quiz.numQuestions;
    }
    const nextQuestion = (e: FormEvent) => {
        e.preventDefault();
        quiz.answers[quiz.currentQuestion] = +option;
        if (quiz.currentQuestion >= quiz.numQuestions-1) {
            whyWontMethodsWork(quiz);
            goToResults();
        }
        quiz.currentQuestion += 1;
        setQuestion(quiz.questions[quiz.currentQuestion]);
    }
    const previousQuestion = (e: FormEvent) => {
        e.preventDefault();
        if (quiz.currentQuestion > 0) {
            quiz.currentQuestion -= 1;
            setQuestion(quiz.questions[quiz.currentQuestion]);
        }
    }

    return (
        <>
            <div className='p-3 w-full h-24 text-2xl font-medium overflow-hidden'>
                <h1>{question.question}</h1>
            </div>
            <form method='post' onSubmit={(e) => nextQuestion(e)}>
                <div className='p-3 w-full h-52 flex flex-col justify-center overflow-scroll'>
                    {question.options.map((option, index) => (
                        <label><input
                        type="radio"
                        name="options"
                        className='my-4'
                        value={index}
                        onChange={(e) => setSelected(e.currentTarget.value)} 
                        required/> {option}
                    </label>
                    ))}
                </div>
                <div className='p-3 w-full h-20'>
                    <NavButtons />
                </div>
            </form>
        </>
    )
}
