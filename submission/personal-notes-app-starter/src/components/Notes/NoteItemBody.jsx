import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; //? define react-route link
import { showFormattedDate } from '../../utils/index';

function NoteItemBody({ title, createdAt, body }) {
    const formattedDate = showFormattedDate(createdAt);
    return (
        <div className="cardContent">
            <div className="cardInfo">
                <Link className="cardTitle">{title}</Link>
                <h6 className="cardSubTitle">{formattedDate}</h6>
                <p className="cardText">{body}
                </p>
            </div>
        </div>
    );
}

//? set validation props
NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;