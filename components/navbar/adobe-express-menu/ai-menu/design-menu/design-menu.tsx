import React from 'react'

const Designmenu = () => {
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Generate Template</p>
        </div>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] px-14 py-3 font-semibold'>Generate Text Effect</p>
        </div>
    </div>
  )
}

export default Designmenu
