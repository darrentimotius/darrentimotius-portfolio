import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

let isFirstLoad = true;

const About = () => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    const isReload = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';
    const shouldAnimate = !isReload || !isFirstLoad;

    useEffect(() => {
        document.title = 'Darren Timotius - About Me';
        isFirstLoad = false;
        }, [])

    return (
        <div>
            <Navbar/>
            <motion.div initial={shouldAnimate ? { opacity: 0, y: 50 } : false} animate={{opacity: 1 ,y: 0 }} transition={{ duration: 0.5 }} className='min-h-screen flex flex-col'>
                <div className='ml-0 md:ml-[340px] pl-8 pr-8 md:pl-0 relative flex-1 grow-0 pb-8 md:pb-14'>
                    <div className='max-w-lg flex flex-col'>
                        <div className='flex flex-col gap-6 mt-32 md:mt-10 mb-24'>
                            <article className='flex flex-col gap-6 max-w-3xl'>
                                <img src="/photos/about-me.jpg" className='rounded-lg' />
                                <p className='text-gray-900 text-sm leading-6 max-w-lg'>
                                    Hello! I'm Darren, a computer science student at <a target='_blank' href="https://binus.ac.id/" className='underline'>BINUS</a> University and a proud <a target='_blank' href="https://www.bca.co.id/" className='underline'>BCA</a> Scholarship Awardee (Batch 21) based in Bogor. My journey into the world of technology began with a curiosity for how things work, which has since blossomed into a deep-seated passion for coding and software development.
                                </p>
                                <p className='text-gray-900 text-sm leading-6 max-w-lg'>
                                    When I'm not immersed in lines of code or exploring new programming languages, I enjoy listening to music, playing the guitar, exploring video games, traveling to new places, eating delicious food, and spending quality time with friends and family.
                                </p>
                                <p className='text-gray-900 text-sm leading-6 max-w-lg'>
                                    You can find me on <a target='_blank' href="https://github.com/darrentimotius" className='underline'>Github</a>, <a target='_blank' href="https://www.instagram.com/darrentimotius" className='underline'>Instagram</a>, and <a target='_blank' href="https://www.linkedin.com/in/darrentimotius/" className='underline'>LinkedIn</a>.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default About
