import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function NoteList({ notes }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <>
      {notes?.length > 0 ? (
        <section className='allCardsContainer'>
          {notes.map(({ id, title, body, createdAt }) => (
            <NoteItem key={id} id={id} title={title} body={body} createdAt={createdAt} />
          ))}
        </section>
      ) : (
        <section className='alert alert-warning'>
            {selectLanguage({ id: 'Ups, Catatan tidak ditemukan!', en: 'Oops, Notes not found!' })}
        </section>
      )}
    </>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NoteList;
