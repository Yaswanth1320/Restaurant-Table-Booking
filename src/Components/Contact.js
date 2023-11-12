import React from 'react'
import './Styles/Contact.css'
import line from './images/line.png'
import black from './images/black.png'

function Contact() {
  return (
    <>
    <div className='contact-heading'>
      <h1>Contact Us</h1>
      <img src={line} alt="line" className="reddash" />
    </div>
    <div className="contact-middle">
      <div className="join">
          <div className="join-content">
            <h2>join us</h2>
            <h1>Opening Hours</h1>
            <img src={black} alt="dash" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua ut enim ad minim veniam, quis nostrud.</p>
          </div>
          <div className="timings">
            <h3>Restaurant.............13:00 - 23:00</h3>
            <h3>Bar..........................14:00 - 02:30</h3>
            <h3 style={{'color':"#eb5058"}}>Sunday & Monday​............Closed</h3>
          </div>
      </div>
      <div className="contact">
            <div className="contact-content">
              <h2>contact</h2>
              <h1>Come And See Us</h1>
              <img src={black} alt="dash" />
              <p>Address</p>
              <h3>13 Fifth Avenue, New York</h3>
            </div>
            <div className="extra">
              <p>You Can Reach Us At</p>
              <h1>+1 910-626-85255</h1>
              <p>Email</p>
              <h2>Retro@example.com</h2>
            </div>
      </div>
      <img src={line} alt="line" className="reddash" />
    </div>
    <div className="contact-form">
      <h2>get in touch</h2>
      <h1>Send Us A Message</h1>
      <img src={black} alt="dash" />
      <div className="form">
        <input type="text" name="name" id="name" placeholder='Name' /><br />
        <input type="email" name='email' id='email' placeholder='Email Address' /><br />
        <textarea name="message" id="msd" cols="30" placeholder='Message' rows="7"></textarea>
      </div>
      <button>Send Message</button>
      <img src={line} alt="line" className="reddash" />
    </div>
    <div className="contact-last">
    <img src={line} alt="line" className="reddash" />
    </div>
    </>
  )
}

export default Contact