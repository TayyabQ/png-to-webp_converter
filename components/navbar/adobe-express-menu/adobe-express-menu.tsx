import React, { useState } from 'react'
import CreatemenuToggle from './create-menu/create-menu-Toggle'
import Createmenu from './create-menu/create-menu'
import EditmenuToggle from './edit-menu/edit-menu-Toggle'
import Editmenu from './edit-menu/edit-menu'
import AImenuToggle from './ai-menu/ai-menu-Toggle'
import AImenu from './ai-menu/ai-menu'
import EducationmenuToggle from './education-menu/education-menu-Toggle'
import Educationmenu from './education-menu/education-menu'
import CompareplansmenuToggle from './compare-plans-menu/compare-plans-menu-Toggle'
import Compareplansmenu from './compare-plans-menu/compare-plans-menu'
import Animation1 from '@/components/animations/animation1'

const Adobeexpressmenu = () => {
    const [createshow, setCreateshow] = useState(false)
    const [editshow, setEditshow] = useState(false)
    const [AIshow, setAIshow] = useState(false)
    const [educationshow, setEducationshow] = useState (false)
    const [compareplansmenushow, setCompareplansmenushow] = useState (false)
  return (
    <Animation1>
    <div className='absolute w-full top-25 left-0 flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
      <div className='px-5 py-3'>
        <p className='text-[14px] font-semibold'>Overview</p>
      </div>
      <div className='flex flex-row'>
        <p className='w-full text-[14px] px-5 py-3 font-semibold'>Create</p>
        <div className='flex items-center px-3' onClick={() => setCreateshow(!createshow)}>
            <CreatemenuToggle/>
        </div>
      </div>
      {createshow && <Createmenu/>}
      <div className='flex flex-row'>
        <p className='w-full text-[14px] px-5 py-3 font-semibold'>Edit</p>
        <div className='flex items-center px-3' onClick={() => setEditshow(!editshow)}>
            <EditmenuToggle/>
        </div>
      </div>
      {editshow && <Editmenu/>}
      <div className='flex flex-row'>
        <p className='w-full text-[14px] px-5 py-3 font-semibold'>AI</p>
        <div className='flex items-center px-3' onClick={() => setAIshow(!AIshow)}>
            <AImenuToggle/>
        </div>
      </div>
      {AIshow && <AImenu/>}
      <div className='px-5 py-3'>
        <p className='text-[14px] font-semibold'>For Business</p>
      </div>
      <div className='flex flex-row'>
        <p className='w-full text-[14px] px-5 py-3 font-semibold'>Education</p>
        <div className='flex items-center px-3' onClick={() => setEducationshow(!educationshow)}>
            <EducationmenuToggle/>
        </div>
      </div>
      {educationshow && (<Educationmenu/>)}
      <div className='flex flex-row'>
        <p className='w-full text-[14px] px-5 py-3 font-semibold'>Compare plans</p>
        <div className='flex items-center px-3' onClick={() => setCompareplansmenushow(!compareplansmenushow)}>
            <CompareplansmenuToggle/>
        </div>
      </div>
      {compareplansmenushow && <Compareplansmenu/>}
    </div>
    </Animation1>
  )
}

export default Adobeexpressmenu
