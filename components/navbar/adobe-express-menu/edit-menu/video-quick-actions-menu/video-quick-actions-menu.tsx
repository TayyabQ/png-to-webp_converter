import React from 'react'

const Videoquickactionsmenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Convert Video to GIF</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Crop Video</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Trim Video</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Resize Video</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Merge Video</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Convert Video to MP4</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Animate Characters</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Caption Video</p>
        </div>
    </div>
  )
}

export default Videoquickactionsmenu 
