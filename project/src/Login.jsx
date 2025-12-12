import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate=useNavigate()

  let [login,setlogin]=useState({
    myemail:"",
    mypassword:"",
  })

  let handlechange=(e)=>{
    setlogin({...login,[e.target.name]:e.target.value})
  }

  let handlesubmit=(e)=>{
    e.preventDefault() ;

    let valid=true


    if(!(login.myemail==localStorage.getItem("myemail"))){
      alert("email not registered")
      // document.querySelector('#email').focus()
      valid=false
    }

    else if(!(login.mypassword==localStorage.getItem("mypassword"))){
      alert("password does not match")
      // document.querySelector('#password').focus()
      valid=false
    }

    if(valid==true){
      alert("login successfull!")

      navigate('/')
    }
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
      <label>email</label>
        <input type="text"  id="email" name='myemail' value={login.myemail} onChange={handlechange}/> <br /> <br />
        

        <label>password</label>
        <input type="text" id='password' name='mypassword' value={login.mypassword} onChange={handlechange}/><br /> <br />


      <label>login</label>
      <input type="submit"  />
      </form>
    </>
  )
}

export default Login
