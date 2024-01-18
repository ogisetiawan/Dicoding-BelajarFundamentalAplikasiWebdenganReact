import React from 'react';
// import { addContact } from '../utils/data'; //? membawa data kontak baru yang hendak dimasukkan
// import ContactInput from '../components/ContactInput';
import { useNavigate } from 'react-router-dom';


function ArchivesPage() {
    const navigate = useNavigate();

    /// mendefinisikan event handler ketika tombol “submit” pada form diklik
    function onAddContactHandler(contact) {
        addContact(contact)
        navigate('/'); //? navigate setelah event addcontact
    }

    return (
        <>
            <h2 className="sixth">Archive Notes</h2>
            <section>
            {/* <ContactInput addContact={onAddContactHandler} /> */}
            </section>
        </>
    )
}

export default ArchivesPage;