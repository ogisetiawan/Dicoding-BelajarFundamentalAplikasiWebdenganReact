import React from "react";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineArchive } from "react-icons/hi";

function SearchForm() {
    return <nav className="menu">
        <ul className="menu-bar">
            <li><a className="nav-link" href="/"><HiOutlineViewList /> List</a></li>
            <li><a className="nav-link" href="/"><HiOutlineArchive /> Archives</a></li>
        </ul>
    </nav>;
}

export default SearchForm;
