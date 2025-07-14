import React, { useState } from 'react'
import ImagequickactionsmenuToggle from './image-quick-actions-menu/image-quick-actions-menu-Toggle'
import Imagequickactionsmenu from './image-quick-actions-menu/image-quick-actions-menu'
import VideoquickactionsmenuToggle from './video-quick-actions-menu/video-quick-actions-menu-Toggle'
import PDFquickactionsmenuToggle from './pdf-quick-actions-menu/pdf-quick-actions-menu-Toggle'
import PDFquickactionsmenu from './pdf-quick-actions-menu/pdf-quick-actions-menu'

const Editmenu = () => {
    const [imagequickactionsshow, setImagequickactionsshow] = useState(false)
    const [videoquickactionsshow, setVideoquickactionsshow] = useState(false)
    const [pdfquickactionsshow, setPdfquickactionsshow] = useState(false)

  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col pr-11.5 pl-9.5 py-3'>
            <p className='w-full text-[14px] font-semibold'>Adobe Express</p>
            <p className='text-[12px]'>Creative apps and services for everyone</p>
        </div>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Images</p>
        </div>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Videos</p>
        </div>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Document</p>
        </div>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>AI Tools</p>
        </div>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Templates</p>
        </div>

        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Image Quick Actions</p>
            <div className='flex items-center px-3' onClick={() => setImagequickactionsshow(!imagequickactionsshow)}>
                <ImagequickactionsmenuToggle/>
            </div>
        </div>
        {imagequickactionsshow && <Imagequickactionsmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Video Quick Actions</p>
            <div className='flex items-center px-3' onClick={() => setVideoquickactionsshow(!videoquickactionsshow)}>
                <VideoquickactionsmenuToggle/>
            </div>
        </div>
        {videoquickactionsshow && <VideoquickactionsmenuToggle/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>PDF Quick Actions</p>
            <div className='flex items-center px-3' onClick={() => setPdfquickactionsshow(!pdfquickactionsshow)}>
                <PDFquickactionsmenuToggle/>
            </div>
        </div>
        {pdfquickactionsshow && <PDFquickactionsmenu/>}
    </div>
  )
}

export default Editmenu
