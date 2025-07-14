'use client'

import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import Onlinetoolsmenu from './online-tools-menu'

const OnlinetoolsmenuToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      <FaBars className='font-[20px]'/>
      {show && <Onlinetoolsmenu/>}
    </div>
  )
}

export default OnlinetoolsmenuToggle
