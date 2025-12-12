import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Register = () => {
   let navigate=useNavigate()
   let [form,setform]=useState({
    myname:"",
    mycity:"",
    myage:"",
    mycontact:"",
    myemail:"",
    mypassword:"",
    mycpassword:""

   })

  let handlechange=(e)=>{
setform({...form,[e.target.name]:e.target.value})
  }

  let handlesubmit=(e)=>{
    let valid=true
    e.preventDefault() ;

    if(form.myname.trim()==""){
       alert("name cannot be empty")
    document.querySelector('#name').focus()
    valid=false
    }

    else if(form.mycity.trim()==""){
      alert("city cannot be empty")
    document.querySelector('#city').focus()
    valid=false
    }

    else if(form.myage.trim()=="" || Number(form.myage) < 18 || Number(form.myage) > 100){
      alert("enter age properly")
      document.querySelector('#age').focus()
      valid=false
    }

    else if(form.mycontact.trim()=="" || form.mycontact.length<10 || form.mycontact.length>10 ){
      alert("Pleae Enter your 10 digit number")
      document.querySelector('#contact').value()
      valid=false

    }

    else if(form.myemail.trim()=="" || !(form.myemail.includes('@gmail.com'))){
      alert("please enter email in correct format")
      document.querySelector('#email').value()
      valid=false
    }

    else if(form.mypassword.trim()=="" || !(form.mypassword.match(/[~!#$@%^&*()0123456789]/))){
      alert("use atleast one special charcater or special symbol")
      document.querySelector('#password').value()
      valid=false

    }
    else if(form.mycpassword.trim()=="" || !(form.mypassword==form.mycpassword)){
   alert("password empty or does not match")
         valid=false
    }
  if(valid){
    alert("form submitted")

    localStorage.setItem("myname",form.myname)
    localStorage.setItem("myemail",form.myemail)
    localStorage.setItem("myage",form.myage)
    localStorage.setItem("mycontact",form.mycontact)
    localStorage.setItem("myemail",form.myemail)
    localStorage.setItem("mypassword",form.mypassword)
    localStorage.setItem("mycpassword",form.mycpassword)

    Navigate('/login')
   }


  }


  return (
    <>
      <form onSubmit={handlesubmit}>

        <label>name</label>
        <input type="text"  id="name" name='myname' value={form.myname} onChange={handlechange}/> <br /> <br />
        

        <label>city</label>
        <input type="text" id='city' name='mycity' value={form.mycity} onChange={handlechange}/><br /> <br />

    <label>age</label>
    <input type="number" id="age" name='myage' value={form.myage} onChange={handlechange}/><br /> <br />


     <label>contact</label>
    <input type="number" id="contact" name='mycontact' value={form.mycontact} onChange={handlechange}/><br /> <br />

    <label>email</label>
    <input type="text" id='email' name='myemail' value={form.myemail} onChange={handlechange}/><br /> <br />

    <label>password</label>
    <input type="text"  name='mypassword' id="password" value={form.mypassword} onChange={handlechange}/><br /> <br />

    <label>confirm password</label>
    <input type="text" name='mycpassword' id="cpassword" value={form.mycpassword} onChange={handlechange}/><br /> <br />

<input type="submit"/>
    </form>
      <span id="error"></span> 
    </>
  )
}

export default Register
