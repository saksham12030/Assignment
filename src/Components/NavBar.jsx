import React, { useState } from "react";
import Experience from "./Experience";
import About from "./About";
import Recomended from "./Recomended";

const NavBar = () => {
  const [check, setcheck] = useState(0);
  const naver = [
    { heading: "About Me", compo: <About /> },
    { heading: "Experience", compo: <Experience /> },
    { heading: "Recommended", compo: <Recomended /> },
  ];
  return (
    <>
      <div className="h-full">
        <div className="nav items-center flex justify-center p-3 h-[100%] ">
          <div className="w-2/3  bg-[#1a1c1b] flex items-center py-1 px-2 justify-between gap-2 rounded-full ">
            {naver.map((item, index) => {
              return (
                <div
                  className={`${
                    check == index
                      ? "bg-[#424750] text-white hover:scale-[1.06] transition-transform duration-600 ease-in-out "
                      : ""
                  } w-1/3 flex  text-[#b3b3b4] justify-center p-3 rounded-full cursor-pointer`}
                  onClick={() => setcheck(index)}
                >
                  <h1
                    className={
                      check == index ? "text-white" : " text-[#b3b3b4]"
                    }
                  >
                    {item.heading}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-5 px-5 rounded-lg h-full ">{naver[check].compo}</div>
      </div>
    </>
  );
};

export default NavBar;
