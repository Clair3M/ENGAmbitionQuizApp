import { Quiz } from '../data/QuizStructure.tsx'
import { useNavigate } from "react-router-dom";

import '../output.css'

export const QuizPreview = (props: {quiz: Quiz}) => {
    const quiz = props.quiz;
    const info = quiz.info;
    let attemptedMessage;
    if (info.attempted) {
        attemptedMessage = 'Best Attempt: ' + (props.quiz.getHighScore() * 100).toString() + '%';
    } else {
        attemptedMessage = 'Unattemped';
    }
    const navigate = useNavigate();
    const goToQuiz = () => {
        navigate('quiz', {state: {quiz}});
    }

    return (
        <div className='w-preview max-w-19/20 h-auto p-5'>
            <div className="content-box w-full h-full">
                <h2 className='text-4xl font-semibold p-1'>{info.title}</h2>
                <p className='p-1'>{attemptedMessage}</p>
                <div className='p-1'>
                    <p className='h-14'>{info.desc}</p>
                </div>
                <div className='flex justify-center'>
                    <button onClick={goToQuiz}>Start Quiz</button>
                </div> 
            </div>
        </div>
    );
}
