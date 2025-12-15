
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Service from './Service'
import Register from './Register'
import Login from './Login'
function App() {
  

  return (
    <>
     <Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>} />
    <Route path="service" element={<Service/>} />
    <Route path="register" element={<Register/>} />
    <Route path="login" element={<Login/>} />
  </Route>
</Routes>

    
   
    </>
  )
}

export default App
