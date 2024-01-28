import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

function LoginInput({ login }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({
      email,
      password
    });
  };

  return (
    <div className="input-login">
      <form onSubmit={onSubmitHandler}>
        <label className="text-muted fw-semibold fs-6">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} autoComplete="new-email" />
        <label className="text-muted fw-semibold fs-6">{selectLanguage({ id: "Kata Sandi", en: "Password" })}</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} autoComplete="new-password" />
        <div className="d-grid">
          <button className="btn btn-primary" type="submit">{selectLanguage({ id: "Masuk", en: "Sign in" })}</button>
        </div>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginInput;
