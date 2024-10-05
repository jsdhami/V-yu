"use client";
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <>
      <div className="flex bg-fixed z-30 bg-opacity-75 w-full h-20 bg-black fixed  flex-row items-center justify-between px-12  ">
        <div className="">
          <h1 className="text-2xl font-bold text-center"><Link href='/'>Vāyu</Link></h1>
        </div>
        <div className="">
          <div className="">
            <ul className="flex-row items-center justify-around lg:gap-10 gap-6 hidden md:flex">
              <li className="text-md font-medium text-center hover:text-sky-500"><Link href='/'>Home</Link></li>
              <li className="text-md font-medium text-center hover:text-sky-500"><Link href='/about'>About</Link></li>
              <li className="text-md font-medium text-center hover:text-sky-500"><Link href='/stories'>Stories</Link></li>
              <li className="text-md font-medium text-center hover:text-sky-500"><Link href='/dataexplorer'>Data Explorer</Link></li>
              <li className="text-md font-medium text-center hover:text-sky-500"><Link href='/team'>Team</Link></li>
              <li className="text-md text-center hover:text-sky-500 bg-white hover:bg-gray-200 text-black font-medium p-2 rounded-full px-6 shadow-md"><Link href='/ghgplot'>ghgplot</Link></li>
            </ul>
            <div className="flex md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 m-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </ svg>
              <div className="text-md text-center bg-white text-black font-medium p-2 rounded-full px-6 shadow-md"><Link href='/ghgplot'>ghgplot</Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default navbar