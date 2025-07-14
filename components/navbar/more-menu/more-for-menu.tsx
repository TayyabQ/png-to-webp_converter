import { Button } from '@/components/ui/button'
import React from 'react'

const Moremenu = () => {
  return (
    <div className=''>
        <div className='w-[258.667px] h-auto flex flex-col'>
            <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751831762/adobe_apps_dssqjm.png" alt='icon'/>
            <div className='flex flex-col gap-6 bg-black py-6 px-8'>
                <p className='text-[14px] text-white font-bold'>Find the perfect app in about 60 seconds.</p>
                <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-0 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Get started</Button>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='p-3'>
              <p className='text-[14px] font-semibold'>Adobe.com</p>
            </div>
            <div className='p-3'>
              <p className='text-[14px] font-semibold'>Creativity & Design</p>
            </div>
            <div className='p-3'>
              <p className='text-[14px] font-semibold'>PDF & E-signatures</p>
            </div>
            <div className='p-3'>
              <p className='text-[14px] font-semibold'>Marketing & Commerce</p>
            </div>
            <div className='p-3 w-full'>
              <p className='text-[14px] font-semibold'>Help & Support</p>
            </div>
        </div>
    </div>
  )
}

export default Moremenu
