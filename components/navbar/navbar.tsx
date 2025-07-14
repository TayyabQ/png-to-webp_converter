import * as React from 'react'
import { Button } from '../ui/button';
import CreatesectionToggle from './create-section-menu/createsectionToggle';
import EditsectionToggle from './edit-section-menu/editsectionToggle';
import AIsectionToggle from './ai-section-menu/aisectionToggle';
import CreativityDesignsectionToggle from './creativity-&-design-section-menu/creativity&designsectionToggle';
import EducationsectionToggle from './education-section-menu/educationsectionToggle';
import CompareplanssectionToggle from './compare-plan-section-menu/compareplanssectionToggle';
import MenusectionToggle from './three-dots-menu-section-menu/menusectionToggle';
import Toggle from './navbarmenuToggle';
import AdobeexpressmenuToggle from './adobe-express-menu/adobe-express-menu-Toggle';

const Navbar = () => {
  return (
    <div className='overlay sticky top-0 z-1 bg-bg-1 max-lg:w-full xl:w-full'>



      <div className='hidden lg:flex'>
      <div className='flex flex-row items-center'>
        <p className='text-[24px] text-red-500 font-extrabold px-2'>Adobe</p>
      </div>
      <div className='h-[63px] flex flex-row items-center w-full pt-1'>
        <div className='flex flex-row items-center justify-center px-3'>
            <CreativityDesignsectionToggle/>
        </div>
        <div className='flex flex-row items-center'>
            <p className='text-[13px] px-2'>Adobe Express</p>
            <div className='flex flex-row items-center justify-center px-2'>
                <CreatesectionToggle/>
            </div>
            <div className='flex flex-row items-center justify-center px-2'>
                <EditsectionToggle/>
            </div>
            <div className='flex flex-row items-center justify-center px-2'>
                <AIsectionToggle/>
            </div>
            <p className='text-[13px] px-2'>For Business</p>
            <div className='flex flex-row items-center justify-center px-2'>
                <EducationsectionToggle/>
            </div>
            <div className='flex flex-row items-center justify-center px-2'>
                <CompareplanssectionToggle/>
            </div>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <Button className='text-[15px] bg-blue-600 text-white font-semibold py-1.25 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant="default">Go to Adobe Express</Button>
      </div>
      <div className='flex flex-row gap-1 items-center justify-center px-2'>
         <MenusectionToggle/>
         <Button className='text-[14px] bg-gary-100 text-black font-semibold py-1.25 px-4 border-2 border-gray-400 rounded-full whitespace-nowrap shadow-none hover:bg-gray-200' variant="default">Sign In</Button>
      </div>
      </div>



      <div className='lg:hidden flex flex-col shadow-md'>
        <div className='flex flex-row'>
        <div className='flex flex-row items-center justify-center w-[80px]'>
          <Toggle/>
        </div>
        <div className='flex flex-row items-center'>
          <p className='text-[24px] text-red-500 font-extrabold px-2'>Adobe</p>
        </div>
        <div className='w-full h-[63px]'>
          
        </div>
        <div className='flex flex-row gap-1 items-center justify-center px-2'>
          <MenusectionToggle/>
          <div className='pl-1'>
            <Button className='text-[14px] bg-gary-100 text-black font-semibold py-1.25 px-4 border-2 border-gray-400 rounded-full whitespace-nowrap shadow-none hover:bg-gray-200' variant="default">Sign In</Button>
          </div>
        </div>
        </div>
        <div className='h-[40px] flex items-center border-t-1'>
          <p className='w-full text-[16px] pl-5 pr-8 font-semibold'>Adobe Express</p>
          <div className='px-3'>
            <AdobeexpressmenuToggle/>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default Navbar
