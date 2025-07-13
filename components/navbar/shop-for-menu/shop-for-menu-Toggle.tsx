'use client'

import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import Shopformenu from './shop-for-menu'

const ShopformenuToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      <FaBars className='font-[20px]'/>
      {show && <Shopformenu/>}
    </div>
  )
}

export default ShopformenuToggle
