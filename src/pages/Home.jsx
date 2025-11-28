import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <motion.div initial={{opacity: 0, y: 50 }} animate={{opacity: 1 ,y: 0 }} transition={{ duration: 0.5 }} className='min-h-screen flex flex-col'>
                <Hero/>
            </motion.div>
        </div>
    )
}

export default Home
