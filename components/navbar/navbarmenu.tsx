'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Shopformenu from './shop-for-menu/shop-for-menu';
import Featuredproductsmenu from './featured-products-menu/featured-products-menu';
import Onlinetoolsmenu from './online-tools-menu/online-tools-menu';
import Moremenu from './more-menu/more-for-menu';
import { MdClose } from 'react-icons/md';

const Navbarmenu = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'shop' | 'featured' |'tools' | 'more'>('shop');

  const handleTabClick = (e: React.MouseEvent, tab: 'shop' | 'featured' | 'tools' | 'more') => {
    e.stopPropagation(); 
    setActiveTab(tab);
  };

  return (
    <div 
      className='w-full flex flex-col absolute top-0 left-0 bg-bg-1'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='flex flex-row items-center px-5'>

        <div className='w-full h-[56px] flex items-center'>
          <p className='text-[24px] text-red-500 font-extrabold pr-2'>Adobe</p>
        </div>
        <div className='flex items-center'>
           <MdClose className="text-[22px] cursor-pointer" onClick={onClose} />
        </div>
      </div>

      <div className='px-5'>
        <div className='h-[35px] pt-3'></div>
        <div className='pt-2 pb-6'>
          <p className='text-[28px] font-semibold'>Creativity & Design</p>
        </div>
      </div>

      <div className='grid grid-cols-[1.1fr_5.9fr]'>
        <div className='pt-4'>
          <Button 
            className={`w-full h-[47.33px] py-3.75 pr-2.75 pl-5 rounded-none flex items-center justify-start ${
              activeTab === 'shop' ? 'bg-black font-semibold text-white' : 'bg-gray-100 text-black'
            }`} 
            variant="default" 
            onClick={(e) => handleTabClick(e, 'shop')}
          >
            Shop for
          </Button>
          <Button 
            className={`w-full h-[47.33px] py-3.75 pr-2.75 pl-5 rounded-none flex items-center justify-start text-left ${
              activeTab === 'featured' ? 'bg-black font-semibold text-white' : 'bg-gray-100 text-black'
            }`} 
            variant="default" 
            onClick={(e) => handleTabClick(e, 'featured')}
          >
            Featured <br/> Products
          </Button>
          <Button 
            className={`w-full h-[47.33px] py-3.75 pr-2.75 pl-5 rounded-none flex items-center justify-start ${
              activeTab === 'tools' ? 'bg-black font-semibold text-white' : 'bg-gray-100 text-black'
            }`} 
            variant="default" 
            onClick={(e) => handleTabClick(e, 'tools')}
          >
            Online tools
          </Button>
          <Button 
            className={`w-full h-[47.33px] py-3.75 pr-2.75 pl-5 rounded-none flex items-center justify-start ${
              activeTab === 'more' ? 'bg-black font-semibold text-white' : 'bg-gray-100 text-black'
            }`} 
            variant="default" 
            onClick={(e) => handleTabClick(e, 'more')}
          >
            More
          </Button>
        </div>

        <div className='h-68 pt-2.5 px-3.25 pb-6.25 bg-bg-2 overflow-y-auto'>
          {activeTab === 'shop' && <Shopformenu />}
          {activeTab === 'featured' && <Featuredproductsmenu />}
          {activeTab === 'tools' && <Onlinetoolsmenu />}
          {activeTab === 'more' && <Moremenu />}
        </div>
      </div>

      <div className='h-[80px] flex items-center justify-center'>
        <Button className='w-[320px] text-[15px] bg-blue-600 text-white font-semibold py-0 px-3.5 border-2 rounded-full whitespace-nowrap shadow-none hover:bg-blue-700' variant='default'>
          View plans and pricing
        </Button>
      </div>
    </div>
  );
};

export default Navbarmenu;
