
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
