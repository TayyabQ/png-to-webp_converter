'use client'

import { useState } from 'react'
import Educationsection from './educationsection'

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { Button } from '@/components/ui/button'

const EducationsectionToggle = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-row items-center justify-center" onClick={() => setShow(!show)}>
      <Button className='text-[13px] bg-none font-normal shadow-none p-0' variant="secondary">Education</Button>
      {show ? (
        <MdKeyboardArrowUp className="w-5 h-5 transition-transform duration-100" />
        ) : (
        <MdKeyboardArrowDown className="w-5 h-5 transition-transform duration-100" />
       )}
      {show && <Educationsection/>}
    </div>
  )
}

export default EducationsectionToggle
