import React from 'react'

const Advertisementcard = () => {
  return (
    <div className="p-7.5 md:py-12.5 md:px-15 lg:mx-2 xl:mx-28.5 2xl:max-w-[1267px] flex flex-col md:grid md:grid-cols-2 md:gap-32 justify-between rounded-3xl bg-[url('https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464307/intro_bg_p5ysax.svg')] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[28px] md:text-[36px] mb-2.5 text-white">Free PNG to WEBP Converter</h3>
        <p className="text-[14px] md:text-[16px] text-white">Easily convert PNG to WEBP online instantly and effortlessly. No installation or plugins required. Simply drop your png image into our converter, and recieve our webp file in seconds with no loss in quality.</p>
      </div>
      <div className="flex flex-row items-start md:items-center lg:items-start justify-center space-x-[-10px] md:space-x-[-12px] lg:space-x-[-15px] xl:space-x-[-20px] mt-2 md:mt-0">
        <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464651/img-man_hu3xk5.jpg" alt="icon" className="h-24 md:h-21 lg:h-30.5 xl:h-39 lg:translate-y-8 xl:translate-y-5"/>
        <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464651/img-man_hu3xk5.jpg" alt="icon" className="h-24 mt-10 md:h-21 md:mt-20 lg:h-30.5 lg:mt-30 xl:h-39 lg:-translate-y-8 xl:-translate-y-5"/>
      </div>
    </div>
  )
}

export default Advertisementcard
