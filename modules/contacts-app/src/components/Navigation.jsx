import React from 'react';
import { Link } from 'react-router-dom'; //? define react-route link
import { FcPlus, FcHome} from "react-icons/fc";


function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FcHome /></Link></li>
        <li><Link to="/add"><FcPlus /></Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;