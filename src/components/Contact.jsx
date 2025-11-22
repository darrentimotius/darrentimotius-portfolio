import React from 'react'
import { motion } from 'framer-motion'
import { slowFade } from '../animations/variants'


export default function Contact() {
return (
<section id="contact" className="section">
<div className="container">
<motion.h2 variants={slowFade} initial="hidden" animate="show">Let's work together</motion.h2>
<motion.form className="contact-form" variants={slowFade} initial="hidden" animate="show" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}}>
<label>
<span>Name</span>
<input type="text" placeholder="Your name" />
</label>
<label>
<span>Email</span>
<input type="email" placeholder="you@example.com" />
</label>
<label>
<span>Message</span>
<textarea rows="5" placeholder="Hi! I'd like to..." />
</label>
<button type="submit" className="btn">Send message</button>
</motion.form>
</div>
</section>
)
}