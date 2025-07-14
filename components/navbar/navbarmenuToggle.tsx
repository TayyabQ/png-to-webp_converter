'use client'

import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import Navbarmenu from './navbarmenu'

const Toggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center">
      {!show ? (
        <FaBars className="text-[20px] cursor-pointer" onClick={() => setShow(true)} />
      ) : (
        <MdClose className="text-[22px] cursor-pointer" onClick={() => setShow(false)} />
      )}

      {show && <Navbarmenu onClose={() => setShow(false)} />}
    </div>
  )
}

export default Toggle
