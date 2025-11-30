import React, { useState } from 'react'
import Hero from './Hero'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className={`px-8 py-10 w-[340px] hidden md:flex flex-col gap-6 fixed top-0 left-0 bottom-0`}>
                <div className='flex justify-between items-center'>
                    <a href='/'>
                        <img src="/photos/me-navbar.jpg" className='rounded-full w-12 h-12' decoding='async' loading='eager'/>
                    </a>
                </div>

                <div className='text-gray-900'>
                    <h3 className='text-sm'>
                        Darren Timotius
                    </h3>
                    <p className='text-xs'>
                        B. 2005 in Bandung. Based in Bogor
                    </p>
                </div>

                <h3 className='text-gray-900 text-xs'>
                    CS Student, BINUS
                </h3>

                <nav className='text-gray-900 text-xs'>
                    <ul>
                        <li className='flex cursor-pointer'>
                            <a href="/projects">
                                → Projects
                            </a>
                        </li>
                        <li className='flex cursor-pointer'>
                            <a href="/about">
                                → About me
                            </a>
                        </li>
                        <li className='flex cursor-pointer'>
                            <a href="/now">
                                → Now
                            </a>
                        </li>
                        <li className='flex cursor-pointer'>
                            <a href="mailto:me@darrentimotius.me">
                                → Contact
                            </a>
                        </li>
                        <li className='flex cursor-pointer'>
                            <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/darrentimotius">
                                ↗ Instagram
                            </a>
                        </li>
                        <li className='flex cursor-pointer'>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/darrentimotius">
                                ↗ Github
                            </a>
                        </li>
                        <li className='flex cursor-pointer'>
                            <a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/darrentimotius/">
                                ↗ LinkedIn
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='absolute bottom-12 left-8 right-8 flex flex-col gap-8 text-xs'>
                    <span className='flex-1'>
                        © 2025
                    </span>
                </div>
            </div>

            <header className='fixed top-8 left-6 right-6 z-10 flex flex-row gap-2'>
                <div className='w-full flex flex-col md:hidden p-2 bg-white/70 backdrop-blur-md rounded-3xl border border-gray-200'>
                    <div className='flex flex-row items-center'>
                        <a href="/">
                            <img src="/photos/me-navbar.jpg" className='rounded-full w-8 h-8'/>
                        </a>
                        <button className='ml-auto' onClick={() => setIsOpen(!isOpen)} aria-label='Menu'>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#282828">
                                <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z">
                                </path>
                                <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z">
                                </path>
                                <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <div className={`flex-col py-4 gap-4 overflow-y-auto ${isOpen ? 'flex' : 'hidden'}`}>
                        <div className='text-gray-900'>
                            <h3 className='text-sm'>
                                Darren Timotius
                            </h3>
                            <p className='text-xs'>
                                B. 2005 in Bandung. Based in Bogor
                            </p>
                        </div>

                        <h3 className='text-gray-900 text-xs'>
                            CS Student, BINUS
                        </h3>

                        <div className='grid grid-cols-2 md:grid-cols-1 text-gray-900 text-xs'>
                            <div>
                                <a className='p-0 m-0 w-fit block' href="/projects">
                                    → Projects
                                </a>
                                <a className='p-0 m-0 w-fit block' href="/about">
                                    → About me
                                </a>
                                <a className='p-0 m-0 w-fit block' href="/now">
                                    → Now
                                </a>
                                <a className='p-0 m-0 w-fit block' href="mailto:me@darrentimotius.me">
                                    → Contact
                                </a>
                            </div>
                            <div>
                                <a className='p-0 m-0 w-fit block' target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/darrentimotius">
                                    ↗ Instagram
                                </a>
                                <a className='p-0 m-0 w-fit block' target='_blank' rel='noopener noreferrer' href="https://github.com/darrentimotius">
                                    ↗ Github
                                </a>
                                <a className='p-0 m-0 w-fit block' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/darrentimotius/">
                                    ↗ LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
