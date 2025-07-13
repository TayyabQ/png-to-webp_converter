import React, { useState } from 'react'
import K12schoolsmenuToggle from './k12-schools-menu/k12-schools-menu-Toggle'
import K12schoolsmenu from './k12-schools-menu/k12-schools-menu'
import HigheredmenuToggle from './higher-ed-menu/higher-ed-menu-Toggle'
import Higheredmenu from './higher-ed-menu/higher-ed-menu'

const Educationmenu = () => {
    const [k12schoolsshow, setK12schoolsshow] = useState(false)
    const [higheredshow, setHigheredshow] = useState(false)
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>K-12 Schools</p>
            <div className='flex items-center px-3' onClick={() => setK12schoolsshow(!k12schoolsshow)}>
                <K12schoolsmenuToggle/>
            </div>
        </div>
        {k12schoolsshow && <K12schoolsmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Higher Ed</p>
            <div className='flex items-center px-3' onClick={() => setHigheredshow(!higheredshow)}>
                <HigheredmenuToggle/>
            </div>
        </div>
        {higheredshow && <Higheredmenu/>}
        <div className='flex flex-row px-9.5 py-3'>
            <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751870265/education_image_y6a1k4.png" alt='icon' className='w-[252.28px]'/>
        </div>
        
    </div>
  )
}

export default Educationmenu
