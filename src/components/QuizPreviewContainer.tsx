import '../output.css'
import QuizPreview from './QuizPreview';

function QuizPreviewContainer() {

    return (
        <div className="bg-white w-full flex flex-col justify-items-start items-center overflow-auto">
            <QuizPreview />
            <QuizPreview />
            <QuizPreview />
        </div>
    );
}

export default QuizPreviewContainer;