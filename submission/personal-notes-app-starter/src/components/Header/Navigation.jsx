import React from "react";
import { Link } from 'react-router-dom'; //? define react-route link
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineArchive } from "react-icons/hi";

function Navigation() {
    return <nav className="menu">
        <ul className="menu-bar">
            <li><Link className="nav-link" to="/"><HiOutlineViewList /> Active</Link></li>
            <li><Link className="nav-link" to="/archives"><HiOutlineArchive /> Archives</Link></li>
        </ul>
    </nav>;
}

export default Navigation;
