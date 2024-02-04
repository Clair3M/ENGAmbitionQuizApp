import { useLocation } from "react-router-dom";

import { Header } from '../components/Header'
import { ContentBox } from '../components/ContentBox'
import { Results } from "../components/Results";

export const ResultsPage = () => {
    const {state} = useLocation()

    return (
        <>
            <Header />
            <ContentBox children={<Results score={state.score}/>}/>
        </>
    );
}