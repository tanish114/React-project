import React from 'react'
import {Outlet,Link} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <header>
        <ul>
            <li> <Link to={"/"}>Home </Link> </li>
            <li> <Link to={"about"}>About </Link> </li>
            <li> <Link to={"service"}>service </Link> </li>
            <li> <Link to={"Register"}>Register </Link> </li>
            <li> <Link to={"login"}>Login </Link> </li>
            {/* <Route path='*' element={<h1>Error</h1>} /> */}
        </ul>
    </header>
    <hr />
    <Outlet/>
    <hr />

    <hr />
    <h1>this is footer</h1>
    <hr />
    


     </> 
  )
}

export default Layout
