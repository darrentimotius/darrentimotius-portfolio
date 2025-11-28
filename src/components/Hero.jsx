import React, { useState} from 'react'
import { LayoutGroup, motion } from "framer-motion"
import Card from './Card'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const itemVariant = {
        hidden: { 
            opacity: 0
        },
        show: (delay) => ({
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: delay
            }
        })
    };
    const [loadedImages, setLoadedImages] = useState(0);
    const totalImages = 4;
    const allLoaded = loadedImages === totalImages;

    return (
        <div className='ml-0 md:ml-[340px] pl-8 pr-8 md:pl-0 relative flex-1 grow-0 pb-8 md:pb-14'>
            <div className='flex flex-col'>
                <h1 className='leading-6 max-w-md mt-32 md:mt-24 mb-4 text-sm'>
                    Hi, my name is Darren Timotius. I am a computer science student and BCA Scholarship Awardee (Batch 21) living in Bogor. I enjoy to listening to music, playing guitar, and exploring video games.
                </h1>

                <small className='flex-1 grow-0 p-0 m-0 text-[rgb(173,173,173)] text-[11px] max-w-sm mb-12 md:mb-20'>
                    Updated <time datetime="2025-11-27">November 27, 2025</time>
                </small>

                <div className='flex flex-col gap-6 relative grow flex-1'>
                    <div className='flex flex-row items-end md:items-center justify-center mb-2 gap-4'>
                        <span className='text-sm w-full flex-wrap'>
                            Projects
                        </span>

                        <div>
                            <button className={`text-xs w-fit ml-auto grow-0 hidden lg:block cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? (
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#232323" style={{ opacity: 1 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z"/>
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#232323" style={{ opacity: 1 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5.75 10.2502H18.25C18.8023 10.2502 19.25 9.80253 19.25 9.25025V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H5.75C5.19772 4.75 4.75 5.19772 4.75 5.75V9.25025C4.75 9.80253 5.19772 10.2502 5.75 10.2502Z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5.75 19.2502H18.25C18.8023 19.2502 19.25 18.8025 19.25 18.2502V14.75C19.25 14.1977 18.8023 13.75 18.25 13.75H5.75C5.19772 13.75 4.75 14.1977 4.75 14.75V18.2502C4.75 18.8025 5.19772 19.2502 5.75 19.2502Z"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <LayoutGroup>
                        <motion.div
                            className={`gap-2 gap-y-6 lg:gap-2 ${
                                isOpen 
                                    ? 'flex flex-col max-w-3xl' 
                                    : 'flex flex-col lg:gap-y-6 lg:grid lg:grid-cols-2 3xl:grid-cols-4'
                            }`}
                            initial='hidden'
                            animate={allLoaded ? 'show' : 'hidden'}
                            variants={{
                                hidden: {},
                                show: {
                                    transition: { staggerChildren : 0.15 }
                                }
                            }}
                            >
                            <Card
                                layoutId='card-1'
                                itemVariants={itemVariant}
                                onImageLoad={() => setLoadedImages(c => c + 1)}
                                isOpen={isOpen}
                                image='/photos/sentika/sentika-card.jpg'
                                title='Sentika'
                                description='Real‑time Indonesian Sentiment Analysis powered by IndoBERT, FastAPI, and Next.js'
                                date='September 23, 2025'
                                
                            />
                            <Card
                                layoutId='card-2'
                                itemVariants={itemVariant}
                                onImageLoad={() => setLoadedImages(c => c + 1)}
                                isOpen={isOpen}
                                image='/photos/palorant/palorant-card.jpg'
                                title='PALORANT'
                                description='Simple, responsive website built with vanilla HTML, CSS, and JavaScript.'
                                date='April 18, 2025'
                            />
                            <Card
                                layoutId='card-3'
                                itemVariants={itemVariant}
                                onImageLoad={() => setLoadedImages(c => c + 1)}
                                isOpen={isOpen}
                                image='/photos/palorant/palorant-card.jpg'
                                title='PALORANT'
                                description='Simple, responsive website built with vanilla HTML, CSS, and JavaScript.'
                                date='April 18, 2025'
                            />
                            <Card
                                layoutId='card-4'
                                itemVariants={itemVariant}
                                onImageLoad={() => setLoadedImages(c => c + 1)}
                                isOpen={isOpen}
                                image='/photos/palorant/palorant-card.jpg'
                                title='PALORANT'
                                description='Simple, responsive website built with vanilla HTML, CSS, and JavaScript.'
                                date='April 18, 2025'
                            />
                        </motion.div>
                    </LayoutGroup>
                </div>
            </div>
        </div>
    )
}

export default Hero