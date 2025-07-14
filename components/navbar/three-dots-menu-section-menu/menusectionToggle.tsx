'use client'

import { useState } from 'react'

import { MdApps } from 'react-icons/md'
import Menusection from './menusection'

const MenusectionToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      <MdApps className="h-9 w-9 text-black text-3xl p-1.5" />
      {show && <Menusection/>}
    </div>
  )
}

export default MenusectionToggle
