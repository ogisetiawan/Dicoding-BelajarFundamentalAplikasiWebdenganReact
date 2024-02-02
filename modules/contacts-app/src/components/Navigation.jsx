import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; //? define react-route link
import { FcPlus, FcHome, FcRight } from "react-icons/fc";


function Navigation({logout, name}) {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FcHome /></Link></li>
        <li><Link to="/add"><FcPlus /></Link></li>
        <li><button onClick={logout}>{name} <FcRight /></button></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;