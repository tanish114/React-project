import React, { useState, useEffect, useRef } from "react";
import Menuoverlay from "./Menuoverlay.jsx";
import SliderSection from "./SliderSection";
import heroImage from "../public/home1.jpg";
import './Home.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    ScrollTrigger.config({ limitCallbacks: true });

    let ctx = gsap.context(() => {
      // 1. SKEW ENGINE
      const proxy = { skew: 0 };
      const setSkew = gsap.quickSetter(".warp-inner", "css");

      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = gsap.utils.clamp(-6, 6, self.getVelocity() / 500);
          gsap.to(proxy, {
            skew: skew,
            duration: 0.4,
            ease: "power2.out",
            overwrite: true,
            onUpdate: () => setSkew({ "--skew": `${proxy.skew}deg` }),
            onComplete: () => {
              gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                ease: "power3.out",
                onUpdate: () => setSkew({ "--skew": `${proxy.skew}deg` })
              });
            }
          });
        }
      });

      // 2. GRID COLOR INVERSION
      ScrollTrigger.create({
        trigger: ".white-section",
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to(".bg-grid", { "--grid-color": "rgba(0,0,0,0.15)", duration: 0.8 }),
        onLeave: () => gsap.to(".bg-grid", { "--grid-color": "rgba(255,255,255,0.1)", duration: 0.8 }),
        onEnterBack: () => gsap.to(".bg-grid", { "--grid-color": "rgba(0,0,0,0.15)", duration: 0.8 }),
        onLeaveBack: () => gsap.to(".bg-grid", { "--grid-color": "rgba(255,255,255,0.1)", duration: 0.8 }),
      });

      // 3. GRADIENT MORPH
      gsap.to(".bg-overlay", {
        background: "linear-gradient(135deg, #0f172a 0%, #3b0764 50%, #4c0519 100%)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const SlatImage = ({ src }) => (
    <div className="image-container relative w-full h-full overflow-hidden flex shadow-2xl">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="slat relative h-full flex-1 overflow-hidden border-r border-white/5">
          <img 
            src={src} 
            className="absolute h-full object-cover max-w-none" 
            style={{ width: "1000%", left: `-${i * 100}%` }} 
            alt="Villa" 
          />
        </div>
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="bg-overlay absolute inset-0 opacity-40" />
        <div className="bg-grid absolute inset-0 opacity-100" 
             style={{ 
               backgroundImage: `radial-gradient(var(--grid-color, rgba(255,255,255,0.1)) 1px, transparent 1px)`, 
               backgroundSize: '50px 50px' 
             }} />
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px]" />
      </div>

      {/* FIXED NAVIGATION - HIGHER Z-INDEX */}
      <div className="fixed top-8 right-8 z-[9999]">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} // TOGGLE LOGIC HERE
          className="group p-6 backdrop-blur-3xl border border-white/10 rounded-full hover:scale-110 transition-all shadow-2xl active:scale-95 bg-black/20"
        >
          <div className="flex items-center gap-4">
            <span className="text-amber-600 text-sm font-bold tracking-[0.2em] uppercase pl-2">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col gap-1.5 items-end">
              <div className={`h-px bg-white transition-all duration-500 ${menuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
              <div className={`h-px bg-white transition-all duration-500 ${menuOpen ? 'opacity-0' : 'w-5'}`} />
              <div className={`h-px bg-white transition-all duration-500 ${menuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
            </div>
          </div>
        </button>
      </div>

      <Menuoverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <div className="warp-inner relative z-10 will-change-transform" style={{ transform: "skewY(var(--skew, 0deg))" }}>
        
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 opacity-30">
            <SlatImage src={heroImage} />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-[16vw] font-black italic tracking-tighter leading-none mix-blend-difference uppercase">
              Villa
            </h1>
            <p className="tracking-[2em] text-[10px] uppercase font-bold opacity-40 mt-6 font-sans">Majestic Resonance</p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="group">
                <div className="w-full h-[600px] mb-10 overflow-hidden shadow-2xl">
                  <SlatImage src={`/visit${id}.jpg`} />
                </div>
                <h3 className="text-4xl font-black italic uppercase tracking-tighter">Level 0{id}</h3>
                <button onClick={() => navigate('/Booking')} className="mt-4 px-6 py-2 border border-white/20 rounded hover:bg-white hover:text-black transition-all">
                   Book It
                </button>
                <div className="w-12 h-px bg-white mt-4 group-hover:w-32 transition-all duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* WHITE SECTION */}
        <section className="white-section py-32 bg-white text-black rounded-[80px] md:rounded-[150px] mx-4 relative z-20 shadow-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SliderSection />
          </div>
        </section>

        {/* BLOG REVEAL */}
        <section className="py-40 px-6">
          <div className="flex flex-col border-t border-white/10">
            {["STAY", "LIVE", "VOX"].map((word, i) => (
              <div key={i} className="group relative py-20 border-b border-white/10 flex justify-between items-center cursor-pointer">
                <h2 className="text-[11vw] font-black tracking-tighter transition-all duration-700 group-hover:pl-10 group-hover:text-cyan-400 italic">
                  {word}
                </h2>
                <div className="w-64 h-80 opacity-0 group-hover:opacity-100 transition-all duration-700 absolute left-1/2 -translate-x-1/2 pointer-events-none z-20">
                  <SlatImage src={`/blog${i+1}.jpg`} />
                </div>
                <span className="text-4xl font-thin opacity-20">0{i+1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <section className="h-screen flex flex-col items-center justify-center">
           <h2 className="text-[15vw] font-black italic tracking-tighter mb-10 leading-none">VILLA.</h2>
           <button className="px-20 py-8 bg-white text-black font-black uppercase text-xl rounded-full hover:scale-110 shadow-2xl transition-all">
             RESERVE
           </button>
        </section>
      </div>

      <style jsx>{`
        .warp-inner { 
          transform-origin: center center;
          transition: transform 0.15s ease-out; 
        }
      `}</style>
    </div>
  );
};

export default Home;