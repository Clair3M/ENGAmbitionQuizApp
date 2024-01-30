import '../output.css'
import QuizPreview from './QuizPreview';

function QuizPreviewContainer() {

    return (
        <div className="bg-white border-2 border-solid border-red-400 h-preview-container w-full flex flex-col justify-items-start items-center overflow-auto"> 
            <QuizPreview />
            <QuizPreview />
            <QuizPreview />
            <div className='bg-gradient-to-b from-black/5 to-transparent absolute left-0 w-full h-10'/>
        </div>
    );
}

export default QuizPreviewContainer;