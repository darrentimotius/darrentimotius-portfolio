import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Loading from './components/Loading'

export default function App(){
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    function handleLoad(){
      setIsLoaded(true)
    }

    // If document already loaded (fast cache/dev), mark as loaded
    if (document.readyState === 'complete'){
      setIsLoaded(true)
      return
    }

    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (!isLoaded) return <Loading />

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
