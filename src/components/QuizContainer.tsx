import '../output.css'
import { QuizPreview } from './QuizPreview'
import { Quiz, QuizInfo, Question } from '../QuizStructure'

let info: QuizInfo = {title:'Quiz Name', attempted:false, desc:'Silly little quiz about silly little guys'};
let questions: Question[] = [];
let quizes: Quiz[] = [new Quiz(info, questions)];

export const QuizContainer =() => {
    return (
        <div className="bg-white w-full flex flex-col justify-items-start items-center inset-y-28 overflow-auto">
            {quizes.map((quiz) => (
                <QuizPreview quiz={quiz} />
            ))}
        </div>  
    );
}
