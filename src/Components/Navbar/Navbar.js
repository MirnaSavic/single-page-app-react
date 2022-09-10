import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/demo-logo.png"
import "./Navbar.css"


const Navbar = () => {
    return (
      <header>

        <div className='main-container'>
            <div className='logo-container'>
                <img src={logo} className="logo"/>
            </div>

            <nav>
                <div className='list'>
                    <NavLink exact to='/' className="listItem" activeClassName="activeItem">Home</NavLink>
                    <NavLink to='/about' className="listItem" activeClassName="activeItem">About</NavLink>
                    <NavLink to='/contact' className="listItem" activeClassName="activeItem">Contact</NavLink>
                    <NavLink to='/services' className="listItem" activeClassName="activeItem">Services</NavLink>
                    <NavLink to='/policy' className="listItem" activeClassName="activeItem">Policy</NavLink>
                </div>
            </nav>

            <div className='icons'>
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-phone"></i>
            </div>
           
        </div>

      </header>
    )
}

export default Navbar
