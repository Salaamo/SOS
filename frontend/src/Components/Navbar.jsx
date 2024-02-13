import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h1>Logo</h1>
      <div className="d-flex align-items-center justify-content-between">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Services</p>
      </div>
      <div>
        <Link to="/sign-up">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
        <Link to="/sign-in">
          <button className="btn btn-secondary">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
