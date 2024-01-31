import '../output.css'
import { QuizPreview } from './QuizPreview'

const quizInfo = [
    {title: 'Test One', desc: 'silly little quiz about silly little guys.'},
    {title: 'Test Two', desc: 'wowie, this is a goofy one.'},
    {title: 'Test Three', desc: 'omg, a quizz?? I hope I pass.'},
    {title: 'Test Four', desc: 'silly little quiz about silly little guys.'},
    {title: 'Test One', desc: 'silly little quiz about silly little guys.'},
    {title: 'Test Two', desc: 'wowie, this is a goofy one.'},
    {title: 'Test Three', desc: 'omg, a quizz?? I hope I pass.'},
    {title: 'Test Four', desc: 'silly little quiz about silly little guys.'}
];

export const QuizContainer =() => {
    return (
        <div className="bg-white w-full flex flex-col justify-items-start items-center overflow-auto">
            {quizInfo.map((quiz) => (
                <QuizPreview title={quiz.title} desc={quiz.desc} />
            ))}
        </div>
    );
}
