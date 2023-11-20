import React, { useState } from "react";
import "./Styles/Signup.css";
import axios from 'axios'
import { Link } from "react-router-dom";
import  Loader from "./Spinner/Loader";
import Error from "./Spinner/Error";
import Success from "./Spinner/Success";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  async function register() {
    if(password===cpassword){
      const user = {
        name: name,
        email: email,
        password: password,
        cpassword: cpassword
      }
      try {
        setLoading(true)
        const result = (await axios.post("/api/users/signup",user)).data
        setLoading(false)
        setSuccess(true)
        console.log(result)

        setName("")
        setEmail("")
        setPassword("")
        setcPassword("")

      } catch (error) {
        console.log(error)
        setLoading(true)
        setError(true)
      }
    }
    else{
      alert("Passwords dont match")
    }
  }

  return (
    <div className="intial">
    {loading && (<Loader />)}
    {error && (<Error/>)}
    {success && (<Success message="Registration success"/>)}
    <div className="signup-container">
      <div className="style">
        <h1 className="back">Sign Up</h1>
        <div className="signup">
          <h1 className="heading">Signup</h1>
          {/* <p>More than <span>15000 customers </span> all over the world</p> */}
          <div className="form">
            <div className="ele">
              <i className="fa fa-user icon"></i>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                required
              />
            </div>
            <div className="ele">
              <i className="fa fa-envelope icon"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="ele">
              <i className="fa fa-key icon"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                required
              />
            </div>
            <div className="ele">
              <i className="fa fa-key icon"></i>
              <input
                type="password"
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
                placeholder="Conform Password"
                required
              />
            </div>
            <button className="sign-btn" onClick={register}>
              Sign Up
            </button>
            <p>or signup with</p>
            <div className="links">
              <Link to="/">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="/">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link to="/">
                <i className="fa-brands fa-google"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
