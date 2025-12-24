// import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// const Booking = () => {
//     let Navigate=useNavigate()
//     let [form,setform]=useState({
//         name:"",
//         age:"",
//         aadhar:"",
//         city:"",
//         email:"",
//         checkin:"",
//         checkout:"",
//         people:"",
//     })

//     let handlechange=((e)=>{
//         setform({...form,[e.target.name]:e.target.value})
//     })

//     let handlesubmit=((e)=>{
//         e.preventDefault()

//         let valid=true

//     if (form.name.trim()===""){
//         alert("Name cannot be empty 👎")
//         valid=false
//     }
//      else if(form.aadhar.trim()=="" || form.aadhar.length<12 || form.aadhar.length>12){
//         alert("please enter12 digit aadhar number 😬")
//         valid=false
//     }

//     else if(form.city.trim===""){
//         alert("city cannot be empty 👎")
//         valid=false
//     }

//     else if(form.age.trim==="" || Number(form.age) <18){
//         alert("Age cannot be empty 😶 or less than 18 🤯")
//         valid=false
//     }

//     else if(form.contact==="" || form.contact.length <10 || form.contact.length >10 ){
//         alert("contact cannot be empty 😶 or less than or greater than 10 digit 🧐")
//         valid=false
//     }

//     else if(form.email.trim()==="" || !(form.email.includes('@gmail.com'))){
//         alert("email cannot be empty 😶 or include @gmail,com in it 🙄")
//         valid=false
//     }
    
//     if (valid) {
//       alert("Form submitted 🥳")

//       Navigate('/BookingConfirm')
//     }
   
//     })

//   return (
//     <>
//        <form
//           onSubmit={handlesubmit}
//         >
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={form.name}
//               onChange={handlechange}
              
//             />
//           </div>
//            <div>
//             <label>Aadhar number</label>
//             <input
//               type="number"
//               id="aadhar"
//               name="aadhar"
//               value={form.aadhar}
//               onChange={handlechange}
              
//             />
//           </div>

//           <div>
//             <label>City</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={form.city}
//               onChange={handlechange}
              
              
//             />
//           </div>

//           <div>
//             <label >Age</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={form.age}
//               onChange={handlechange}
              
              
//             />
//           </div>

//           <div >
//             <label>Contact</label>
//             <input
//               type="number"
//               id="contact"
//               name="contact"
//               value={form.contact}
//               onChange={handlechange}
              
//             />
//           </div>

//           <div >
//             <label>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={handlechange}
            
//             />
//           </div>

//           <div >
//             <label >CheckIn</label>
//             <input
//               type="date"
//               id="checkin"
//               name="checkin"
//               value={form.checkin}
//               onChange={handlechange}
              
//             />
//           </div>

//           <div >
//             <label>CheckOut</label>
//             <input
//               type="date"
//               id="checkout"
//               name="checkout"
//               value={form.checkout}
//               onChange={handlechange}
              
//             />
//           </div>

//           <div >
//             <label>No.of People</label>
//             <input
//               type="number"
//               id="people"
//               name="people"
//               value={form.people}
//               onChange={handlechange}
              
//             />
//           </div>

//           <button
//             type="submit">Book It!!</button>

//         </form>
//     </>
//   )
// }

// export default Booking


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import axios from 'axios';

const Booking = () => {
  const Navigate = useNavigate();
  const containerRef = useRef(null);
  
  const [form, setform] = useState({
    name: "", age: "", aadhar: "", city: "",
    email: "", contact: "", checkin: "", checkout: "", people: "",
  });
   


  
   
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance: Elements "rising" from the fog
      const tl = gsap.timeline();
      
      tl.from(".form-container", {
        y: 40,
        opacity: 0,
        filter: "blur(15px)",
        duration: 1.5,
        ease: "expo.out"
      })
      .from(".field-anim", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out"
      }, "-=1");

      // 2. Continuous Background Breath
      gsap.to(".glow-1", {
        x: "20vw",
        y: "10vh",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".glow-2", {
        x: "-15vw",
        y: "-20vh",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    
    let valid=true

    if (form.name.trim()===""){
        alert("Name cannot be empty 👎")
        valid=false
    }
     else if(form.aadhar.trim()=="" || form.aadhar.length<12 || form.aadhar.length>12){
        alert("please enter12 digit aadhar number 😬")
        valid=false
    }

    else if(form.city.trim===""){
        alert("city cannot be empty 👎")
        valid=false
    }

    else if(form.age.trim==="" || Number(form.age) <18){
        alert("Age cannot be empty 😶 or less than 18 🤯")
        valid=false
    }

    else if(form.contact==="" || form.contact.length <10 || form.contact.length >10 ){
        alert("contact cannot be empty 😶 or less than or greater than 10 digit 🧐")
        valid=false
    }

    else if(form.email.trim()==="" || !(form.email.includes('@gmail.com'))){
        alert("email cannot be empty 😶 or include @gmail,com in it 🙄")
        valid=false
    }
    
    if (valid) {
     
     let api='http://localhost:3000/hotel'
      axios.post(api,form).then(()=>{
          alert("Form submitted 🥳")
      })

      // Navigate('/BookingConfirm')
       gsap.to(".form-container", {
      opacity: 0,
      y: -20,
      filter: "blur(10px)",
      duration: 0.8,
      onComplete: () => Navigate('/BookingConfirm')
    });
    }
    
   
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#08080a] flex items-center justify-center p-6 overflow-hidden">
      
      {/* --- THE ETHEREAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="glow-1 absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="glow-2 absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-rose-900/10 rounded-full blur-[150px]" />
        {/* Fine Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- THE BEAUTIFUL FORM --- */}
      <div className="form-container relative z-10 w-full max-w-4xl `bg-white/2` backdrop-blur-2xl border border-white/10 rounded-[48px] p-10 md:p-16 shadow-2xl">
        
        <div className="text-center mb-12 field-anim">
          <h2 className="text-5xl md:text-6xl font-serif italic tracking-tighter text-white mb-2">
            Secure your Stay
          </h2>
          <p className="text-[10px] tracking-[0.6em] uppercase text-indigo-400 font-bold">The Villa Experience</p>
        </div>

        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { label: "Guest Name", name: "name", type: "text", ph: "Full Name" },
            { label: "Aadhar UID", name: "aadhar", type: "number", ph: "0000 0000 0000" },
            { label: "Origin City", name: "city", type: "text", ph: "City" },
            { label: "Age", name: "age", type: "number", ph: "Min 18" },
            { label: "Contact", name: "contact", type: "number", ph: "+91 ..." },
            { label: "Email", name: "email", type: "email", ph: "example@gmail.com" },
            { label: "Check-In", name: "checkin", type: "date" },
            { label: "Check-Out", name: "checkout", type: "date" },
            { label: "Guests", name: "people", type: "number", ph: "Quantity" },
          ].map((field) => (
            <div key={field.name} className="field-anim flex flex-col gap-2 group">
              <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-focus-within:text-indigo-400 transition-colors ml-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handlechange}
                placeholder={field.ph}
                className="bg-white/5 border border-white/5 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all placeholder:text-white/10"
              />
            </div>
          ))}

          <div className="md:col-span-3 mt-10 field-anim">
            <button
              type="submit"
              className="group relative w-full py-6 bg-white text-black font-black uppercase tracking-[1em] text-xs rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span className="relative z-10 transition-colors group-hover:text-white duration-500">Confirm Reservation</span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default Booking;