import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-between flex-wrap items-center">
        <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">The Invisible Threat: Rising House Gases and Their Impact on Climate Events like Hurricane Sandy</h1>
            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
            <div className="flex flex-wrap gap-2">
            <span className="bg-blue-700 text-xs px-2 py-1 rounded">Climate Change</span>
            <span className="bg-blue-700 text-xs px-2 py-1 rounded">Hurricane Sandy</span>
            </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
            <Image height={1000} width={1000} src="https://github.com/jsdhami/Vayu/blob/main/public/images/blog/blog1.png" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
    </div>
    </>
  )
}

export default page