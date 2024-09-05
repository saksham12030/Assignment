import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";

const SideBar = ({ clicked,setclicked }) => {
  
  return (
    <div className=" items-center justify-center h-full flex-cols">
      <div
        className={`h-[40%] flex items-start pt-[85px] justify-center  ${
          clicked ? "bg-[#373f47]" : ""
        }`}
        onClick={() => setclicked(true)}
      >
        <FaRegQuestionCircle size={"25px"} className=" text-[#b3b3b4] " />
      </div>
      <div
        className={`h-[60%]  flex pt-[100px] items-start justify-center ${
          !clicked ? "bg-[#373f47]" : ""
        }`}
        onClick={() => setclicked(false)}
      >
        <TfiGallery size={"25px"} className=" text-[#b3b3b4]  " />
      </div>
    </div>
  );
};

export default SideBar
