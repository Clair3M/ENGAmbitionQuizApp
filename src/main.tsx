import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.tsx'
import { QuizContainer } from './components/QuizContainer.tsx'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />
      <QuizContainer />
    </div>
      
  </React.StrictMode>,
)
