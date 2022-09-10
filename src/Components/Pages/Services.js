import React from 'react'
import img1 from "../images/boicu-andrei-LgJsrwAYU8k-unsplash.jpg"
import img2 from "../images/boicu-andrei-YtDIYzUAG9Q-unsplash.jpg"
import { NavLink } from 'react-router-dom'
import "../style/services.css"

const Services = () => {
  return (
    <div className='container'>

      <h1>Our Services</h1>

      <div className='service-container'>

        <div className='services'>
          <h3>Web Development</h3>
          <img src={img1} alt="computer-img" className='images'/>
          <p>Similique mollitia, animi consequatur amet vel minus ipsam deserunt a eius nostrum, fugit commodi.</p>
          <div className='btn'>
            <NavLink exact to="/" className="startLearning">Start Learning</NavLink>
          </div>
        </div>


        <div className='services'>
          <h3>Front End Design</h3>
          <img src={img2} alt="computer-img" className='images'/>
          <p>Similique mollitia, animi consequatur amet vel minus ipsam deserunt a eius nostrum, fugit commodi.</p>
          <div className='btn'>
            <NavLink exact to="/" className="startLearning">Start Learning</NavLink>
          </div>
        </div>

        <div className='services'>
          <h3>Full Stack Development</h3>
          <img src={img1} alt="computer-img" className='images'/>
          <p>Similique mollitia, animi consequatur amet vel minus ipsam deserunt a eius nostrum, fugit commodi.</p>
          <div className='btn'>
            <NavLink exact to="/" className="startLearning">Start Learning</NavLink>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Services
