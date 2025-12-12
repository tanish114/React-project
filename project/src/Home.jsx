import React, { useState } from "react";

import Menuoverlay from "./Menuoverlay.jsx";
import './Home.css'
import heroImage from "../public/home1.jpg"
const Home = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
 

 <div className="font-serif min-h-screen bg-gray-100">
      {/* {Menu overlay } */}
      {<Menuoverlay open={menuOpen} onClose={() => setMenuOpen(false)} /> }

      {/* {HERO SECTION } */}
      <section
        className="relative h-screen w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* NAV */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between p-6 md:p-8 z-20">
          <h1 className="text-white text-2xl italic select-none">Villa</h1>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="group p-2 rounded focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="6" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3" y="11.25" width="18" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3" y="16.5" width="18" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Centered content */}
        <div className="h-full w-full flex flex-col items-center justify-center text-center px-6 z-10 relative">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Welcome to <span className="italic">Villa</span> resort
          </h1>

          <p className="mt-6 text-white text-base sm:text-lg lg:text-xl opacity-90">
            Discover our world-class hotel & restaurant resort.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-sm tracking-wide shadow">
              EXPLORE THE BEAUTY
            </button>

            <button className="border border-white px-6 py-3 rounded-full text-sm tracking-wide text-white/95 backdrop-blur-sm">
              DOWNLOAD
            </button>
          </div>
        </div>

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/25 z-0"></div>
      </section>
    </div>
  



    </>
  )
}

export default Home
