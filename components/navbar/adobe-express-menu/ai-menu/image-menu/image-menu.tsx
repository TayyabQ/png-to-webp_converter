import React from 'react'

const Imagemenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Generate Image</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Remove Background</p>
        </div>
    </div>
  )
}

export default Imagemenu
