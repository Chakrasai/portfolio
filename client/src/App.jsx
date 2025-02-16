import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <main className="pt-16">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Contact/>
      </main>
    </>
  )
}

export default App
