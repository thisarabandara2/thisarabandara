import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import Banner from './components/Banner'
import { Skills } from './components/Skills'
import { ProjectCard } from './components/ProjectCard'
import { Projects } from './components/Projects'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>

      </div>
  )
}

export default App
