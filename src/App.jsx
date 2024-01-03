import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {router as WebRouter} from "./router/router"
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <WebRouter />
    </BrowserRouter>
  )
}

export default App
