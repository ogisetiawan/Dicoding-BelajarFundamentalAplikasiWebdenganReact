import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function SearchForm() {
  return (
    <form className="search" role="search">
      <input type="search" name="search" placeholder="Search" />
     <HiOutlineSearch />
    </form>
  );
}

export default SearchForm;
