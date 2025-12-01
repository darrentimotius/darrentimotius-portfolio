import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { motion } from 'framer-motion'

let isFirstLoad = true;

const Project = ({title, publish_date, roles, link, content}) => {
    const navigationEntries = window.performance.getEntriesByType('navigation');
    const isReload = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';
    const shouldAnimate = !isReload || !isFirstLoad;

    useEffect(() => {
        document.title = `${title} | Darren Timotius`;
        isFirstLoad = false;
    }, [])

    return (
        <div>
            <Navbar/>
            <motion.div initial={shouldAnimate ? {opacity: 0, y: 50 } : false} animate={{opacity: 1 ,y: 0 }} transition={{ duration: 0.5 }} viewport={{once: true}} className='min-h-screen flex flex-col'>
                <div className='ml-0 md:ml-[340px] pl-8 pr-8 md:pl-0 relative flex-1 grow-0 pb-8 md:pb-14'>
                    <article className='max-w-2xl relative min-h-screen'>
                        <h1 className='p-0 m-0 text-gray-900 text-base leading-6 mt-32 md:mt-10 mb-8'>
                            {title}
                        </h1>

                        <div className='flex flex-row gap-8 text-xs mb-8'>
                            <div className='flex-1 text-[11px]'>
                                <small className='text-[rgb(173,173,173)] block mb-1 text-[11px]'>
                                    Publish date
                                </small>
                                <span className='block'>
                                    <time dateTime={publish_date}>
                                        {publish_date}
                                    </time>
                                </span>
                            </div>
                            <div className='flex-1 text-[11px]'>
                                <small className='text-[rgb(173,173,173)] block mb-1 text-[11px]'>
                                    Roles
                                </small>
                                <span className='block'>
                                    {roles}
                                </span>
                            </div>
                            <div className='flex-1 text-[11px]'>
                                <small className='text-[rgb(173,173,173)] block mb-1 text-[11px]'>
                                    Link
                                </small>
                                <a href={link} target='_blank' className='block underline w-fit'>Visit Site</a>
                            </div>
                        </div>

                        <div className='flex flex-col gap-8'>
                            {content}
                        </div>
                    </article>
                </div>
            </motion.div>
        </div>
  )
}

export default Project
