import React from 'react'
import {Outlet,Link} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <header>
        <ul>
            <li> <Link to={"/"}>Home </Link> </li>
            <li> <Link to={"about"}>About </Link> </li>
            <li> <Link to={"service"}>service </Link> </li>
            <li> <Link to={"Register"}>Register </Link> </li>
            <li> <Link to={"login"}>Login </Link> </li>
            {/* <Route path='*' element={<h1>Error</h1>} /> */}
        </ul>
    </header>
    <hr />
    <Outlet/>
    <hr />

    <hr />
    <footer className="bg-[#1a1a1a] text-gray-300 py-16 px-6 md:px-16 lg:px-24">

  {/* TOP GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

    {/* COLUMN 1 */}
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Links</h3>
      <p>About Us</p>
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      <p>Help</p>
      <p>Rooms</p>
    </div>

    {/* COLUMN 2 */}
    <div className="space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">Navigation</h3>
      <p>Our Location</p>
      <p>The Hosts</p>
      <p>About</p>
      <p>Contact</p>
      <p>Restaurant</p>
    </div>

    {/* COLUMN 3 */}
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
        Address:
      </h3>
      <p className="text-gray-400 leading-relaxed">
        98 West 21th Street, Suite 721 New<br />
        York NY 10016
      </p>

      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mt-4">
        Phone:
      </h3>
      <p>(+1) 435 3533</p>

      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mt-4">
        Email:
      </h3>
      <p>info@yourdomain.com</p>
    </div>

    {/* COLUMN 4 – NEWSLETTER */}
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">
        Sign up for our newsletter
      </h3>

      <div className="relative">
        <input 
          type="text"
          placeholder="Your email..."
          className="w-full bg-transparent border-b border-gray-500 py-2 pr-10 focus:outline-none text-gray-300"
        />
        
        {/* Send Icon */}
        <span className="absolute right-0 top-2 text-gray-300 text-lg cursor-pointer">
          ✈
        </span>
      </div>
    </div>
  </div>

  {/* DIVIDER */}
  <div className="border-t border-gray-700 mt-16 pt-8"></div>

  {/* BOTTOM SECTION */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">

    {/* COPYRIGHT */}
    <p className="text-sm text-gray-400">
      Copyright ©2025 All rights reserved |
      This template is made with <span className="text-pink-500">♥</span> by Colorlib
    </p>

    {/* SOCIAL ICONS */}
    <div className="flex gap-4 text-gray-300 text-xl">
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-tripadvisor"></i>
    </div>
  </div>

</footer>

    <hr />
    


     </> 
  )
}

export default Layout
