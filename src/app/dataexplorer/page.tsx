import GlobeComponent from '@/components/GlobeComponent/GlobeComponent'
import React from 'react'
import {
      ResizableHandle,
      ResizablePanel,
      ResizablePanelGroup,
    } from "@/components/ui/resizable"
import CH4Chart from '@/components/CH4Chart/CH4Chart'
// import NotebookViewer from '@/components/NotebookViewer/NotebookViewer'
import Navbar from "@/components/navbar/navbar";


const page = () => {
  return (
    <>
    <Navbar/>
    <ResizablePanelGroup direction="vertical" className='w-full min-h-screen'>
      <ResizablePanel>
      <GlobeComponent/>
      Hello
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
      {/* <NotebookViewer
        nbviewerUrl="https://nbviewer.jupyter.org/github/US-GHG-Center/ghgc-docs/blob/staging/user_data_notebooks/casagfed-carbonflux-monthgrid-v3_User_Notebook.ipynb"
        colabUrl="https://colab.research.google.com/github/US-GHG-Center/ghgc-docs/blob/staging/user_data_notebooks/casagfed-carbonflux-monthgrid-v3_User_Notebook.ipynb"
        buttonText="Open in Google Colab"
        /> */}
        <CH4Chart/>
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
  )
}

export default page