'use client';

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import useFetch from '@/hooks/useFetch';
import { toast } from "sonner"

const Herosection = () => {

  const [selectedFile, setSelectedFile] = useState<File>();

  const { fetchdata } = useFetch();

  const handleUpload = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!selectedFile) {
      toast('File not selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const { ok, data } = await fetchdata({
      url: "/api/upload-and-convert",
      method: "POST",
      body: formData,
      });

    if (!ok || !data?.success) {
    toast("Upload Failed");
    return;
    }

    toast.success("Image successfully uploaded", data);

      const imageUrll = `/uploads/${data.originalName}`;
      const imgg = document.createElement('img');
      imgg.src = imageUrll;
      imgg.alt = 'Converted Image';
      imgg.style.maxWidth = '300px';

      const targetDivv = document.getElementById('preview');
      const header1 = document.createElement('p');
      header1.innerText = "Preview Image";
      header1.className = "text-4xl font-bold text-black";
      if (targetDivv) {
        targetDivv.className = "flex flex-col items-center justify-center gap-4 py-25";
        targetDivv.appendChild(header1);
        targetDivv.appendChild(imgg);
      }

      const imageUrl = `/uploads/${data.convertedName}`;
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Converted Image';
      img.style.maxWidth = '300px';

      const targetDiv = document.getElementById('converted');
      const header2 = document.createElement('p');
      header2.innerText = "Converted Image";
      header2.className = "text-4xl font-bold text-black";

      const downloadButton = document.createElement('button');
      downloadButton.innerText = "Download Image";
      downloadButton.className = "bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold";
      downloadButton.onclick = () => {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = data.convertedName;
      link.click();
      };

      if (targetDiv) {
        targetDiv.className = "flex flex-col items-center justify-center gap-4 py-25";
        targetDiv.appendChild(header2);
        targetDiv.appendChild(img);
        targetDiv.appendChild(downloadButton);
      }
    } catch (error) {
      console.error('Error is: ', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className="text-[36px] font-extrabold text-black text-center">
          Convert to WebP.
        </h1>
        <p className='text-[16px] text-black my-8 text-center'>
          Our HD image converter makes it easy to change your image files into JPG format.
        </p>
        <div className='grid xl:grid-cols-[1fr_1fr] sm:px-20 xl:gap-40'>
          <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464309/travel_guide_pgcsrw.png" alt='icon'className='h-111 w-111 flex items-center justify-center md:translate-x-15 lg:translate-x-30 xl:translate-x-20'/>
          <div className='p-6 md:shadow-2xl md:rounded-2xl flex flex-col items-center justify-center xl:-translate-x-20'>
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='bg-[url("https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751871338/dash-rectangle_e1o3lr.svg")] bg-no-repeat bg-contain bg-center flex flex-col items-center justify-center max-xl:py-6'>
                <p className='w-2/4 lg:w-3/4 text-[28px] pt-9.75 font-extrabold text-center'>Drag and drop an Image or <span className='text-[#5C5CE0]'>browse to upload.</span></p>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-rows-2 gap-1">
                    <Input
                      className="bg-[#5C5CE0] font-extrabold md:text-sm rounded-3xl text-white px-6 py-3.5 mt-4"
                      type="file"
                    onChange={handleUpload}></Input>
                    <Button className='bg-[#5C5CE0] text-[16px] text-white font-extrabold py-3.5 px-6 rounded-3xl mt-4' variant="default">Upload your photo</Button>
                  </div>
                </form>
                <p className='text-[11px] pb-1 mt-1'>File must be PNG or WebP and upto 40MB</p>
                <div className='flex flex-row gap-2 items-center justify-center pt-4 md:pt-3'>
                  <div className='flex flex-row items-center justify-center'>
                    <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464307/checkmark_kfxysa.svg" className='bg-pink-400 p-1 mr-1 rounded-full'/>
                    <p className='text-[16px]'>Free to use</p>
                  </div>
                  <div className='flex flex-row items-center justify-center'>
                    <img src="https://res.cloudinary.com/ddnyvlvoa/image/upload/v1751464307/checkmark_kfxysa.svg" className='bg-pink-400 p-1 mr-1 rounded-full'/>
                    <p className='text-[16px]'>No credit card required</p>
                  </div>
                </div>
              </div>
            </div>
            <p className='text-[12px] mt-4 font-bold'>By uploading your photo or video, you agree to the Adobe <span className='text-[#5C5CE0]'>Terms of Use</span> and <span className='text-[#5C5CE0]'>Privacy Policy</span></p>
          </div>
        </div>
        <div id='preview'>

        </div>

        <div id='converted'>

        </div>
    </div>
  )
}

export default Herosection
