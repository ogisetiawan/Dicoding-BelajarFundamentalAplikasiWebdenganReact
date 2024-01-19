import React from 'react';
import Navbar from './components/Header/Navbar';
import NoteApp from './components/Notes/NoteApp';
import FooterApp from './components/Footer/FooterApp';

//? call component
function App() {
  return (
    <>
      <Navbar />
      <NoteApp />
      <FooterApp />
    </>
  );
}

export default App;