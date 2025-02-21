import React from 'react'
import './SignUp.css'
import { Outlet, Link} from 'react-router-dom'
const SignIn = () => {
  return (
    <>
    <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "4rem" }}
      >
        <form className="sign-up-form">
          <h1 className="justify-self-start">Sign In</h1>
          <div className="form-group">
            <label for="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label for="userPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              placeholder="Password"
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
