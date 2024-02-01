import { Header } from '../components/Header'
import { QuizBox } from '../components/QuizBox'
import { useLocation } from "react-router-dom";

export const QuizPage = () => {
    const {state} = useLocation()

    return (
        <>
            <Header />
            <QuizBox quiz={state.quiz}/>
        </>
    );
}