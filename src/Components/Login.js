import React,{useState} from 'react'
import './Styles/Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from './Spinner/Loader';
import Error from './Spinner/Error';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function login(){
    const user = {
      email: email,
      password: password
    }
    try {
      setLoading(true)
      const result = (await axios.post("/api/users/login",user)).data
      setLoading(false)
      localStorage.setItem('currentUser', JSON.stringify(result))
      window.location.href= '/book'

      console.log(result)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
    }
  }

  return (
    <div className='intial'>
    {loading && (<Loader />)}
    {error && (<Error message="Invalid Username or Password"/>)}
    <div className='login-container'>
      <div className="style">
        <h1 className='back'>Login</h1>
        <div className='login'>
          <h1 className='heading'>Login</h1>
          {/* <p>More than <span>15000 customers </span> all over the world</p> */}
          <div className="form">
            <div className='ele'><i className="fa fa-envelope icon"></i><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' /></div>
            <div className='ele'><i className="fa fa-key icon"></i><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='New Password' /></div>
            <button className='log-btn' onClick={login}>LogIn</button>
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
    </div>
  )
}

export default Login
