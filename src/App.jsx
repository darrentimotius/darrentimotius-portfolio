import React, { useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

export default function App(){
    useEffect(() => {
    if (typeof window === 'undefined') return
    // Matikan auto scroll restore dan paksa ke atas
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

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
