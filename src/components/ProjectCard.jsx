import React from 'react'
import { motion } from 'framer-motion'
import { subtleScale } from '../animations/variants'


export default function ProjectCard({ project }) {
return (
<motion.article className="card" variants={subtleScale} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.995 }}>
<div className="card-content">
<h3>{project.title}</h3>
<p className="muted">{project.tags.join(' • ')}</p>
<p className="excerpt">{project.excerpt}</p>
<div className="card-actions">
{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="link">Live</a>}
{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="link">Code</a>}
</div>
</div>
<div className="card-media" style={{ backgroundImage: `url(${project.image})` }} />
</motion.article>
)
}