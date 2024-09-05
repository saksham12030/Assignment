import React, { useState } from 'react'

const GalMain = ({imageUrl,images}) => {
  
  
  return (
    <div className="text-white pt-3 m-6">
      <div>
        <div className="grid gap-5 grid-cols-4">
          {images.length > 0 ? (
            images?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="gap-2 bg-black p-3 rounded-xl w-50 h-50"
                >
                  <img src={item} alt="" />
                </div>
              );
            })
          ) : (
            <div className="flex justify-center  text-[#b3b3b4] font-semibold text-lg pt-5 items-center ">
              Click to Upload Images
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GalMain
