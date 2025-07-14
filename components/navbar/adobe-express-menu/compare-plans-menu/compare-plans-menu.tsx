import React, { useState } from 'react'
import WhychooseadobeexpressmenuToggle from './why-choose-adobe-express-menu/why-choose-adobe-express-menu-Toggle'
import Whychooseadobeexpressmenu from './why-choose-adobe-express-menu/why-choose-adobe-express-menu'
import CompareadobeexpressplansmenuToggle from './compare-adobe-express-plans-menu/compare-adobe-express-plans-menu-Toggle'
import Compareadobeexpressplansmenu from './compare-adobe-express-plans-menu/compare-adobe-express-plans-menu'


const Compareplansmenu = () => {
    const[whychooseadobeexpressshow, setWhychooseadobeexpressshow] = useState(false)
    const[compareadobeexpressplansshow, setCompareadobeexpressplansshow] = useState(false)
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Compare Adobe Express Plans</p>
            <div className='flex items-center px-3' onClick={() => setCompareadobeexpressplansshow(!compareadobeexpressplansshow)}>
                <CompareadobeexpressplansmenuToggle/>
            </div>
        </div>
        {compareadobeexpressplansshow && <Compareadobeexpressplansmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Why choose Adobe Express</p>
            <div className='flex items-center px-3' onClick={() => setWhychooseadobeexpressshow(!whychooseadobeexpressshow)}>
                <WhychooseadobeexpressmenuToggle/>
            </div>
        </div>
        {whychooseadobeexpressshow && <Whychooseadobeexpressmenu/>}
        <div className='flex flex-row px-9.5 py-3'>
            <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751870974/compare_plans_icon_vqi8yt.png" alt='icon' className='w-[252.28px]'/>
        </div>
        
    </div>
  )
}

export default Compareplansmenu
