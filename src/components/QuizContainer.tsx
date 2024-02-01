import { quizes } from '../data/Quizes'
import { QuizPreview } from './QuizPreview'

import '../output.css'

export const QuizContainer =() => {
    return (
        <div className="z-0 bg-white w-full flex flex-col justify-items-start items-center inset-y-28 overflow-auto">
            {quizes.map((quiz) => (
                <QuizPreview quiz={quiz} />
            ))}
        </div>  
    );
}
