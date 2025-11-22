import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

export default function App(){
  return (
    <div className="flex flex-col">
      <header className="h-screen flex flex-col">
        <Navbar />
        <Hero className="flex-1"/>
      </header>

      <main>
        <Projects />
        <About />
      </main>
    </div>
  )
}
