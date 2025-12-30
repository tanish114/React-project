import axios from "axios"
import React, { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

const on = () => {

  let [form, setform] = useState({
    name: "",
    age: "",
    aadhar: "",
    city: "",
    checkin: "",
    checkout: "",
    people: "",
  })

  let [data, setdata] = useState([])
  let [editId, seteditId] = useState(null)

  const pageRef = useRef(null)

  let fetchdata = () => {
    axios.get("http://localhost:3000/hotel").then((res) => {
      setdata(res.data)
    })
  }

  /* PAGE LOAD */
  useEffect(() => {
    fetchdata()

    gsap.from(pageRef.current, {
      opacity: 0,
      scale: 1.15,
      filter: "blur(40px)",
      duration: 1.4,
      ease: "expo.out"
    })
  }, [])

  /* TABLE ROW ANIMATION */
  useEffect(() => {
    gsap.from(".table-row", {
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out"
    })
  }, [data])

  /* EDIT FORM ANIMATION */
  useEffect(() => {
    if (editId) {
      gsap.from(".edit-form", {
        opacity: 0,
        scale: 0.7,
        y: 80,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)"
      })
    }
  }, [editId])

  let datadelete = (id) => {
    axios.delete(`http://localhost:3000/hotel/${id}`).then(() => {
      fetchdata()
    })
  }

  let handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  let handlesubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3000/hotel/${editId}`, { ...form, person: 500 })
      .then(() => {
        fetchdata()
        seteditId(null)
      })
  }

  let formopen = (e) => {
    seteditId(e.id)
    setform({
      name: e.name,
      age: e.age,
      aadhar: e.aadhar,
      city: e.city,
      checkin: e.checkin,
      checkout: e.checkout,
      people: e.people
    })
  }

  return (
    <div
      ref={pageRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          radial-gradient(circle at 20% 20%, #6366f1, transparent 40%),
          radial-gradient(circle at 80% 30%, #22d3ee, transparent 40%),
          radial-gradient(circle at 50% 80%, #a855f7, transparent 40%),
          linear-gradient(135deg,#020617,#0f172a)
        `
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          borderRadius: "20px",
          padding: "25px",
          width: "95%",
          maxWidth: "1200px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.15)"
        }}
      >
        <h2 style={{ color: "white", textAlign: "center" }}>
          ✨ Booking Data
        </h2>

        <table width="100%" border={2} style={{ color: "white" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Aadhar</th>
              <th>Checkin</th>
              <th>Checkout</th>
              <th>People</th>
              <th>Cancel</th>
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

                <td
                  onClick={() => datadelete(e.id)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Delete
                </td>

                <td
                  onClick={() => formopen(e)}
                  style={{ cursor: "pointer", color: "#38bdf8" }}
                >
                  Edit
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✨ STYLISH EDIT FORM */}
      {editId && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <form
            onSubmit={handlesubmit}
            className="edit-form"
            style={{
              width: "420px",
              padding: "30px",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
              display: "flex",
              flexDirection: "column",
              gap: "18px"
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "5px" }}>
              ✏️ Edit Booking
            </h3>
            <hr />

            <input name="name" placeholder="Name" value={form.name} onChange={handlechange} />
            <input name="age" placeholder="Age" value={form.age} onChange={handlechange} />
            <input name="aadhar" placeholder="Aadhar" value={form.aadhar} onChange={handlechange} />

            <select name="city" value={form.city} onChange={handlechange}>
              <option value="">Select City</option>
              <option>bhopal</option>
              <option>indore</option>
              <option>jabalpur</option>
              <option>satna</option>
            </select>

            <input type="date" name="checkin" value={form.checkin} onChange={handlechange} />
            <input type="date" name="checkout" value={form.checkout} onChange={handlechange} />
            <input name="people" placeholder="People" value={form.people} onChange={handlechange} />

            <button
              style={{
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(135deg,#6366f1,#22d3ee)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => seteditId(null)}
              style={{
                background: "none",
                border: "none",
                color: "#444",
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default on
