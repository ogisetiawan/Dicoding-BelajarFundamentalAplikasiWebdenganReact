import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/Notes/NoteList';
import SearchForm from '../components/Header/SearchForm';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';

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
            notes: getActiveNotes(),//?create state
            keyword: props.defaultKeyword || '', //? isnull
        }

        //? bind onEvent
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            }
        });
    }

    onArchiveHandler(id) {
        archiveNote(id);
        console.log(id)

        this.setState(() => {
            return {
                notes: getActiveNotes(),
            }
        });
    }


    onKeywordChangeHandler(keyword) {
        console.log(keyword)
        this.setState(() => {
            return {
                keyword,
            }
        });
        //? menyelaraskan nilai keyword yang berada di Search Bar dengan URL
        this.props.keywordChange(keyword);
    }

    render() {
        //? add condition data notes keyword + archived=false
        const notes = this.state.notes.filter((note) => {
            return (
                note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
            );
        });

        const valArvhive = 'Archive'

        return (
            <>
                <h2 className="sixth">Active Notes</h2>
                <section>
                    <SearchForm keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} valueArchiveBtn={valArvhive} />
                </section>
            </>
        )
    }
}


HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func
}


export default HomePageWrapper;