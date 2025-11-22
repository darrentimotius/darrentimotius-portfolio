import React from 'react'
import { motion } from 'framer-motion'

const demo = [1,2,3]

export default function Projects(){
  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-medium mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {demo.map((p,i)=>(
          <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="border border-black/10 rounded p-4">
            <img src={`https://picsum.photos/seed/${i}/800/500`} className="rounded mb-4" />
            <h3 className="text-lg font-medium mb-2">Project {i+1}</h3>
            <p className="text-sm text-black/60">Short project description goes here.</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}