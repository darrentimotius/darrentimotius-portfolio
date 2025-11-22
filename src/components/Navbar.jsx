import React from 'react'

export default function Navbar(){
  return (
    <nav className="w-full border-b border-black py-6 px-16 flex justify-between items-center sticky top-0 bg-gray-100 z-20">
        <div className="font-semibold text-base">
            <a href="/">
                darrentimotius
            </a>
        </div>

        <div className="flex gap-6 text-base font-semibold">
            <a href="#projects"
                className="relative font-semibold text-base
                            after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                            after:h-[1px] after:w-0 after:bg-black
                            after:transition-all after:duration-300
                            hover:after:w-full">
                Projects
            </a>

            <a href="#extras"
                className="relative font-semibold text-base
                            after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                            after:h-[1px] after:w-0 after:bg-black
                            after:transition-all after:duration-300
                            hover:after:w-full">
                Extras
            </a>

            <a href="#about"
                className="relative font-semibold text-base
                            after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                            after:h-[1px] after:w-0 after:bg-black
                            after:transition-all after:duration-300
                            hover:after:w-full">
                About
                </a>
        </div>
    </nav>
  )
}