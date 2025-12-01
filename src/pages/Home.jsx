import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

let isFirstLoad = true;

const Home = () => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    const isReload = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';
    const shouldAnimate = !isReload || !isFirstLoad;
    
    useEffect(() => {
        isFirstLoad = false;
    }, [])
    return (
        <div>
            <Navbar/>
            <motion.div initial={shouldAnimate ? {opacity: 0, y: 50 } : false} animate={{opacity: 1 ,y: 0 }} transition={{ duration: 0.5 }} className='min-h-screen flex flex-col'>
                <Hero/>
            </motion.div>
        </div>
    )
}

export default Home
