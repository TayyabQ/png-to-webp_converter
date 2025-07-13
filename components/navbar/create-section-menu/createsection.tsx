import React from 'react'
import { Button } from '@/components/ui/button'

const Createsection = () => {
  return (
    <div className='w-full absolute right-0 top-15 py-10 flex items-center justify-center bg-bg-2'>
    <div className='w-[1200px] grid grid-cols-4 gap-25 items-start justify-center'>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Social Media</p>
        <p className='text-[14px] px-8 py-1.5'>Instagram Story</p>
        <p className='text-[14px] px-8 py-1.5'>Instagram Reel</p>
        <p className='text-[14px] px-8 py-1.5'>Instagram Post</p>
        <p className='text-[14px] px-8 py-1.5'>Tiktok Video</p>
        <p className='text-[14px] px-8 py-1.5'>Facebook Story</p>
        <p className='text-[14px] px-8 py-1.5'>Facebook Post</p>
        <p className='text-[14px] px-8 py-1.5'>Youtube Video</p>
        <p className='text-[14px] px-8 py-1.5'>Youtube Thumbnail</p>
        <p className='text-[14px] px-8 py-1.5'>Youtube Banner</p>
        <p className='text-[14px] px-8 py-1.5'>Meme</p>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Document</p>
        <p className='text-[14px] px-8 py-1.5'>Poster</p>
        <p className='text-[14px] px-8 py-1.5'>Brochure</p>
        <p className='text-[14px] px-8 py-1.5'>Invitation</p>
        <p className='text-[14px] px-8 py-1.5'>Menu</p>
        <p className='text-[14px] px-8 py-1.5'>Card</p>
        <p className='text-[14px] px-8 py-1.5'>Certificate</p>
        <p className='text-[14px] px-8 py-1.5'>Resume</p>
        <p className='text-[14px] px-8 py-1.5'>Youtube Thumbnail</p>
        <p className='text-[14px] px-8 py-1.5'>Invoice</p>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>QR Code Maker</p>
        <p className='text-[14px] px-8 py-1.5'>Create a QR code</p>
      </div>
      <div>
        <p className='text-[14px] font-bold py-3 mx-8 mb-3 border-b-1'>Print</p>
        <p className='text-[14px] px-8 py-1.5'>Flyer</p>
        <p className='text-[14px] px-8 py-1.5'>Poster</p>
        <p className='text-[14px] px-8 py-1.5'>Card</p>
        <p className='text-[14px] px-8 py-1.5'>Invitation</p>
        <p className='text-[14px] px-8 py-1.5'>Business Card</p>
        <p className='text-[14px] px-8 py-1.5'>T-shirt</p>
        <p className='text-[14px] text-blue-600 font-medium px-8 py-1.5'>Print with Adobe Express</p>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Content Planning</p>
        <p className='text-[14px] px-8 py-1.5'>Content Scheduler</p>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Marketing</p>
        <p className='text-[14px] px-8 py-1.5'>Business Card</p>
        <p className='text-[14px] px-8 py-1.5'>Flyer</p>
        <p className='text-[14px] px-8 py-1.5'>Logo</p>
        <p className='text-[14px] px-8 py-1.5'>Advertisement</p>
        <p className='text-[14px] px-8 py-1.5'>Profile Picture</p>
        <p className='text-[14px] px-8 py-1.5'>Presentation</p>
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

export default Createsection
