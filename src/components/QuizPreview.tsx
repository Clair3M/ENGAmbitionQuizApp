import '../output.css'

function QuizPreview() {

    return (
        <div className='w-preview max-w-19/20 h-auto p-5'>
            <div className="bg-gray-50 border-2 border-solid border-gray-400 rounded-3xl w-full h-full p-2 drop-shadow-lg flex flex-col">
                <h2 className='text-4xl font-semibold p-1'>Quiz Name</h2>
                <p className='p-1'>Highest Score: 60%</p>
                <div className='p-1'>
                    <p className='h-14'>Silly little quiz about silly little guys. I need to make this description longer so I can see.</p>
                </div>
                <div className='flex justify-center'>
                    <button>Start Quiz</button>
                </div> 
            </div>
        </div>
    );
}

export default QuizPreview;