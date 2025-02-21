import React from "react";
import "./SignUp.css";
import { Outlet, Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "4rem" }}
      >
        <form className="sign-up-form">
          <h1 className="justify-self-start">Sign Up</h1>
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
            <label for="userEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
          <small style={{color: "gray"}}>Already have an account <Link to="/SignIn" style={{color: "green"}}> Sign in</Link></small>
        </form>
      </div>
    </>
  );
};

export default SignUp;
