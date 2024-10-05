"use client"
import React from 'react'

const loading = () => {
  return (
    <>
    <div className="flex flex-col items-center w-full min-h-screen justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      <div className="text-white text-2xl font-bold mt-4">Loading...</div>
    </div>
    </>
  )
}

export default loading