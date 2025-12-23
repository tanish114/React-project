import React, { useState } from "react";
import Menuoverlay from "./Menuoverlay.jsx";
import SliderSection from "./SliderSection";
import './Home.css'
import heroImage from "../public/home1.jpg"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Home = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 useEffect(() => {
  // Fade up for headings
  gsap.utils.toArray(".section-title").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "restart none none reset",
      },
    });
  });

  // Fade-up + stagger for cards
  gsap.utils.toArray(".fade-card").forEach((container) => {
    gsap.from(container.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });
  });

  // Zoom-in on images
  gsap.utils.toArray(".zoom-img").forEach((img) => {
    gsap.from(img, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        toggleActions: "restart none none reset",
      },
    });
  });

  // Parallax floating effect
  gsap.utils.toArray(".float-card").forEach((card) => {
    gsap.to(card, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "easeInOut",
    });
  });

}, []);

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


{/* you can visit section start */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
  {/* HEADING */}
  <h2 className="text-gray-500 text-xs font-semibold tracking-[0.3rem] mb-12 space-y-3 fade-card float-card">
    YOU CAN VISIT
  </h2>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* CARD 1 */}
    <div className="space-y-3">
      <img 
        src="/visit1.jpg" 
        alt="Food & Wines"
        className="w-full h-52 object-cover rounded-md zoom-img"
      />

      <h3 className="text-lg font-medium text-gray-900">Food & Wines</h3>

      <div className="text-pink-600 text-sm tracking-wide">
        ★★★★☆
      </div>

      <p className="text-gray-500 text-sm italic">
        3,239 reviews
      </p>
    </div>

    {/* CARD 2 */}
    <div className="space-y-3">
      <img 
        src="/visit2.jpg" 
        alt="Resort & Spa"
        className="w-full h-52 object-cover rounded-md zoom-img"
      />

      <h3 className="text-lg font-medium text-gray-900">Resort & Spa</h3>

      <div className="text-pink-600 text-sm tracking-wide">
        ★★★★★
      </div>

      <p className="text-gray-500 text-sm italic">
        4,921 reviews
      </p>
    </div>

    {/* CARD 3 */}
    <div className="space-y-3">
      <img 
        src="/visit3.jpg" 
        alt="Hotel Rooms"
        className="w-full h-52 object-cover rounded-md zoom-img"
      />

      <h3 className="text-lg font-medium text-gray-900">Hotel Rooms</h3>

      <div className="text-pink-600 text-sm tracking-wide">
        ★★★★★
      </div>

      <p className="text-gray-500 text-sm italic">
        2,112 reviews
      </p>
    </div>

    {/* CARD 4 */}
    <div className="space-y-3">
      <img 
        src="/visit4.jpg" 
        alt="Yacht Club"
        className="w-full h-52 object-cover rounded-md zoom-img"
      />

      <h3 className="text-lg font-medium text-gray-900">Yacht Club</h3>

      <div className="text-pink-600 text-sm tracking-wide">
        ★★★★☆
      </div>

      <p className="text-gray-500 text-sm italic">
        6,421 reviews
      </p>
    </div>

  </div>
</section>
{/* you can visit section end */}

{/* slider section */}
<SliderSection />
{/* slider section */}


{/* recent blog post centre */}



