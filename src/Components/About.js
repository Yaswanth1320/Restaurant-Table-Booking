import React from 'react'
import './Styles/About.css'
import line from './images/line.png'
import about1 from './images/about1.png'
import black from './images/black.png'

function About() {
  return (
    <>
      <div className="about-header">
        <h1>About</h1>
        <img src={line} alt="line" className="reddash" />
      </div>
      <div className='features'>
        <img src={about1} alt="about" />
        <div className="about-us">
          <h2>honest, flavorful food</h2>
          <h1>A Few Words About Our Restaurants</h1>
          <img src={black} alt="dash" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut 
             aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
             ccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
             id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
        </div>
        <img src={line} alt="line" className="reddash" />
      </div>
      <div className="middle">
      <img src={line} alt="line" className="reddash" />
      </div>
      <div className='features'>
        <div className="about-us">
          <h2>pull up a chair</h2>
          <h1>Our Story And How It All Started</h1>
          <img src={black} alt="dash" />
          <p>Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
             totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
              <p style={{"margin":"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
                 </p>
        </div>
        <img src={line} alt="line" className="reddash" />
      </div>
      <div className="last">
      <img src={line} alt="line" className="reddash" />
      </div>
    </>
  )
}

export default About
