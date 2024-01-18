import React from 'react';
// import { addContact } from '../utils/data'; //? membawa data kontak baru yang hendak dimasukkan
// import ContactInput from '../components/ContactInput';
import { useNavigate } from 'react-router-dom';


function AddPage() {
    const navigate = useNavigate();

    /// mendefinisikan event handler ketika tombol “submit” pada form diklik
    function onAddContactHandler(contact) {
        addContact(contact)
        navigate('/'); //? navigate setelah event addcontact
    }

    return (
        <>
            <h2 className="sixth">Add Notes</h2>
            <section>
                {/* <ContactInput addContact={onAddContactHandler} /> */}
            </section>
        </>
    )
}

export default AddPage;