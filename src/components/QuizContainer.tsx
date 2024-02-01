import '../output.css'
import { QuizPreview } from './QuizPreview'
import { Quiz, QuizInfo, Question } from '../QuizStructure'

let info1: QuizInfo = {title:'Monty Python', attempted:false, desc:'Can you make it over the bridge?'};
let questions1: Question[] = [{question: "What is the carrying capacity of a european swallow?", options: ["1 coconut", "50 grams"], answerKey: 0}];

let quizes: Quiz[] = [new Quiz(info1, questions1)];

export const QuizContainer =() => {
    return (
        <div className="z-0 bg-white w-full flex flex-col justify-items-start items-center inset-y-28 overflow-auto">
            {quizes.map((quiz) => (
                <QuizPreview quiz={quiz} />
            ))}
        </div>  
    );
}
