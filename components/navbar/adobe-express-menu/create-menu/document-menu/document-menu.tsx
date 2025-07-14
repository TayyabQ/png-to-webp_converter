import React from 'react'

const Documentmenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Poster</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Brochure</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Invitation</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Menu</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Card</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Certificate</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Resume</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Invoice</p>
        </div>
    </div>
  )
}

export default Documentmenu 
