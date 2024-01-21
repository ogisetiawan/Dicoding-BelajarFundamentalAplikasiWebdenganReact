import React from "react";
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, valueArchiveBtn, onDelete, onArchive}) {
  return (
    <div className="allCardsContainer">
    {
        notes.map((note) => (
          <NoteItem 
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          valueArchiveBtn={valueArchiveBtn}
          {...note} />
        ))
      }
    </div>
  );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
  }

export default NoteList;
