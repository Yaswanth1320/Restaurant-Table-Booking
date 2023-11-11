import React from 'react'
import './Styles/Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-container'>
      <div className="style">
        <h1 className='back'>Login</h1>
        <div className='login'>
          <h1 className='heading'>Login</h1>
          {/* <p>More than <span>15000 customers </span> all over the world</p> */}
          <div className="form">
          <div className='ele'><i class="fa fa-user icon"></i><input type="text" className='name' placeholder='Username' /></div>
            <div className='ele'><i class="fa fa-envelope icon"></i><input type="email" className='email' placeholder='Enter Email Address' /></div>
            <div className='ele'><i class="fa fa-key icon"></i><input type="password" className='pass' placeholder='New Password' /></div>
            <button className='log-btn'>LogIn</button>
            <Link to='/signup'>Signup here</Link>
            <p>or Login with</p>
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

export default Login
