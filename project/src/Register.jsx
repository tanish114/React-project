import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import ElectricBorder from './ElectricBorder'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [form, setform] = useState({
    myname: "",
    mycity: "",
    myage: "",
    mycontact: "",
    myemail: "",
    mypassword: "",
    mycpassword: ""
  })

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  let handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  let handlesubmit = async (e) => {
  e.preventDefault()
  let valid = true

  if (form.myname.trim() === "") {
    alert("name cannot be empty"); valid = false
  } else if (form.myemail.trim() === "" || !(form.myemail.includes('@gmail.com'))) {
    alert("Invalid email"); valid = false
  } else if (form.mypassword.trim() === "" || !(form.mypassword.match(/[~!#$@%^&*()0123456789]/))) {
    alert("Password must include special character or number"); valid = false
  } else if (form.mycpassword.trim() === "" || form.mycpassword !== form.mypassword) {
    alert("Password doesn't match"); valid = false
  }

  if (valid) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.myname,
          email: form.myemail,
          password: form.mypassword,
          city: form.mycity,
          age: form.myage,
          contact: form.mycontact,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        alert("Registered successfully")
        navigate("/login")
      } else {
        alert(data.error || "Registration failed")
      }

    } catch (error) {
      alert("Server not responding")
      console.error(error)
    }
  }
}


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white px-4 overflow-hidden">
      
      {/* --- NAVIGATION: CLEANED & FIXED --- */}
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

      {/* --- MENU OVERLAY --- */}
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

      {/* --- REGISTER FORM --- */}
      <div className="relative z-10 scale-90 md:scale-100">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <form
            onSubmit={handlesubmit}
            className="bg-[#0d0f17]/95 backdrop-blur-xl p-8 w-[380px] rounded-xl flex flex-col gap-4 border border-white/5 shadow-2xl"
          >
            <h1 className="text-2xl font-serif italic text-center mb-2">
              Create <span className="text-cyan-400 font-sans not-italic font-bold">Account</span>
            </h1>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Name</label>
              <input type="text" name="myname" value={form.myname} onChange={handlechange} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
              <input type="text" name="myemail" value={form.myemail} onChange={handlechange} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Password</label>
              <input type="password" name="mypassword" value={form.mypassword} onChange={handlechange} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Confirm Password</label>
              <input type="password" name="mycpassword" value={form.mycpassword} onChange={handlechange} className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors" />
            </div>

            <button
              type="submit"
              className="mt-3 bg-cyan-400 text-black py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(125,249,255,0.2)]"
            >
              Register
            </button>
          </form>
        </ElectricBorder>
      </div>
    </div>
  )
}

export default Register