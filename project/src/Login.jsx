import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import gsap from 'gsap'
import ElectricBorder from './ElectricBorder'

const Login = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef(null);
  let navigate = useNavigate()

  let [login, setlogin] = useState({
    myemail: "",
    mypassword: "",
  })

  // GSAP Entry Animation
  useEffect(() => {
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 50, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  let handlechange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value })
  }

  let handlesubmit = (e) => {
    e.preventDefault();

    let valid = true

    if (!(login.myemail == localStorage.getItem("myemail"))) {
      alert("email not registered")
      valid = false
    }
    else if (!(login.mypassword == localStorage.getItem("mypassword"))) {
      alert("password does not match")
      valid = false
    }

    if (valid == true) {
      alert("login successfull!")
      navigate('/')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white px-4 overflow-hidden">
      
      {/* --- 1. NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 w-full z-9999 flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
        <div className="text-2xl font-serif italic font-black tracking-tighter text-white pointer-events-auto select-none">
          VILLA
        </div>

        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="group relative w-14 h-14 flex flex-col items-center justify-center bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 hover:border-amber-500 transition-all duration-500 shadow-2xl"
          >
            <div className="relative w-6 h-10px flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-white transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-4px bg-amber-500' : ''}`} />
              <span className={`w-full h-[1.5px] bg-white transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-4px bg-amber-500' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* --- 2. MENU OVERLAY --- */}
      <div className={`fixed inset-0 z-9998 bg-[#080808] flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="relative z-10 flex flex-col gap-6 text-center">
          {['Home', 'About', 'Services', 'Register', 'Login'].map((item) => (
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

      {/* --- 3. BACKGROUND DECOR --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-amber-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-zinc-800/10 rounded-full blur-[100px]" />
      </div>

      {/* --- 4. ANIMATED LOGIN FORM --- */}
      <div ref={formRef} className="relative z-10 scale-90 md:scale-100">
        <ElectricBorder
          color="#c5a059" // Luxury Gold color for Login
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <form
            onSubmit={handlesubmit}
            className="bg-[#0d0f17]/95 backdrop-blur-xl p-10 w-[380px] rounded-xl flex flex-col gap-6 border border-white/5 shadow-2xl"
          >
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-serif italic tracking-tight">
                Welcome <span className="text-amber-500">Back</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Authentication Required</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
              <input 
                type="text" 
                id="email" 
                name='myemail' 
                value={login.myemail} 
                onChange={handlechange}
                placeholder="villa@luxury.com"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Secure Password</label>
              <input 
                type="password" 
                id='password' 
                name='mypassword' 
                value={login.mypassword} 
                onChange={handlechange}
                placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-gray-700"
              />
            </div>

            <input 
              type="submit" 
              value="Access Account"
              className="mt-4 bg-amber-500 text-black py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-xs cursor-pointer hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.2)]"
            />

            <div className="text-center">
               <Link to="/register" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                  Create an account instead
               </Link>
            </div>
          </form>
        </ElectricBorder>
      </div>
    </div>
  )
}

export default Login