

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  let [form, setform] = useState({
    myname: "",
    mycity: "",
    myage: "",
    mycontact: "",
    myemail: "",
    mypassword: "",
    mycpassword: ""
  })

  let handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  let handlesubmit = (e) => {
    e.preventDefault()
    let valid = true

    if (form.myname.trim() === "") {
      alert("name cannot be empty")
      valid = false
    }
    else if (form.mycity.trim() === "") {
      alert("city cannot be empty")
      valid = false
    }
    else if (form.myage.trim() === "" || Number(form.myage) < 18 || Number(form.myage) > 100) {
      alert("Enter age properly")
      valid = false
    }
    else if (form.mycontact.trim() === "" || form.mycontact.length !== 10) {
      alert("Enter 10 digit number")
      valid = false
    }
    else if (form.myemail.trim() === "" || !(form.myemail.includes('@gmail.com'))) {
      alert("Invalid email")
      valid = false
    }
    else if (form.mypassword.trim() === "" || !(form.mypassword.match(/[~!#$@%^&*()0123456789]/))) {
      alert("Password must include special character or number")
      valid = false
    }
    else if (form.mycpassword.trim() === "" || form.mycpassword !== form.mypassword) {
      alert("Password doesn't match")
      valid = false
    }

    if (valid) {
      alert("Form submitted")

      localStorage.setItem("myname", form.myname)
      localStorage.setItem("myemail", form.myemail)
      localStorage.setItem("myage", form.myage)
      localStorage.setItem("mycontact", form.mycontact)
      localStorage.setItem("mypassword", form.mypassword)

      navigate('/login')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      
     
      
        <form
          onSubmit={handlesubmit}
          className="bg-[#0d0f17]/90 backdrop-blur-md p-8 w-[380px] rounded-xl flex flex-col gap-4"
        >
          <h1 className="text-2xl font-semibold text-center mb-2">
            Create Account
          </h1>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="myname"
              value={form.myname}
              onChange={handlechange}
              className="input-field border rounded-lg"
              
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">City</label>
            <input
              type="text"
              id="city"
              name="mycity"
              value={form.mycity}
              onChange={handlechange}
              className="input-field border rounded-lg"
              
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Age</label>
            <input
              type="number"
              id="age"
              name="myage"
              value={form.myage}
              onChange={handlechange}
              className="input-field border rounded-lg"
              
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Contact</label>
            <input
              type="number"
              id="contact"
              name="mycontact"
              value={form.mycontact}
              onChange={handlechange}
              className="input-field border rounded-lg"
              
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="myemail"
              value={form.myemail}
              onChange={handlechange}
              className="input-field border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="mypassword"
              value={form.mypassword}
              onChange={handlechange}
              className="input-field border rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              name="mycpassword"
              value={form.mycpassword}
              onChange={handlechange}
              className="input-field border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="mt-3 bg-cyan-400 text-black py-2 rounded-lg font-semibold hover:bg-cyan-300 transition duration-200"
          >
            Register
          </button>

         

        </form>
     
    </div>
  )
}

export default Register

