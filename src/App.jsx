import { useState } from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (

    <div>
          <Home/>
          <About/>
      </div>
  )
}

export default App
