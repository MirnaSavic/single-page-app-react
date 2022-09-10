import React from 'react'
import {NavLink} from "react-router-dom"
import aboutImg from "../images/network.png"
import "../style/home&about.css"

const About = () => {
  return (
    <div className='main-section2'>
      <div className='contentBox'>
        <h1>Know More About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique mollitia, animi consequatur amet vel minus ipsam deserunt a eius nostrum, fugit commodi. Error sequi ipsa porro velit magnam, numquam commodi. Sit amet consectetur adipisicing elit.</p>
        <div className='btnBox'>
          <div className='btn2'>
          <NavLink exact to='/' className="Read-More" >Know More</NavLink>
          </div>
        </div>
      </div>

      <div className='img-container'>
        <img src={aboutImg} alt='aboutUs'/>
      </div>
    </div>
  )
}

export default About
