'use client'

import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import Featuredproductsmenu from './featured-products-menu'

const FeaturedproductsmenuToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      <FaBars className='font-[20px]'/>
      {show && <Featuredproductsmenu/>}
    </div>
  )
}

export default FeaturedproductsmenuToggle
