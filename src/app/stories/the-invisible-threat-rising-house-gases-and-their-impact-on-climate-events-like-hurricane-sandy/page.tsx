import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-between flex-wrap items-center min-h-screen">
        <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">The Invisible Threat: Rising House Gases and Their Impact on Climate Events like Hurricane Sandy</h1>
            <p className="text-gray-400 mb-4">Tropical cyclones are rapidly rotating storm systems that form over warm ocean waters. They have low-pressure centers, strong winds, and heavy rain. The names used for these storms vary depending on their location. Tropical cyclones use warm, moist air as fuel and warmer ocean temperatures provide more fuel, potentially intensifying storms. Warm sea surface temperatures are required for formation and strengthening, with higher temperatures resulting in faster intensification. High ocean heat content allows storms to achieve higher intensities, while faster-moving systems can intensify with lower ocean heat content. Climate change can affect tropical cyclones in various ways, including intensification of rainfall and wind speed, decrease in overall frequency, increase in the frequency of very intense storms, and poleward extension of where cyclones reach maximum intensity.</p>
            <div className="flex flex-wrap gap-2">
            <span className="bg-blue-700 text-xs px-2 py-1 rounded">Climate Change</span>
            <span className="bg-blue-700 text-xs px-2 py-1 rounded">Hurricane Sandy</span>
            </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
            <Image height={1000} width={1000} src="/gif1.gif" alt="Hurricane Sandy" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
    </div>
    </>
  )
}

export default page