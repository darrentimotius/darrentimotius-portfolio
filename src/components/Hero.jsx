import React, { useState, useRef } from 'react'
import { motion, animate } from 'framer-motion'

export default function Hero({ className }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const startVideo = () => {
    const v = videoRef.current
    if (!v) return
    const p = v.play()
    setIsPlaying(true)
    if (p && typeof p.then === 'function') p.catch(() => {})
  }

  const goToProjects = () => {
    const el = typeof document !== 'undefined' ? document.getElementById('projects') : null
    if (el && typeof window !== 'undefined') {
      const start = window.scrollY || window.pageYOffset
      const target = el.getBoundingClientRect().top + start
      animate(start, target, {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(v) { window.scrollTo(0, v) }
      })
    } else if (typeof window !== 'undefined') {
      window.location.hash = '#projects'
    }
  }

  return (
    <section className={`w-full border-b border-black flex ${className || ''} relative`}>
      <video
        ref={videoRef}
        src="/videos/cloud.mp4"
        preload="auto"
        poster="/photos/window.png"
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-200 ${isPlaying ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="w-full flex flex-col gap-5 justify-center px-20 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <img src="/photos/window.png" className="w-20 md:w-40 h-auto" alt="window" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="flex flex-col items-center text-4xl font-normal leading-tight tracking-tight text-left">
          <p>
            Darren Timotius is a computer{' '}
            <span
              className="inline-block px-2 py-2 rounded-[100%] ring-1 ring-black leading-none cursor-pointer"
              onMouseEnter={startVideo}
            >
              science
            </span>{' '}
            student and BCA scholarship awardee batch 21 who enjoys building software and solving problems through code. Outside of coding you can find him listening to music, playing guitar, or exploring video games.
            <div className="h-5" />
            He is currently studying computer science @<span className="underline">BINUS</span> while dabbling in all things tech.
            <div className="h-5" />
            <button onClick={goToProjects} className="mt-10 text-base font-semibold cursor-pointer tracking-normal">Explore a few featured projects ↓</button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
