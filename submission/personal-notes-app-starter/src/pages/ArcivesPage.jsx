import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/Notes/NoteList';
import SearchForm from '../components/Header/SearchForm';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data';

function ArvhivesPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArvhivesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class ArvhivesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),//?create state
            keyword: props.defaultKeyword || '', //? isnull
        }

        //? bind onEvent
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        });
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        });
    }
    

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
        //? add condition data notes keyword + archived=false
        const notes = this.state.notes.filter((note) => {
            return (
              note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
            );
          });

        const valArvhive = 'UnArchive'

        return (
            <>
                <h2 className="sixth">Archive Notes</h2>
                <section>
                    <SearchForm keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onUnarchiveHandler} valueArchiveBtn={valArvhive}/>
                </section>
            </>
        )
    }
}

export default ArvhivesPageWrapper;