import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'

export default function App(){
  const [isLoaded, setIsLoaded] = useState(false)
  const [components, setComponents] = useState({
    Navbar: null,
    Hero: null,
    Projects: null,
    About: null
  })

  useEffect(() => {
    function handleLoad(){
      // dynamically import main components only after load to avoid import-time crashes
      Promise.all([
        import('./components/Navbar'),
        import('./components/Hero'),
        import('./components/Projects'),
        import('./components/About')
      ]).then(([NavMod, HeroMod, ProjectsMod, AboutMod]) => {
        setComponents({
          Navbar: NavMod.default,
          Hero: HeroMod.default,
          Projects: ProjectsMod.default,
          About: AboutMod.default
        })
        setIsLoaded(true)
      }).catch((err) => {
        // if dynamic import fails, still set loaded so user sees UI (and we can show console error)
        // eslint-disable-next-line no-console
        console.error('Failed to load components dynamically', err)
        setIsLoaded(true)
      })
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

  const Navbar = components.Navbar
  const Hero = components.Hero
  const Projects = components.Projects
  const About = components.About

  return (
    <div className="flex flex-col">
      <header className="h-screen flex flex-col">
        {Navbar ? <Navbar /> : null}
        {Hero ? <Hero className="flex-1"/> : null}
      </header>

      <main>
        {Projects ? <Projects /> : null}
        {About ? <About /> : null}
      </main>
    </div>
  )
}
