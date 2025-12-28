import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Azure Infinity", category: "Pools", img: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1200", desc: "A seamless transition between water and sky." },
  { title: "Royal Suite", category: "Stay", img: "https://images.pexels.com/photos/2590799/pexels-photo-2590799.jpeg?auto=compress&cs=tinysrgb&w=1200", desc: "Designed for those who seek the extraordinary." },
  { title: "Nectar Bar", category: "Dining", img: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1200", desc: "Mixology elevated to a fine art form." },
  { title: "Private Jet", category: "Travel", img: "https://images.pexels.com/photos/5409623/pexels-photo-5409623.jpeg?auto=compress&cs=tinysrgb&w=1200", desc: "Your journey is as refined as your destination." },
];

const Service = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Velocity Skew Logic
      let proxy = { skew: 0 },
          skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"),
          clamp = gsap.utils.clamp(-15, 15);

      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = clamp(self.getVelocity() / -400);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 1,
              ease: "power3",
              overwrite: true,
              onUpdate: () => skewSetter(proxy.skew)
            });
          }
        }
      });

      // 2. Background Mesh Animation
      gsap.to(".mesh-ball", {
        x: "random(-50, 50)vw",
        y: "random(-50, 50)vh",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
      });

      // 3. Image Hover & Reveal
      gsap.utils.toArray(".image-reveal").forEach(img => {
        gsap.from(img, {
          scale: 1.3,
          opacity: 0,
          scrollTrigger: {
            trigger: img,
            scrub: true,
            start: "top bottom",
            end: "top center"
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-white min-h-screen overflow-hidden selection:bg-amber-500">
      
      {/* --- 1. NAV BAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
        <div className="text-2xl font-serif italic font-black tracking-tighter text-white pointer-events-auto">
            VILLA
        </div>

        {/* Custom Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="relative w-12 h-12 flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-amber-500 transition-all z-[10000] pointer-events-auto"
        >
          <span className={`w-6 h-[2px] bg-white mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`w-6 h-[2px] bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-[2px] bg-white mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* --- 2. OVERLAY MENU (Moved outside Nav for better stacking) --- */}
      <div className={`fixed inset-0 z-[9998] bg-black flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-6 text-center">
          {['Home', 'About', 'Service', 'Register','Login'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-5xl md:text-7xl font-serif italic text-stone-500 hover:text-amber-500 transition-all duration-500"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* --- 3. DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="mesh-ball absolute top-0 left-0 w-[50vw] h-[50vw] bg-amber-900/20 rounded-full blur-[120px]" />
        <div className="mesh-ball absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
      </div>

      {/* --- 4. CONTENT --- */}
      <div className="relative z-10 pt-40 px-6 md:px-24">
        <div className="skewElem mb-32">
          <h1 className="text-7xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic">
            Elite <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500">Services</span>
          </h1>
        </div>

        <section className="space-y-[40vh] pb-40">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-16 group">
              
              <div className="skewElem image-reveal relative w-full md:w-[50%] aspect-[16/10] rounded-sm overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-1 shadow-2xl">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
              </div>

              <div className="skewElem md:w-[40%] space-y-6">
                <span className="text-6xl font-outline opacity-20 block italic font-black">0{i+1}</span>
                <h3 className="text-5xl md:text-7xl font-bold italic transition-all duration-500 group-hover:text-amber-500">{service.title}</h3>
                <p className="text-xl text-neutral-400 font-light leading-relaxed">{service.desc}</p>
                <button className="group relative px-10 py-4 border border-white/20 rounded-full overflow-hidden transition-all hover:border-amber-500">
                  <span className="relative z-10 font-bold text-sm group-hover:text-black transition-colors uppercase tracking-widest">Inquire</span>
                  <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      <style jsx>{`
        .font-outline {
          -webkit-text-stroke: 1px #fff;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Service;