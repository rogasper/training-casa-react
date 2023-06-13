import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { Users } from './components/Users'
import { BasketScoring } from './components/BasketScoring'
import { BadmintonScoring } from './components/BadmintonScoring'
import { ReducerState } from './components/ReducerState'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

function App() {
  const [changeScoring, setChangeScoring] = useState(true)

  return (
    <div>
      {/* <button onClick={() => setChangeScoring(!changeScoring)}>Change Scoreboard</button> */}
      {/* {changeScoring ? <BasketScoring /> : <BadmintonScoring />} */}
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App
