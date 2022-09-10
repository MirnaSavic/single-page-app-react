import React from 'react'
import "./style/footer.css"


const Footer = () => {
  return (
    <div className='footer-container'>
     <div className='icons'>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin"></i>
     </div>

     <div className='line'>
      <hr/>
     </div>

     <div className='copyright'>
      <p>All Rights Reserved &copy;</p>
      <p>Made by Mirna</p>
     </div>
    </div>
  )
}

export default Footer
