import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
import { Favorite } from "@mui/icons-material";

const Nav = () => {
  return (
    <div className='Nav'>
      <div className="img">
        IMG
      </div>
      <div className="links">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/fav'><Favorite /></NavLink>
      </div>
    </div>
  )
}

export default Nav