import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success border-bottom border-secondary py-3">
      <div
        className="d-flex justify-content-between px-4"
        style={{ width: "100%" }}
      >
        <Link className="navbar-brand text-light fw-bold" to="/">
          Auction House
        </Link>
        <div className="search-item-div d-flex justify-content-center align-items-center bg-light" style={{width: "50%",  borderRadius: "20px"}}>
          <input
            type="text"
            className="px-3"
            id="searchItem"
            placeholder="Enter item to search"
            style={{ width: "93%", height: "40px", border: "none" }}
          />
          <FontAwesomeIcon icon={faSearch} style={{color: "green"}} />
        </div>
        <div id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Products Owned
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SignUp" className="text-light text-decoration-none">
                <button className="btn btn-success text-light fw-bold action-btn">
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SignIn" className="text-light text-decoration-none">
                <button className="btn btn-success text-light fw-bold action-btn">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
