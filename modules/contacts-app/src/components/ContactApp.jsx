import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';

//? class for initialize state
class ContactApp extends React.Component {

  constructor(props) {
    super(props);
    
    //? init state authedUser
    this.state = {
      authedUser: null,
      initializing: true, //? init dom
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  //? method for get userLogged and set data
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken); //? set to localstorage
    const { data } = await getUserLogged();
    this.setState(() => { //? set new state authedUser
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }


  render() {
    //? akalin glitch agar tidak render dom dlu 
    if (this.state.initializing) { //? is null
      return null;
    }
    //? if null back to login
    if (this.state.authedUser === null) {
      return (
        <div className='contact-app'>
          <header className='contact-app__header'>
            <h1>Aplikasi Kontak</h1>
          </header>
          <main>
            <Routes>
              {/* * any route to direct login page */}
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      )
    }

    //? home
    return (
      <div className="contact-app">
        <header className='contact-app__header'>
          <h1>Aplikasi Kontak</h1>
          {/* //? add state */}
          <Navigation logout={this.onLogout} name={this.state.authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}
 
export default ContactApp;