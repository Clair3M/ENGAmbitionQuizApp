import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'
import { ResultsPage } from "./pages/ResultsPage"
import { NonExistPage } from './pages/NonExistPage'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="quiz" element={<QuizPage />} />
                <Route path="results" element={<ResultsPage />} />
                <Route path="*" element={<NonExistPage />} />
            </Routes>
        </BrowserRouter>
    );
}