<section className="py-20 px-4 md:px-12 lg:px-24 ">
  
  {/* HEADING */}
  <div className="text-center mb-12">
    <h2 className=" section-title text-3xl md:text-4xl font-serif mb-4">
      Recent Blog Post
    </h2>

    <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo
      odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis,
      blanditiis laboriosam alias. Sed.
    </p>
  </div>

  {/* BLOG CARDS */}
  <div className="grid ... fade-card grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <div className="bg-white rounded shadow-sm overflow-hidden cursor-pointer">
      <img 
        src="/blog1.jpg"
        alt="Blog 1"
        className="w-full h-52 object-cover zoom-img"
      />

      <div className="p-6">
        <p className="text-xs text-gray-400 tracking-widest mb-2">
          FEBRUARY 26, 2018
        </p>
        <h3 className="text-lg text-gray-800 font-medium leading-snug">
          Five Reasons to Stay at Villa Resort
        </h3>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded shadow-sm overflow-hidden cursor-pointer">
      <img 
        src="blog2.jpg"
        alt="Blog 2"
        className="w-full h-52 object-cover zoom-img"
      />

      <div className="p-6">
        <p className="text-xs text-gray-400 tracking-widest mb-2">
          FEBRUARY 26, 2018
        </p>
        <h3 className="text-lg text-gray-800 font-medium leading-snug">
          Five Reasons to Stay at Villa Resort
        </h3>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-white rounded shadow-sm overflow-hidden cursor-pointer">
      <img 
        src="blog3.jpg"
        alt="Blog 3"
        className="w-full h-52 object-cover zoom-img"
      />

      <div className="p-6">
        <p className="text-xs text-gray-400 tracking-widest mb-2">
          FEBRUARY 26, 2018
        </p>
        <h3 className="text-lg text-gray-800 font-medium leading-snug">
          Five Reasons to Stay at Villa Resort
        </h3>
      </div>
    </div>

  </div>
</section>
{/* recent blog post centre */}

{/* review section */}
<section className="py-20 px-4 md:px-12 lg:px-24 bg-white text-center ">

  {/* Heading */}
  <h2 className="section-title text-3xl md:text-4xl font-serif mb-16 ">
    Testimonial
  </h2>

  {/* Grid */}
  <div className="grid ... fade-card grid-cols-1 md:grid-cols-3 gap-16">

    {/* CARD 1 */}
    <div className="flex flex-col items-center text-center max-w-md mx-auto">
      <img 
        src="/person_1.jpg"
        alt="Testimonial 1"
        className="w-20 h-20 rounded-full object-cover mb-6 zoom-img"
      />

      <p className="italic text-gray-700 text-[15px] leading-relaxed px-4">
        “Et quidem, impedit eum fugiat excepturi iste aliquid suscipit, tempore, 
        delectus rem soluta voluptatem distinctio sed dolores, magni fugit nemo cum expedita. 
        Totam a accusantium sunt aut autem placeat officia.”
      </p>

      <p className="text-sm text-gray-400 mt-4">— Jean Smith</p>
    </div>

    {/* CARD 2 */}
    <div className="flex flex-col items-center text-center max-w-md mx-auto">
      <img 
        src="/person_2.jpg"
        alt="Testimonial 2"
        className="w-20 h-20 rounded-full object-cover mb-6 zoom-img"
      />

      <p className="italic text-gray-700 text-[15px] leading-relaxed px-4">
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        In dolor, iusto doloremque quo odio repudiandae sunt eveniet? 
        Enim facilis laborum voluptate id porro, culpa maiores quis, 
        blanditiis laboriosam alias.”
      </p>

      <p className="text-sm text-gray-400 mt-4">— John Doe</p>
    </div>

    {/* CARD 3 */}
    <div className="flex flex-col items-center text-center max-w-md mx-auto">
      <img 
        src="/person_3.jpg"
        alt="Testimonial 3"
        className="w-20 h-20 rounded-full object-cover mb-6 zoom-img"
      />

      <p className="italic text-gray-700 text-[15px] leading-relaxed px-4">
        “Nostrum, alias, provident magnam sit blanditiis laboriosam unde quaerat, 
        at ipsam, ratione maiores saepe nisi modi corporis quas! Beatae quam, quod 
        aspernatur debitis nesciunt quasi porro ea iste nobis aliquid perspiciatis 
        nostrum culpa impedit aut, iure blanditiis itaque similique sunt!”
      </p>

      <p className="text-sm text-gray-400 mt-4">— John Doe</p>
    </div>

  </div>
</section>
{/* review section */}


    </div>

    </>
  )
}

export default Home
