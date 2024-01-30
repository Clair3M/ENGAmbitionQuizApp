import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import Header from './components/Header.tsx'
import './output.css'
import QuizPreview from './components/QuizPreview.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <QuizPreview />
  </React.StrictMode>,
)
