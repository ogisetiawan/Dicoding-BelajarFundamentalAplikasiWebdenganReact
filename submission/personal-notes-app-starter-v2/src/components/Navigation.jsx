import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { Link } from "react-router-dom";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineArchive } from "react-icons/hi";
import { HiOutlineTranslate } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";

function Navigation({ logout, name }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { toggleLocale, selectLanguage } = React.useContext(LocaleContext);
  return (
    <div className="container">
      <div className="nav-start">
        <div class="thirteen">
          <h1 className="logo">
            {selectLanguage({ id: "Aplikasi Catatan Pribadi", en: "Personal Notes Apps" })}
          </h1>
        </div>
      </div>
      <div className="nav-end">
        <div className="right-container">
          {logout !== undefined && (
            <nav className="menu">
              <ul className="menu-bar">
                <li><Link className="nav-link" to="/"><HiOutlineViewList /> {selectLanguage({ id: "Aktif", en: "Active" })}</Link></li>
                <li><Link className="nav-link" to="/archives"><HiOutlineArchive /> {selectLanguage({ id: "Arsip", en: "Archives" })}</Link></li>
                |
              </ul>
            </nav>
          )}
          <button className="nav-button" onClick={toggleLocale} title="Translate"> <HiOutlineTranslate /></button>
          <button className="nav-button" onClick={toggleTheme} title="Theme">
            {theme === "light" ? <HiOutlineMoon /> : <HiOutlineSun />}
          </button>
          {logout !== undefined && (
            <button className="btn btn-primary" onClick={logout} title="Logout">
              <span className="ml">Hi, {name}</span>  <HiOutlineLogout />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string
};

export default Navigation;
