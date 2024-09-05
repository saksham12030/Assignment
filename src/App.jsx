
import './App.css'
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Mains from "./Components/Mains"
import { useState } from 'react';
import Gallery from './Components/Gallery';
function App() {
  const [clicked, setclicked] = useState(true);
  return (
    <>
      <div className="bg-[#363C43] h-full w-full">
        <div className="flex">
          <div className=" w-[10%] h-screen">
            <SideBar clicked={clicked} setclicked={setclicked} />
          </div>
          {clicked ? (
            <div className="w-[90%] h-full">
              <Mains />
            </div>
          ) : (
            <div className="w-[90%] h-full">
              <Gallery />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App
