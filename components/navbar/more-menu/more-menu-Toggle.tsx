'use client'

import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import Moremenu from './more-for-menu'

const MoremenuToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      <FaBars className='font-[20px]'/>
      {show && <Moremenu/>}
    </div>
  )
}

export default MoremenuToggle
