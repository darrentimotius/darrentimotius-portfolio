import { motion } from 'framer-motion'
import React, { useMemo} from 'react'

const Card = ({ layoutId,itemVariants, onImageLoad, isOpen, image, title, href, description, date }) => {
    const randomDelay = useMemo(() => Math.random() * 0.6, []);
    return (
        <motion.div layoutId={layoutId} className='w-full flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-4 cursor-pointer' variants={itemVariants} custom={randomDelay}>
            <a className='cursor-pointer h-full overflow-hidden relative group w-full flex flex-col gap-2' href={href}>
                <div className={`w-full relative overflow-hidden rounded-lg`}>
                    <img src={image} alt={title} className='w-full h-full object-cover group-hover:scale-105' decoding='async' loading='eager' onLoad={onImageLoad}/>
                </div>

                <div className={`hidden lg:flex ${isOpen ? 'lg:hidden' : ''} text-gray-900 flex-col`}>
                    <h3 className='text-sm'>
                        {title}
                    </h3>
                    <p className='text-xs'>
                        {description}
                    </p>
                </div>
            </a>

            <div className={`w-full lg:w-1/2 mb-4 flex flex-col-reverse lg:flex-col gap-2 lg:gap-4 ${isOpen ? '' : 'lg:hidden'}`}>
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
            </div>
        </motion.div>
    )
}

export default Card
