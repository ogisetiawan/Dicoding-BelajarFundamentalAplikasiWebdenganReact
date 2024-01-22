import React from "react";
import PropTypes from 'prop-types';
import { HiOutlineSearch } from "react-icons/hi";

function SearchForm({keyword, keywordChange}) {
  return (
    <form className="search" role="search">
      <input type="search" name="search" placeholder="Search" value={keyword} onChange={(event) => keywordChange(event.target.value)} />
     <HiOutlineSearch />
    </form>
    
  );
}

SearchForm.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchForm;
