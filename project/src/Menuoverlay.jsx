import React, { useEffect } from "react";

export default function MenuOverlay({ open, onClose }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    // use aria-hidden when closed
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transform transition-all duration-300 ${
        open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-white"></div>

      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 text-3xl leading-none z-60"
      >
        ×
      </button>

      <div className="relative h-full w-full z-40 overflow-y-auto">
        <div className="flex flex-col lg:flex-row h-full px-8 md:px-20 lg:px-28 pt-24 gap-12">
          {/* Left links */}
          <div className="flex-1">
            <ul className="space-y-8 text-4xl md:text-5xl lg:text-6xl font-normal text-black">
              <li className="inline-block">
                <span className="inline-block bg-pink-600/90 text-white px-3 -ml-3 py-1">Home</span>
              </li>
              <li>About</li>
              <li>Gallery</li>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex-1 text-gray-600 text-base md:text-lg">
            <h3 className="uppercase tracking-widest text-gray-400 text-sm mb-5">Contact Info</h3>
            <p>98 West 21th Street, Suite 721<br />New York NY 10016</p>
            <p className="mt-4">info@yourdomain.com</p>
            <p className="mt-4">(+1) 435 3533</p>
          </div>

          {/* Social */}
          <div className="flex-1 text-gray-600 text-base md:text-lg">
            <h3 className="uppercase tracking-widest text-gray-400 text-sm mb-5">Connect With Us</h3>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
