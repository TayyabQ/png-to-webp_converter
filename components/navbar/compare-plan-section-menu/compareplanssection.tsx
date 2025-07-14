import React from 'react'

const Compareplanssection = () => {
  return (
    <div className='w-full absolute right-0 top-15 py-10 flex items-center justify-center bg-bg-2'>
    <div className='w-[1200px] grid grid-cols-[1.33fr_1.33fr_1.34fr] gap-8 items-start justify-center'>
      <div className=''>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Compare Adobe Express plans</p>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Indiviuals and teams</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Enterprises</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Students</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Educators</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Nonprofits</p>
        </div>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Why choose Adobe Express</p>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Learn more</p>
        </div>
      </div>
      <div className='flex flex-col px-9.5 py-3'>
        <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751870974/compare_plans_icon_vqi8yt.png" alt='icon'/>
      </div>
    </div>
    </div>
  )
}

export default Compareplanssection
