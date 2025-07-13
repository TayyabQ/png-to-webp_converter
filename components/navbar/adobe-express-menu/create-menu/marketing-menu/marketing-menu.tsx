import { Button } from '@/components/ui/button'
import React from 'react'

const Marketingmenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Business Card</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Flyer</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Logo</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Advertisement</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Collage</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Presentation</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Profile Picture</p>
        </div>
        <div className='flex flex-row'>
            <Button className='text-[14px] bg-gary-100 text-black font-semibold py-1.25 px-4 border-2 border-gray-800 rounded-full whitespace-nowrap shadow-none hover:bg-gray-800 hover:text-white' variant="default">Learn More</Button>
        </div>
        <div className='flex flex-row'>
            <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Get Adobe Express Free</Button>
        </div>
    </div>
  )
}

export default Marketingmenu
