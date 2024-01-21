import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";

function NoteAction({ id, onDelete}) {
    return <div className="userActions">
        <button className="btn-secondary" onClick={() => onDelete(id)}>
            <HiOutlineBookmark /> Archives
        </button>
        <button className="btn-danger" onClick={() => onDelete(id)}>
            <HiOutlineTrash /> Delete
        </button>
    </div>
}

NoteAction.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteAction;