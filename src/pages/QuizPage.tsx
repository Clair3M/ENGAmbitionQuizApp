import { useLocation } from "react-router-dom";

import { Header } from '../components/Header'
import { ContentBox } from '../components/ContentBox'
import { QuizContent } from '../components/QuizContent'

export const QuizPage = () => {
    const {state} = useLocation()

    return (
        <>
            <Header />
            <ContentBox children={<QuizContent quiz={state.quiz} />}/>
        </>
    );
}