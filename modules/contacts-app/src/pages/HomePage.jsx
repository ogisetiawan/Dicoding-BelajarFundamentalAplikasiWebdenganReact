import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
// import { deleteContact } from '../utils/data';
import { getContacts, deleteContact } from '../utils/api'; //? get contact by id login

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
            contacts: [],
            keyword: props.defaultKeyword || '', //? isnull
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this); //? bind onEvent
    }

    //? lifecycle componentDidMount
    async componentDidMount() {
        const { data } = await getContacts();
        this.setState(() => {
            return {
                contacts: data
            }
        })
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

    async onDeleteHandler(id) {
        await deleteContact(id);
     
        // update the contact state from data.js
        const { data  } = await getContacts();
        this.setState(() => {
          return {
            contacts: data,
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
        //? add condition by data state.contacts
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <section>
                {/* //? call component searchBar */}
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Kontak</h2>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default HomePageWrapper;