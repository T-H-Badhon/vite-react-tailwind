import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import SubsCard from './Components/SubsCard/SubsCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-6xl px-9'>Hello</h1>
      <h1 className='text-5xl bg-slate-600 text-center py-4 mb-4'>Choose Subscription</h1>
      <div>
        <SubsCard></SubsCard>
      </div>
    </div>
  )
}

export default App
