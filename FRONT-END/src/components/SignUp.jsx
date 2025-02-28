import React, { useState } from "react";
import "./SignUp.css";
import {Link } from "react-router-dom";
import axios from 'axios'

import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(res => {console.log(res)
            navigate('/SignIn')
        })
        .catch(err => console.log(err))  
    }

    
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "4rem" }}
      >
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1 className="justify-self-start">Sign Up</h1>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter username"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success my-4" style={{width: "100%"}}>Submit</button>
          <small style={{color: "gray"}}>Already have an account <Link to="/SignIn" style={{color: "green"}}> Sign in</Link></small>
        </form>
      </div>
    </>
  );
};

export default SignUp;
