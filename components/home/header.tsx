import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464307/adobe-express-logo_xtdla7.svg" alt='icon'className='h-7.5 w-41'/>
        <h1 className="text-[45px] font-extrabold text-black text-center">
          Free image converter.
        </h1>
        <p className='text-[16px] text-black mt-4 mb-6 text-center'>
          Our fast and free onine image converter lets you convert images in your desired formats in seconds.
        </p>
    </div>
  )
}

export default Header
