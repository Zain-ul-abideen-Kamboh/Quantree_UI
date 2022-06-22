import React from "react";
import logo from "../.../../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link className="logo" to={"/"}>
            <img
              src={logo}
              alt="Quantree - Robo Advisor for Smart Investments"
            />
          </Link>
          <NavLink
            to={"/"}
            aria-expanded="false"
            data-bs-toggle="collapse"
            aria-controls="navTrigger"
            data-bs-target="#navTrigger"
            className="nav-trigger d-lg-none"
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </NavLink>
          <div className="navbar" id="navTrigger">
            <ul className="nav flex-column flex-lg-row align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  to={"/home"}
                  className="nav-link"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/how-it-works"} className="nav-link">
                  How it Works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/signup"} className="nav-link">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <Button className="btn btn-secondary">Invest</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
