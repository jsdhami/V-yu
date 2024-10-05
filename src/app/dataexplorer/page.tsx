import GlobeComponent from '@/components/GlobeComponent/GlobeComponent'
import React from 'react'
import {
      ResizableHandle,
      ResizablePanel,
      ResizablePanelGroup,
    } from "@/components/ui/resizable"
import Plots from '@/components/Plots/Plots'

const page = () => {
  return (
    <>
    <ResizablePanelGroup direction="vertical" className='w-full min-h-screen'>
      <ResizablePanel>
      <GlobeComponent/>
      Hello
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
      <Plots/>
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
  )
}

export default page