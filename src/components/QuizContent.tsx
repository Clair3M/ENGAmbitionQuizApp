import { useState } from 'react';

import { Quiz } from '../data/QuizStructure.tsx'

import '../output.css';

export const QuizContent = (props: {quiz:Quiz}) => {
    const quiz = props.quiz;
    const [question, setQuestion] = useState(quiz.questions[quiz.currentQuestion]);

    const nextQuestion = () => {
        setQuestion(quiz.getNextQuestion())
    }
    const previousQuestion = () => {
        setQuestion(quiz.getPreviousQuestion());
    }

    return (
        <>
            <div className='p-3 w-full h-16 text-2xl font-medium'>
                <h1>{question.question}</h1>
            </div>
            <form>
                <div className='p-3 w-full h-64 flex flex-col justify-center'>
                    {question.options.map((option) => (
                        <label><input type="radio" name="options" className='my-5' required/> {option}</label>
                    ))}
                </div>
                <div className='p-3 w-full h-20 items-'>
                    <button onClick={previousQuestion}>back</button>
                    <button onClick={nextQuestion}>next</button>
                </div>
            </form>
        </>
    )
}
