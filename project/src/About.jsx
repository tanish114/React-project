import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Hero Content Parallax
      gsap.to(".hero-content", {
        yPercent: -30,
        opacity: 0,
        scrollTrigger: {
          trigger: ".about-hero",
          scrub: true,
          start: "top top",
          end: "bottom top"
        }
      });

      // 2. Text Reveal Animation
      gsap.from(".reveal-text span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".reveal-trigger",
          start: "top 80%"
        }
      });

      // 3. Image Parallax Floating Effect
      gsap.utils.toArray(".floating-img").forEach((img, i) => {
        gsap.to(img, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            scrub: i % 2 === 0 ? 1 : 1.5,
          }
        });
      });

      // 4. Reveal Lines
      gsap.from(".reveal-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".reveal-line",
          start: "top 90%"
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-stone-200 overflow-x-hidden font-sans selection:bg-amber-500 selection:text-black">
      
      {/* --- 1. REFINED NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
        <div className="text-2xl font-serif italic font-black tracking-tighter text-white pointer-events-auto select-none">
          VILLA
        </div>

        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="group relative w-14 h-14 flex flex-col items-center justify-center bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-500 shadow-2xl"
          >
            <div className="absolute inset-0 rounded-full bg-amber-500 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out opacity-10" />
            <div className="relative w-6 h-[10px] flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[4px] bg-amber-500' : ''}`} />
              <span className={`w-full h-[1.5px] bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[4px] bg-amber-500' : ''}`} />
            </div>
            <span className="absolute -bottom-8 text-[9px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 group-hover:-bottom-6 transition-all duration-500 text-amber-500 font-bold">
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* --- 2. THE MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-[9998] bg-[#080808] flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[30vw] font-black italic text-white">VILLA</h2>
        </div>
        
        <div className="relative z-10 flex flex-col gap-6 md:gap-10 text-center">
          {['Home', 'About', 'Services', 'Register','Login'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)} 
              className="group overflow-hidden py-2"
            >
              <span className="block text-5xl md:text-8xl font-serif italic text-stone-600 hover:text-amber-500 transition-all duration-500 transform group-hover:scale-110">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* --- 3. LUXURY BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-amber-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-stone-800/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
      </div>

      {/* --- 4. MAIN CONTENT --- */}
      <main className="relative z-10">
        
        {/* HERO */}
        <section className="about-hero h-screen flex items-center justify-center px-6">
          <div className="hero-content text-center">
            <p className="text-amber-500 tracking-[0.8em] uppercase text-[10px] mb-8 font-bold animate-pulse">Established 1992</p>
            <h1 className="text-[14vw] md:text-[10vw] font-serif italic leading-none">
              Architectural <br />
              <span className="not-italic text-stone-500">Purity.</span>
            </h1>
          </div>
        </section>

        {/* REVEAL SECTION */}
        <section className="reveal-trigger relative py-32 px-6 md:px-24 flex flex-col md:flex-row items-center gap-16 md:gap-32">
          <div className="w-full md:w-5/12 floating-img">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm ring-1 ring-white/10">
              <img 
                src="https://images.pexels.com/photos/2590799/pexels-photo-2590799.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0" 
                alt="Villa"
              />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 reveal-text">
            <h3 className="text-4xl md:text-7xl font-serif mb-10 leading-[1.1] italic">
              <span>Crafting</span> <span>Sanctuaries</span> <br />
              <span className="text-amber-500">Beyond</span> <span>Boundaries.</span>
            </h3>
            <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-xl font-light italic opacity-80">
              "Design is not just what it looks like. Design is how it feels to live within the light and shadows of a space."
            </p>
            <div className="reveal-line mt-12 h-[1px] w-24 bg-amber-600" />
          </div>
        </section>

        {/* IMAGE GRID */}
        <section className="relative py-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
            <div className="md:col-span-4 floating-img">
              <div className="aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-white/10">
                <img src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260" className="w-full h-full object-cover" alt="Detail" />
              </div>
            </div>
            <div className="md:col-span-8 floating-img md:mt-40">
              <div className="aspect-video md:h-[600px] overflow-hidden rounded-sm ring-1 ring-white/10">
                <img src="https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1260" className="w-full h-full object-cover" alt="Wide" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <div className="group cursor-pointer">
            <h2 className="text-7xl md:text-[10vw] font-serif leading-none italic mb-10 transition-all duration-700 group-hover:tracking-tighter">
              Visit <span className="text-amber-500 not-italic">Villa</span>
            </h2>
            <button className="px-12 py-5 border border-stone-800 rounded-full text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-500 tracking-[0.3em] text-[10px] uppercase font-bold bg-white/5">
              Request a Private Viewing
            </button>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center px-6">
        <p className="text-[9px] tracking-[0.6em] text-stone-600 uppercase">© 2025 VILLA GROUP — ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default About;

