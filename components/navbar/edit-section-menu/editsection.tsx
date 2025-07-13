import React from 'react'
import { Button } from '@/components/ui/button'

const Editsection = () => {
  return (
    <div className='w-full absolute right-0 top-15 py-10 flex items-center justify-center bg-bg-2'>
    <div className='w-[1200px] grid grid-cols-[1.9fr_0.8fr_0.9fr_1.4fr] gap-25 items-start justify-center'>
      <div>
        <div className='flex flex-row py-1.5 px-8 gap-2 items-center justify-start'>
            <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751823925/express_txa12l.svg" alt='icon' className='h-6 w-6'/>
            <div className='flex flex-col'>
                <p className='text-[14px]'>Adobe Express</p>
                <p className='text-[12px] text-gray-600'>Creative apps and services for everyone</p>
            </div>
        </div>
        <p className='text-[14px] px-8 py-1.5'>Images</p>
        <p className='text-[14px] px-8 py-1.5'>Videos</p>
        <p className='text-[14px] px-8 py-1.5'>Documents</p>
        <p className='text-[14px] px-8 py-1.5'>AI Tools</p>
        <p className='text-[14px] px-8 py-1.5'>Templates</p>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Image Quick Actions</p>
        <p className='text-[14px] px-8 py-1.5'>Remove Background</p>
        <p className='text-[14px] px-8 py-1.5'>Resize Image</p>
        <p className='text-[14px] px-8 py-1.5'>Convert to JPG</p>
        <p className='text-[14px] px-8 py-1.5'>Convert to PNG</p>
        <p className='text-[14px] px-8 py-1.5'>Convert to SVG</p>
        <p className='text-[14px] px-8 py-1.5'>Crop Image</p>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Video Quick Actions</p>
        <p className='text-[14px] px-8 py-1.5'>Convert Video to GIF</p>
        <p className='text-[14px] px-8 py-1.5'>Crop Video</p>
        <p className='text-[14px] px-8 py-1.5'>Trim Video</p>
        <p className='text-[14px] px-8 py-1.5'>Resize Video</p>
        <p className='text-[14px] px-8 py-1.5'>Merge Video</p>
        <p className='text-[14px] px-8 py-1.5'>Convert Video to MP4</p>
        <p className='text-[14px] px-8 py-1.5'>Animate Characters</p>
        <p className='text-[14px] px-8 py-1.5'>Caption Video</p>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>PDF Quick Actions</p>
        <p className='text-[14px] px-8 py-1.5'>Create PDF</p>
        <p className='text-[14px] px-8 py-1.5'>Export PDF</p>
        <p className='text-[14px] px-8 py-1.5'>Combine PDF</p>
        <p className='text-[14px] px-8 py-1.5'>Edit PDF</p>
        <p className='text-[14px] px-8 py-1.5'>Organize PDF</p>
        <div className='py-1.5 px-8'>
            <Button className='text-[14px] bg-gary-100 text-black font-semibold py-1.25 px-4 border-2 border-gray-800 rounded-full whitespace-nowrap shadow-none hover:bg-gray-800 hover:text-white' variant="default">Learn More</Button>
        </div>
        <div className='py-1.5 px-8'>
            <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Get Adobe Express Free</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Editsection
