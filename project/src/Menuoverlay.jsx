import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Service from './Service'
import Register from './Register'
import Login from './Login'

export default function MenuOverlay({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[9990] transform transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* WHITE BACKGROUND */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="relative h-full w-full z-40 overflow-y-auto">
        <div className="flex flex-col lg:flex-row h-full px-8 md:px-20 lg:px-28 pt-32 gap-12">
          <div className="flex-1">
            <ul className="space-y-8 text-4xl md:text-5xl lg:text-6xl font-normal text-black font-serif">
              <li><Link to="/" onClick={onClose} className="hover:italic hover:pl-4 transition-all uppercase tracking-tighter">Home</Link></li>
              <li><Link to="/about" onClick={onClose} className="hover:italic hover:pl-4 transition-all uppercase tracking-tighter">About</Link></li>
              <li><Link to="/service" onClick={onClose} className="hover:italic hover:pl-4 transition-all uppercase tracking-tighter">Service</Link></li>
              <li><Link to="/register" onClick={onClose} className="hover:italic hover:pl-4 transition-all uppercase tracking-tighter">Register</Link></li>
              <li><Link to="/login" onClick={onClose} className="hover:italic hover:pl-4 transition-all uppercase tracking-tighter">Login</Link></li>
            </ul>
          </div>

          <div className="flex-1 text-gray-600">
            <h3 className="uppercase tracking-widest text-gray-400 text-sm mb-5 font-bold">Contact Info</h3>
            <p className="text-xl">98 West 21th Street, Suite 721<br />New York NY 10016</p>
            <p className="mt-4 text-black font-bold">info@villamajestic.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}