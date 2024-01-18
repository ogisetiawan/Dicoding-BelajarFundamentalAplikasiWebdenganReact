import React from "react";
import { Route, Routes } from 'react-router-dom';

// import NoteList from './NoteList';
import HomePage from '../../pages/HomePage';
import AddPage from '../../pages/AddPage';
import ArchivePage from '../../pages/ArcivesPage';


function NoteApp() {
    return <main>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/add" element={<AddPage />} />
    </Routes>
  </main>;
}

export default NoteApp;
