
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Service'
import Register from './Register'
import Login from './Login'
import Booking from './Booking'
import BookingConfirm from './BookingConfirm'

function App() {
  

  return (
    <>
     <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="services" element={<Services/>} />
    <Route path="register" element={<Register/>} />
    <Route path="login" element={<Login/>} />
    <Route path="booking" element={<Booking/>} />
    <Route path="BookingConfirm" element={<BookingConfirm/>} />
  </Route>
</Routes>

    
   
    </>
  )
}

export default App
