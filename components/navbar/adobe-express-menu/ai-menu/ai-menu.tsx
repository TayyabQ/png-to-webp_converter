import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import DesignmenuToggle from './design-menu/design-menu-Toggle'
import Designmenu from './design-menu/design-menu'
import ImagemenuToggle from './image-menu/image-menu-Toggle'
import Imagemenu from './image-menu/image-menu'
import VideomenuToggle from './video-menu/video-menu-Toggle'
import Videomenu from './video-menu/video-menu'


const AImenu = () => {
    const [designshow, setDesignshow] = useState(false)
    const [imageshow, setImageshow] = useState(false)
    const [videoshow, setVideoshow] = useState(false)
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Design</p>
            <div className='flex items-center px-3' onClick={() => setDesignshow(!designshow)}>
                <DesignmenuToggle/>
            </div>
        </div>
        {designshow && <Designmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Image</p>
            <div className='flex items-center px-3' onClick={() => setImageshow(!imageshow)}>
                <ImagemenuToggle/>
            </div>
        </div>
        {imageshow && <Imagemenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Video</p>
            <div className='flex items-center px-3' onClick={() => setVideoshow(!videoshow)}>
                <VideomenuToggle/>
            </div>
        </div>
        {videoshow && <Videomenu/>}
        <div className='flex flex-row px-8 py-2'>
            <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Get Adobe Express Free</Button>
        </div>
        
    </div>
  )
}

export default AImenu
