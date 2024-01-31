import '../output.css'
 
export const QuizPreview = (props: {title: String, desc: String}) => {
    return (
        <div className='w-preview max-w-19/20 h-auto p-5'>
            <div className="content-box w-full h-full">
                <h2 className='text-4xl font-semibold p-1'>{props.title}</h2>
                <p className='p-1'>Highest Score: 60%</p>
                <div className='p-1'>
                    <p className='h-14'>{props.desc}</p>
                </div>
                <div className='flex justify-center'>
                    <button>Start Quiz</button>
                </div> 
            </div>
        </div>
    );
}
