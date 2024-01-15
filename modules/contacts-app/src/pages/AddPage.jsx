import React from 'react';
import { addContact } from '../utils/data'; //? membawa data kontak baru yang hendak dimasukkan
import ContactInput from '../components/ContactInput';
import { useNavigate } from 'react-router-dom';


function AddPage() {
    const navigate = useNavigate();

    /// mendefinisikan event handler ketika tombol “submit” pada form diklik
    function onAddContactHandler(contact) {
        addContact(contact)
        navigate('/'); //? navigate setelah event addcontact
    }

    return (
        <section>
            <h2>Tambah kontak</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    )
}

export default AddPage;