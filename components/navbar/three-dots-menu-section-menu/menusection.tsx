import React from 'react'
import { MdGridView } from 'react-icons/md'

const Menusection = () => {
  return (
    <div className='h-100 absolute right-25 top-12 py-10 flex flex-col items-start justify-center mt-2 pt-6 pb-4 px-4 rounded-md shadow-md bg-white overflow-y-auto'>
        <p className='text-[18px] font-bold px-2 pb-4'>Web Apps</p>
        <div className='grid grid-cols-3 grid-rows-3'>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751823925/express_txa12l.svg" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Adobe Express</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874125/firefly_appicon_nlkikc.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Adobe Firefly</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874121/acrobat_reader_appicon_y7sjsf.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Acrobat</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874121/ps_appicon_ezh1rj.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Photoshop</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874121/lr_appicon_irgwzc.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Lightroom</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874121/st_appicon_dhtzet.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Stock</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874120/adobe_sign_appicon_xi3oy5.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Acrobat Sign</p>
            </div>
            <div className='flex flex-col items-center justify-centergap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874120/adobe_fonts_appicons_wnm5as.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Fonts</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874120/ec_appicon_xrhhca.png" alt='icon'className='h-10 w-10'/>
                <p className='text-[14px]'>Experience Cloud</p>
            </div>
        </div>
        <div className='w-full grid grid-cols-2 items-center justify-center bg-bg-2 py-3 px-2 mt-3'>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751874831/adobe.com-icon_iw7qbu.png" alt='icon'className='h-5 w-5'/>
                <p className='text-[14px]'>Adobe.com</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-2'>
                <MdGridView className="w-5 h-5" />
                <p className='text-[14px]'>All apps</p>
            </div>
        </div>
    </div>
  )
}

export default Menusection
