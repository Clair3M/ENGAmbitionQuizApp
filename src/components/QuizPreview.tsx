import { Quiz } from '../QuizStructure.tsx'
import '../output.css'
 
export const QuizPreview = (props: {quiz: Quiz}) => {
    const info = props.quiz.info;
    let attemptedMessage;
    if (info.attempted) {
        attemptedMessage = 'Highest Score:' + (props.quiz.getHighScore() * 100).toString() + '%';
    } else {
        attemptedMessage = 'Unattemped';
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
                    <button>Start Quiz</button>
                </div> 
            </div>
        </div>
    );
}
