import React, { useState } from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import GalMain from './GalMain';


// Function to add a new item to the array

const GalNav = () => {
    const [images, setimages] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

    const handleUpload = () => {
      
      window.cloudinary.openUploadWidget(
        {
          cloudName: "dy6egtbic", // Replace with your Cloudinary cloud name
          uploadPreset: "mycloud", // Replace with your Cloudinary upload preset
          multiple: false,
          theme: "minimal",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            
            setImageUrl(result.info.secure_url); // Set the image URL from Cloudinary
             setimages([...images, result.info.secure_url]);
          } else if (error) {
            console.error("Upload Error:", error);
          }
        }
      );
   };

  return (
    <div>
      <div className="flex h-[60px] items-center mt-6 justify-around">
        <div className="w-1/2 ml-7">
          <button className="bg-[#1a1c1b] font-bold text-md text-white rounded-xl py-3 px-8 hover:scale-105 hover:shadow-[0_0_6px_2px_rgba(255,255,255,0.3)] 
             transition-transform duration-00 ease-in-out">
            Gallery
          </button>
        </div>
        <div className="w-1/2 flex items-center gap-2 mr-4 justify-end">
          <div className="flex items-center ">
            <button
              onClick={handleUpload}
              className="bg-[#545557]  text-md font-bold text-white rounded-full py-2 px-6 relative hover:shadow-[0_0_6px_2px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
            >
              + ADD IMAGE
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <div className="  py-1 font-bold text-[#1a1c1b] items-center">
              <button className="">
                <IoArrowBackCircleSharp
                  size={"45px"}
                  className={`hover:w-[47px] hover:h-[47px] transition-all duration-700 ease-in-out`}
                />
              </button>
              <button>
                <IoArrowForwardCircle
                  size={"45px"}
                  className={`hover:w-[47px] hover:h-[47px] transition-all duration-300 ease-in-out`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <GalMain imageUrl={imageUrl} images={images}/>
      </div>
    </div>
  );
}

export default GalNav
