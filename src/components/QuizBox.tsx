import '../output.css';
import { useState } from 'react';
import { Quiz } from '../QuizStructure.tsx'


export const QuizBox = (props: {quiz:Quiz}) => {
    const quiz = props.quiz;
    const [question, setQuestion] = useState(quiz.questions[quiz.currentQuestion]);

    function nextQuestion() {
        setQuestion(quiz.getNextQuestion())
    }
    function previousQuestion() {
        setQuestion(quiz.getPreviousQuestion())
    }

    return (
        <div className='w-full h-auto flex flex-col items-center p-5 overflow-auto'>
            <div className='content-box w-quiz max-w-19/20 w-full h-96'>
                <div className='p-3 w-full h-16 text-2xl font-medium'>
                    <h1>{question.question}</h1>
                </div>
                <div className='p-3 w-full h-64 flex flex-col justify-center'>
                    <ul>
                        {question.options.map((option) => (
                            <li>
                                <input type="radio" name="options"/> {option}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='p-3 w-full h-20 items-'>
                    <button onClick={previousQuestion}>back</button>
                    <button onClick={nextQuestion}>next</button>
                </div>
            </div>
        </div>
       
    );
}
