import { useNavigate } from "react-router-dom";

import '../output.css'

export const Results = (props: {score: number}) => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    return (
        <div className="flex flex-col items-center">
            <div className='text-center h-64 p-3 flex flex-col justify-center'>
                <h1 className="text-4xl font-semibold mb-4">Final Score:</h1>
                <h2 className="text-3xl font-medium">{Math.round(props.score * 100)}%</h2>
            </div>
            <div className="p-3 w-full h-20 flex justify-center items-center">
                <button onClick={goHome}>Go Home</button>
            </div>
        </div>
    )
}