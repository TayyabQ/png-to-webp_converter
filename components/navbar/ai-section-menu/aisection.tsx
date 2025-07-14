import { Button } from '@/components/ui/button'
import React from 'react'

const AIsection = () => {
  return (
    <div className='w-full absolute right-0 top-15 py-10 flex items-center justify-center bg-bg-2'>
    <div className='w-[1200px] grid grid-cols-4 gap-30 items-start justify-center'>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Design</p>
        <p className='text-[14px] px-8 py-1.5'>Generate Template</p>
        <p className='text-[14px] px-8 py-1.5'>Generate Text Effect</p>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Image</p>
        <p className='text-[14px] px-8 py-1.5'>Generate Image</p>
        <p className='text-[14px] px-8 py-1.5'>Remove Background</p>
      </div>
      <div>
        <p className='text-[14px] font-bold py-3 mx-8 mb-3 border-b-1'>Video</p>
        <p className='text-[14px] px-8 py-1.5'>Animate Characters</p>
        <p className='text-[14px] px-8 py-1.5'>Caption Video</p>
        <p className='text-[14px] px-8 py-1.5'>Remove Video Background</p>
      </div>
      <div>
        <div className='py-1.5 px-8'>
            <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Get Adobe Express Free</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AIsection
