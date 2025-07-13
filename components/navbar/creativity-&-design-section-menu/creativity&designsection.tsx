import React from 'react'
import { Button } from '@/components/ui/button'
import CreativitydesignsectionFooter from './creativity&designsectionfooter'

const CreativityDesignsection = () => {
  return (
    // <div className='flex flex-col'>
    <div className='w-full absolute right-0 top-15 py-10 flex items-center justify-center bg-bg-2'>
    <div className='w-[1200px] grid grid-cols-[1.4fr_1.4fr_0.8fr_1.4fr] gap-8 items-start justify-center'>
      <div className=''>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Shop for</p>
        <div className='flex flex-row py-1.5 px-8 gap-2 items-center justify-start'>
            <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751830278/creative-cloud-40_oprk4u.svg" alt='icon' className='h-6 w-6'/>
            <div className='flex flex-col'>
                <p className='text-[14px]'>What is creative Cloud?</p>
                <p className='text-[12px] text-gray-600'>Creative apps and services for everyone</p>
            </div>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Photographers</p>
            <p className='text-[12px] text-gray-600'>Lightroom, Photoshop and more</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Indiviuals</p>
            <p className='text-[12px] text-gray-600'>20+ creative apps, Acrobat, and more</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Business</p>
            <p className='text-[12px] text-gray-600'>Solutions for teams and enterprises</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Students and teachers</p>
            <p className='text-[12px] text-gray-600'>Save 57% on Creative Cloud</p>
        </div>
        <div className='py-1.5 px-8'>
            <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">View plans and pricing</Button>
        </div>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Featured products</p>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Photoshop</p>
            <p className='text-[12px] text-gray-600'>Image, editing and design</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Premiere Pro</p>
            <p className='text-[12px] text-gray-600'>Video editing and production</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Illustrator</p>
            <p className='text-[12px] text-gray-600'>Vector graphics and illustration</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Adobe Express</p>
            <p className='text-[12px] text-gray-600'>All-in-one design, video, photo and PDF app</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Lightroom</p>
            <p className='text-[12px] text-gray-600'>Photo editing and organization</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Adobe Firefly</p>
            <p className='text-[12px] text-gray-600'>AI-powered content creation</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Adobe Stock</p>
            <p className='text-[12px] text-gray-600'>High quality licensable assets</p>
        </div>
        <p className='text-[14px] text-blue-600 font-medium px-8 py-1.5'>View all products</p>
      </div>
      <div>
        <p className='text-[14px] font-bold py-3 mx-8 mb-3 border-b-1'>Online tools</p>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Remove background</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Generate AI images</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Generate AI videos</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Generate AI art</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Edit photos with AI</p>
        </div>
      </div>
      <div className='flex flex-col px-8'>
        <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751831762/adobe_apps_dssqjm.png" alt='icon'/>
        <div className='flex flex-col gap-6 bg-black py-6 px-8'>
          <p className='text-[14px] text-white font-bold'>Find the perfect app in about 60 seconds.</p>
          <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-0 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Get started</Button>
        </div>
      </div>
    </div>
    </div>
    // <div>
    //     <CreativitydesignsectionFooter/>
    // </div>
    // </div>
  )
}

export default CreativityDesignsection
