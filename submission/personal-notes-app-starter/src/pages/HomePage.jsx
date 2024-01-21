import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/Notes/NoteList';
import { getAllNotes } from '../utils/local-data';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),//?create state
            keyword: props.defaultKeyword || '', //? isnull
        }

        //? bind onEvent
        // this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

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

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        //? menyelaraskan nilai keyword yang berada di Search Bar dengan URL
        this.props.keywordChange(keyword);
    }

    render() {
        //? add condition by data state.contacts
        const notes = this.state.notes.filter((notes) => {
            return notes.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        //? passing active notes
        return (
            <>
                <h2 className="sixth">Active Notes</h2>
                <section>
                    <NoteList notes={notes} />
                </section>
            </>
        )
    }
}

export default HomePageWrapper;