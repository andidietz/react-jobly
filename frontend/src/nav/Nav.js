import React, {useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import UserContext from '../contexts/User'

const Nav = ({logout}) => {
  const {currentUser} = useContext(UserContext)
  
  const loggedInNav = () => {
    return (
      <ul>
        <li>
          <NavLink to='/companies'>
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink to='/jobs'>
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile'>
            Profile
          </NavLink>
        </li>
        <li>
          <Link to='/' onClick={logout}>
            Log out
          </Link>
        </li>
      </ul>
    )
  }

  const loggedOutNav = () => {
    return (
      <ul>
        <li>
          <NavLink to='/signup'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    )
  }

  return (
    <nav>
      {currentUser && currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  )
}

export default Nav