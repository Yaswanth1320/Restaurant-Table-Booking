import React from 'react'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="contact">
            <h2>Retro</h2>
            <p>Resturant</p>
            <h3>You Can Reach Us At</h3>
            <h1>+91 123 456 7890</h1>
      </div>
      <div className="address">
        <h3>Address</h3>
        <p>13 Fifth Avenue, New York</p>
        <div className="social">
            <Link to='/'><i className="fa-brands fa-facebook"></i></Link>
            <Link to='/'><i className="fa-brands fa-twitter"></i></Link>
            <Link to='/'><i className="fa-brands fa-google"></i></Link>
        </div>
      </div>
      <div className="copyrights">
        <h2>Copyright © 2023 Retro Restaurant</h2>
        <h2>Powered by Retro Restaurant</h2>
      </div>
    </div>
  )
}

export default Footer
