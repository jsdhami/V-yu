import Navbar from '@/components/navbar/navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col min-h-screen items-center justify-center ">
        <div className="w-1/2">
            <h1 className="text-4xl font-bold">Audiobook</h1>
            <p className="text-xl">Listen to the latest audiobooks on climate change and sustainability</p>
        </div>
             <button className="bg-white text-black text-lg font-bold py-2 px-4 rounded-full">
              <audio controls>
                <source src="https://github.com/jsdhami/Vayu/blob/main/public/The%20Climate%20Change%20Audiobook.mp3?raw=true" type="audio/mpeg" />
              </audio>
            </button>
        <div className="w-1/2">
        <video
          src="https://earth.gov/ghgcenter/earth-gas.83289921.mp4"
          autoPlay
          loop
          playsInline
          className="absolute mt-8 w-full h-full object-cover"
        />
        </div>

    </div>
    </>
  )
}

export default page