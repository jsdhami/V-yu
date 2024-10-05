import GlobeComponent from '@/components/GlobeComponent/GlobeComponent'
import React from 'react'
import {
      ResizableHandle,
      ResizablePanel,
      ResizablePanelGroup,
    } from "@/components/ui/resizable"

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
      {/* <GlobeComponent/> */}
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
  )
}

export default page