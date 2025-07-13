'use client'

import { useState } from 'react'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const CreatemenuToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      {show ? (
        <MdKeyboardArrowUp className="w-5 h-5 transition-transform duration-100" />
        ) : (
        <MdKeyboardArrowDown className="w-5 h-5 transition-transform duration-100" />
       )}
    </div>
  )
}

export default CreatemenuToggle
