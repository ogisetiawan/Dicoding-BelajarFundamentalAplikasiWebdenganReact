import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom'; //? react router
import ContactApp from './components/ContactApp';

// styling
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
 //? set route browserRouter
root.render(
    <BrowserRouter>
     <ContactApp />
   </BrowserRouter>
);