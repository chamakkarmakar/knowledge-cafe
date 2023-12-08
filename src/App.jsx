import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  return (
    <div className='container mx-auto w-11/12 mt-5 md:w-4/5'>
      <Header />
      <hr />
      <Main />
      
    </div>
  )
}

export default App
