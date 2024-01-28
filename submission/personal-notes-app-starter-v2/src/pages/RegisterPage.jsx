import React from 'react';
import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../contexts/LocaleContext';
import { register } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const { selectLanguage } = React.useContext(LocaleContext);
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error, message } = await register(user);
    if (!error) {
      alert('User created successfully');
      navigate('/');
    }
  }

  return (
    <section className='register-page'>
      <h2 className='text-center'>{selectLanguage({ id: 'Mendafar', en: 'Sign Up' })}</h2>
      <h3 className='text-center text-muted fw-semibold fs-6'>{selectLanguage({ id: 'Silahkan daftar untuk mengakses', en: 'Please sign up to access' })}</h3>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {selectLanguage({ id: 'Sudah punya akun?', en: 'Already have an account?' })}{' '}
        <Link className="register-link" to='/'>{selectLanguage({ id: 'Login di sini', en: 'Login here' })}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
