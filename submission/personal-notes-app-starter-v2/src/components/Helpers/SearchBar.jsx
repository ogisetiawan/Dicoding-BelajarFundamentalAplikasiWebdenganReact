import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import { HiOutlineSearch } from "react-icons/hi";

function SearchBar({ keyword, keywordChange }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <section className="search">
      <input
        type="text"
        placeholder={selectLanguage({ id: "Cari ..", en: "Search .." })}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
      <HiOutlineSearch />
    </section>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
};

export default SearchBar;
