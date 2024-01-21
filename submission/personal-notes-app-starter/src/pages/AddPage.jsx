import React from 'react';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/Notes/NoteInput';
import { useNavigate } from 'react-router-dom';


function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/'); //? navigate setelah event addcontact
    }

    return (
        <>
            <h2 className="sixth">Create Notes</h2>
            <section>
                <NoteInput addNote={onAddNoteHandler} />
            </section>
        </>
    )
}

export default AddPage;