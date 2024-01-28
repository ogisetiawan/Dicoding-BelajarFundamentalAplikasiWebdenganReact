import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { login } from "../utils/network-data";

function LoginPage({ loginSuccess }) {
  const { selectLanguage } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2 className="text-center">{selectLanguage({ id: "Masuk", en: "Sign in" })}</h2>
      <h3 className="text-center text-muted fw-semibold fs-6">{selectLanguage({ id: "Silahkan masuk untuk mengakses", en: "Please log in to access" })}</h3>
      <LoginInput login={onLogin} />
      <p>
        {selectLanguage({ id: "Belum menjadi anggota?", en: "Not a Member yet?" })}{" "}
        <Link className="register-link" to="/register">{selectLanguage({ id: "Daftar di sini", en: "Register here" })}</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
};

export default LoginPage;
