import React from 'react'
import {NavLink} from "react-router-dom"
import homeImg from "../images/home2.png"
import "../style/home&about.css"

const Home = () => {
  return (
    <div className='main-section'>
      <div className='contentBox'>
        <h1>Learning made Easy</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique mollitia, animi consequatur amet vel minus ipsam deserunt a eius nostrum, fugit commodi. Error sequi ipsa porro velit magnam, numquam commodi.</p>
        <div className='btnBox'>
          <div className='btn'>
          <NavLink exact to='/' className="Read-More" >Read More</NavLink>
          </div>
        </div>
      </div>

      <div className='img-container'>
        <img src={homeImg} alt='home'/>
      </div>
    </div>
  )
}

export default Home
