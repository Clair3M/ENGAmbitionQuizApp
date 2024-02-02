import { Header } from '../components/Header'
import { ContentBox } from '../components/ContentBox'
import { Results } from "../components/Results";

export const ResultsPage = () => {

    return (
        <>
            <Header />
            <ContentBox children={<Results />}/>
        </>
    );
}