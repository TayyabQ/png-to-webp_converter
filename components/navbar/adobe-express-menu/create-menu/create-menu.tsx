import React, { useState } from 'react'
import SocialmediamenuToggle from './social-media-menu/social-media-menu-Toggle'
import Socialmediamenu from './social-media-menu/social-media-menu'
import DocumentmenuToggle from './document-menu/document-menu-Toggle'
import Documentmenu from './document-menu/document-menu'
import QRcodemenuToggle from './qr-code-menu/qr-code-menu-Toggle'
import QRcodemenu from './qr-code-menu/qr-code-menu'
import ContentplanningmenuToggle from './content-planning/content-planning-menu-Toggle'
import Contentplanningmenu from './content-planning/content-planning-menu'
import PrintmenuToggle from './print-menu/print-menu-Toggle'
import Printmenu from './print-menu/print-menu'
import MarketingmenuToggle from './marketing-menu/marketing-menu-Toggle'
import Marketingmenu from './marketing-menu/marketing-menu'

const Createmenu = () => {
    const [socialmediashow, setSocialmediashow] = useState(false)
    const [documentshow, setDocumentshow] = useState(false)
    const [qrcodeshow, setQrcodeshow] = useState(false)
    const [contentplanningshow, setContentplanningshow] = useState(false)
    const [printshow, setPrintshow] = useState(false)
    const [marketingshow, setMarketingshow] = useState(false)
  return (
    <div className='flex flex-col bg-bg-2' onClick={(e) => e.stopPropagation()}>
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Social Media</p>
            <div className='flex items-center px-3' onClick={() => setSocialmediashow(!socialmediashow)}>
                <SocialmediamenuToggle/>
            </div>
        </div>
        {socialmediashow && <Socialmediamenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Documnet</p>
            <div className='flex items-center px-3' onClick={() => setDocumentshow(!documentshow)}>
                <DocumentmenuToggle/>
            </div>
        </div>
        {documentshow && <Documentmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>QR Code Maker</p>
            <div className='flex items-center px-3' onClick={() => setQrcodeshow(!qrcodeshow)}>
                <QRcodemenuToggle/>
            </div>
        </div>
        {qrcodeshow && <QRcodemenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Print</p>
            <div className='flex items-center px-3' onClick={() => setPrintshow(!printshow)}>
                <PrintmenuToggle/>
            </div>
        </div>
        {printshow && <Printmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Content Planning</p>
            <div className='flex items-center px-3' onClick={() => setContentplanningshow(!contentplanningshow)}>
                <ContentplanningmenuToggle/>
            </div>
        </div>
        {contentplanningshow && <Contentplanningmenu/>}
        <div className='flex flex-row'>
            <p className='w-full text-[14px] pr-11.5 pl-9.5 py-3 font-semibold'>Marketing</p>
            <div className='flex items-center px-3' onClick={() => setMarketingshow(!marketingshow)}>
                <MarketingmenuToggle/>
            </div>
        </div>
        {marketingshow && <Marketingmenu/>}
    </div>
  )
}

export default Createmenu
