import React from 'react'

const Higheredmenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col px-14 py-3'>
            <p className='w-full text-[14px] font-semibold'>Students</p>
            <p className='text-[12px] text-gray-600'>Create content for your classes, clubs and career</p>
        </div>
        <div className='flex flex-col px-14 py-3'>
            <p className='w-full text-[14px] font-semibold'>Educators and Administrators</p>
            <p className='text-[12px] text-gray-600'>Expand your classroom with Adobe Express for Education.</p>
        </div>
    </div>
  )
}

export default Higheredmenu
