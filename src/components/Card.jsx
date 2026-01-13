import { AnimatePresence, motion } from 'framer-motion'
import React, { useMemo } from 'react'

const Card = ({ layoutId,itemVariants, onImageLoad, isOpen, image, title, href, description, date }) => {
    const randomDelay = useMemo(() => Math.random() * 0.6, []);
    return (
        <div className={`w-full flex flex-col lg:items-end gap-2 ${isOpen ? 'lg:flex-row lg:gap-4' : ''} `} >
            <motion.div layoutId={layoutId} variants={itemVariants} custom={randomDelay} className={`flex flex-col gap-2 ${isOpen ? 'lg:w-auto' : ''} `}>
                <a className={`cursor-pointer w-full h-auto overflow-hidden relative group rounded-lg ${isOpen ? '' : ''}`} href={href}>
                    <img src={image} alt="" className='w-full h-full object-cover relative overflow-hidden group-hover:scale-105' decoding='async' loading='eager' onLoad={onImageLoad}/>
                </a>
            </motion.div>

            <AnimatePresence mode='wait'>
                {!isOpen && (
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7, duration: 1, ease: [0, 0.71, 0.2, 1.01]}} className={`text-gray-900 w-full hidden lg:flex flex-col`}>
                        <h3 className='text-sm'>
                            {title}
                        </h3>
                        <p className='text-xs'>
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode='wait'>
                <motion.div key={isOpen ? "open" : "closed"} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.7, duration: 1, ease: [0, 0.71, 0.2, 1.01]}} className={`w-full mb-4 flex ${isOpen ? 'hidden lg:flex flex-col gap-4' : 'flex lg:hidden flex-col-reverse gap-2'}`}>
                    <div className='flex-1 w-full'>
                        <h3 className='p-0 m-0 text-gray-900 text-sm lg:w-3/4 xl:w-full'>
                            {title}
                        </h3>
                        <p className='p-0 m-0 text-gray-900 text-xs lg:w-3/4 xl:w-full'>
                            {description}
                        </p>
                    </div>
                    <ul className='flex-1 flex flex-row lg:flex-col'>
                        <li className='flex-1 flex lg:flex-row items-center gap-1'>
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#adadad">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 4.75V8.25"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 4.75V8.25"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7.75 10.75H16.25"></path>
                            </svg>
                            <time className='text-xs text-[rgb(173,173,173)]'>
                                {date}
                            </time>
                        </li>
                    </ul>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Card
