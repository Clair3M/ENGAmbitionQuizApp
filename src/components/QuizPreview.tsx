import '../output.css'

function QuizPreview() {

    return (
        <div className="border-2 border-solid border-gray-400 rounded-3xl w-96 h-44 p-3 drop-shadow-lg"> 
            <h2>Quiz Name</h2>
            <p>Highest Score: 60%</p>
            <p>Silly little quiz about silly little guys.</p>
            <button>Start Quiz</button>
        </div>
    );
}

export default QuizPreview;