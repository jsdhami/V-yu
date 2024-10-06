import GlobeComponent from '@/components/GlobeComponent/GlobeComponent'
import React from 'react'
import {
      ResizableHandle,
      ResizablePanel,
      ResizablePanelGroup,
    } from "@/components/ui/resizable"
import CH4Chart from '@/components/CH4Chart/CH4Chart'
import Navbar from "@/components/navbar/navbar";


const page = () => {
  return (
    <>
    <Navbar/>
    <ResizablePanelGroup direction="vertical" className='w-full min-h-screen'>
      <ResizablePanel>
      <GlobeComponent/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <CH4Chart/>
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
  )
}

export default page