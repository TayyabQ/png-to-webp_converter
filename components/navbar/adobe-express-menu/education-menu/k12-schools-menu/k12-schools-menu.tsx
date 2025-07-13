import React from 'react'

const K12schoolsmenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-col px-14 py-3'>
            <p className='w-full text-[14px] font-semibold'>Educators</p>
            <p className='text-[12px] text-gray-600'>Ignite creativity and learning in the classroom.</p>
        </div>
        <div className='flex flex-col px-14 py-3'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Administrators</p>
            <p className='text-[12px] text-gray-600'>Request and deploy Adobe Express for Education.</p>
        </div> 
        <div className='flex flex-col px-14 py-3'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Student class code</p>
            <p className='text-[12px] text-gray-600'>Join your classroom using the classcode issued by your administrartor</p>    
        </div>
    </div>
  )
}

export default K12schoolsmenu
