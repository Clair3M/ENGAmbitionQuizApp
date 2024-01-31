import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage'
import { QuizPage } from './pages/QuizPage'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="quiz" element={<QuizPage />} />
            </Routes>
        </BrowserRouter>
    );
}
