import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";

function RegisterInput({ register }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("Password and password confirm must be same.");
    }

    register({
      name,
      email,
      password
    });
  };
  return (
    <div className="input-register">
      <form onSubmit={onSubmitHandler}>
        <label className="text-muted fw-semibold fs-6">{selectLanguage({ id: "Nama", en: "Name" })}</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label className="text-muted fw-semibold fs-6">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} autoComplete="new-email" />
        <label className="text-muted fw-semibold fs-6">{selectLanguage({ id: "Kata Sandi", en: "Password" })}</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} autoComplete="new-password" />
        <label className="text-muted fw-semibold fs-6">
          {selectLanguage({ id: "Konfirmasi Kata Sandi", en: "Confirm Password" })}
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          autoComplete="new-confirm-password"
        />
          <div className="d-grid">
          <button className="btn btn-primary" type="submit">{selectLanguage({ id: "Mendaftar", en: "Sign Up" })}</button>
        </div>
      </form>
    </div>
  );
}
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
};

export default RegisterInput;
