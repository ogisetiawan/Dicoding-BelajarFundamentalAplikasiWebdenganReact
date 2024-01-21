import React from 'react';
import PropTypes from 'prop-types';

import NoteItemBody from './NoteItemBody';
import NoteAction from './NoteAction';

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, valueArchiveBtn }) {
    return (
        <div className="eachCard">
            <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
            <NoteAction id={id} onDelete={onDelete} onArchive={onArchive} valueArchiveBtn={valueArchiveBtn} />
        </div>
    );
}

//? set validation props
NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItem;