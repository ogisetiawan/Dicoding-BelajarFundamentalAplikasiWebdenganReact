import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

function NoteAction({ id, onDelete, onArchive, valueArchiveBtn}) {
    return <div className="userActions">
        <button className="btn-secondary" onClick={() => onArchive(id)}>
            <HiOutlineBookmark /> {valueArchiveBtn}
        </button>
        <button className="btn-danger" onClick={() => onDelete(id)}>
            <HiOutlineTrash /> Delete
        </button>
    </div>
}

NoteAction.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    valueArchiveBtn: PropTypes.string.isRequired,
}

export default NoteAction;