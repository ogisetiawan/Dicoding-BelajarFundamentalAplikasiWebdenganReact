import React from 'react';
import Navigation from './Navigation';
import SearchForm from './SearchForm';
import { HiOutlinePlus } from "react-icons/hi";

function Navbar() {
  return (
    <header id="nav-menu" aria-label="navigation bar">
      <div className="container">
        <div className="nav-start">
          <h2 className="logo">
            Personal Notes Apps
          </h2>
          <Navigation />
        </div>

        <div className="nav-end">
          <div className="right-container">
            <SearchForm />
            <button className="btn btn-primary"><HiOutlinePlus /> Create</button>
          </div>
          <button id="hamburger" aria-label="hamburger" aria-haspopup="true" aria-expanded="false">
            <i className="bx bx-menu" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
 
export default Navbar;