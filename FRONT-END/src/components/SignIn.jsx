import React from 'react'
import './SignUp.css'
import { Outlet, Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {console.log(res)
            console.log("RES DATA = ", res.data)
            if(res.data === "Login Succesful") {
                navigate('/')
            }
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
          <h1 className="justify-self-start">Sign In</h1>
          <div className="form-group">
            <label htmlFor="userName">Email</label>
            <input
              type="email"
              className="form-control"
              id="userName"
              placeholder="Enter Email"
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
          <small style={{color: "gray"}}>Don't have an account <Link to="/SignUp" style={{color: "green"}}> Sign up</Link></small>
        </form>
      </div>
    </>
  )
}

export default SignIn
