import React from 'react'
import './Styles/Signup.css'
import {Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup-container'>
    <div className="style">
      <h1 className='back'>Sign Up</h1>
      <div className='signup'>
        <h1 className='heading'>Signup</h1>
        {/* <p>More than <span>15000 customers </span> all over the world</p> */}
        <div className="form">
            <div className='ele'><i class="fa fa-user icon"></i><input type="text" className='name' placeholder='Username' /></div>
            <div className='ele'><i class="fa fa-envelope icon"></i><input type="email" className='email' placeholder='Enter Email Address' /></div>
            <div className='ele'><i class="fa fa-key icon"></i><input type="password" className='pass' placeholder='New Password' /></div>
            <div className='ele'><i class="fa fa-key icon"></i><input type="password" className='conform' placeholder='Conform Password' /></div>
            <button className='sign-btn'>Sign Up</button>
            <p>or signup with</p>
            <div className='links'>
            <Link to='/'><i className="fa-brands fa-facebook"></i></Link>
            <Link to='/'><i className="fa-brands fa-twitter"></i></Link>
            <Link to='/'><i className="fa-brands fa-google"></i></Link>
            </div>
        </div>
    </div>
    </div>
  </div>
)
}

export default Signup
