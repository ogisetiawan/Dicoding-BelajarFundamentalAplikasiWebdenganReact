import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/Notes/NoteList';
// import { deleteContact, getContacts } from '../utils/data';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         contacts: getContacts(),//?create state
    //         keyword: props.defaultKeyword || '', //? isnull
    //     }

    //     this.onDeleteHandler = this.onDeleteHandler.bind(this);
    //     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this); //? bind onEvent
    // }

    // onDeleteHandler(id) {
    //     deleteContact(id);

    //     // update the contact state from data.js
    //     this.setState(() => {
    //         return {
    //             contacts: getContacts(),
    //         }
    //     });
    // }
    
    // onKeywordChangeHandler(keyword) {
    //     this.setState(() => {
    //         return {
    //             keyword,
    //         }
    //     });
    //     //? menyelaraskan nilai keyword yang berada di Search Bar dengan URL
    //     this.props.keywordChange(keyword);
    // }

    render() {
        // //? add condition by data state.contacts
        // const contacts = this.state.contacts.filter((contact) => {
        //     return contact.name.toLowerCase().includes(
        //         this.state.keyword.toLowerCase()
        //     );
        // });

        return (
            <>
                <h2 className="sixth">Active Notes</h2>
                <section>
                    {/* <NoteList contacts={contacts} onDelete={this.onDeleteHandler} /> */}
                    <NoteList />
                </section>
            </>
        )
    }
}

export default HomePageWrapper;