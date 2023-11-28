import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./nav.css"

const Root = () => {
  return (
    <>
     <ul className="nav">
      <li className="nav-item">
      <Link className="navy" to="/"> About </Link> 
      </li>
      <li className="nav-item">
      <Link className="navy" to="/contact"> Contact </Link>
      </li>
      <li className="nav-item">
      <Link className="navy"  to="/projects"> Projects </Link>
      </li>
      <li className="nav-item">
      <Link className="navy" to="/resume"> Resume </Link>
      </li>
     </ul>

     <div>
      <Outlet />
     </div>
   </>
  )
}

export default Root
