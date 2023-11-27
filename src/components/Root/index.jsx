import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./nav.css"

const Root = () => {
  return (
    <>
     <ul className="nav">
      <li className="nav-item">
      <Link to="/"> About </Link> 
      </li>
      <li className="nav-item">
      <Link to="/contact"> Contact </Link>
      </li>
      <li className="nav-item">
      <Link to="/projects"> Projects </Link>
      </li>
      <li className="nav-item">
      <Link to="/resume"> Resume </Link>
      </li>
     </ul>

     <div>
      <Outlet />
     </div>
   </>
  )
}

export default Root
