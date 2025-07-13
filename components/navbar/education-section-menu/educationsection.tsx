import React from 'react'

const Educationsection = () => {
  return (
    <div className='w-full absolute right-0 top-15 py-10 flex items-center justify-center bg-bg-2'>
    <div className='w-[1200px] grid grid-cols-[1.33fr_1.33fr_1.34fr] gap-8 items-start justify-center'>
      <div className=''>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>K-12 Schools</p>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Educators</p>
            <p className='text-[12px] text-gray-600'>Ignite creativity and learning in the classroom.</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Administrators</p>
            <p className='text-[12px] text-gray-600'>Request and deploy Adobe Express for Education.</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Student class code</p>
            <p className='text-[12px] text-gray-600'>Join your classroom using the classcode issued by your administrartor</p>
        </div>
      </div>
      <div>
        <p className='text-[14px] text-gray-600 font-bold py-3 mx-8 mb-3 border-b-1'>Higher Ed</p>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Students</p>
            <p className='text-[12px] text-gray-600'>Create content for your classes, clubs and career</p>
        </div>
        <div className='flex flex-col py-1.5 px-8'>
            <p className='text-[14px]'>Educators and Administrators</p>
            <p className='text-[12px] text-gray-600'>Expand your classroom with Adobe Express for Education.</p>
        </div>
      </div>
      <div className='flex flex-col px-9.5 py-3'>
        <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751870265/education_image_y6a1k4.png" alt='icon'/>
      </div>
    </div>
    </div>
  )
}

export default Educationsection
