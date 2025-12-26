import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const on = () => {

  let [form,setform]=useState({
    name:"",
    age:"",
    aadhar:"",
    city:"",
    checkin:"",
    checkout:"",
    people:"",
  })

  let [data,setdata]=useState([])
  let [editId,seteditId]=useState(null)

  let fetchdata=()=>{
    let api="http://localhost:3000/hotel"
    axios.get(api).then((res)=>{
      setdata(res.data) 
    })
  }

  useEffect(()=>{
    fetchdata()

    const ctx = gsap.context(() => {
      gsap.from(".page", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(()=>{
    const ctx = gsap.context(() => {
      gsap.from(".table-row", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out"
      })
    })

    return () => ctx.revert()
  }, [data])

  useEffect(()=>{
    if(editId){
      const ctx = gsap.context(() => {
        gsap.from(".edit-form", {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.6,
          ease: "power3.out"
        })
      })

      return () => ctx.revert()
    }
  }, [editId])

  let datadelete=(id)=>{
    let api=`http://localhost:3000/hotel/${id}`
    axios.delete(api).then(()=>{
      alert("booking cancelled")
      fetchdata()
    })
  }

  let handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  let handlesubmit=(e)=>{
    e.preventDefault()
    let api=`http://localhost:3000/hotel/${editId}`
    axios.put(api,{...form,person:500}).then(()=>{
      fetchdata()
      seteditId(null)
    })
  }

  let formopen=(e)=>{
    seteditId(e.id)
    setform({
      name:e.name,
      age:e.age,
      aadhar:e.aadhar,
      city:e.city,
      checkin:e.checkin,
      checkout:e.checkout,
      people:e.people
    })
  }

  return (
    <div className="page">
      <h1>data show page</h1>

      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>city</th>
            <th>aadhar</th>
            <th>checkin</th>
            <th>checkout</th>
            <th>people</th>
            <th>cancel</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id} className="table-row">
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.city}</td>
              <td>{e.aadhar}</td>
              <td>{e.checkin}</td>
              <td>{e.checkout}</td>
              <td>{e.people}</td>
              <td onClick={() => datadelete(e.id)} style={{ cursor: "pointer", color: "red" }}>
                Delete
              </td>
              <td onClick={() => formopen(e)} style={{ cursor: "pointer", color: "blue" }}>
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <form onSubmit={handlesubmit} className="edit-form">
          enter name: <input type="text" name="name" value={form.name} onChange={handlechange} /><br /><br />
          enter age: <input type="text" name="age" value={form.age} onChange={handlechange} /><br /><br />
          enter aadhar: <input type="text" name="aadhar" value={form.aadhar} onChange={handlechange} /><br /><br />

          select city
          <select name="city" value={form.city} onChange={handlechange}>
            <option value="bhopal">bhopal</option>
            <option value="indore">indore</option>
            <option value="jabalpur">jabalpur</option>
            <option value="satna">satna</option>
          </select><br /><br />

          enter checkin: <input type="date" name="checkin" value={form.checkin} onChange={handlechange} /><br /><br />
          enter checkout: <input type="date" name="checkout" value={form.checkout} onChange={handlechange} /><br /><br />
          enter people: <input type="text" name="people" value={form.people} onChange={handlechange} /><br /><br />

          <button type="submit">Save data</button>
        </form>
      )}
    </div>
  )
}

export default on
