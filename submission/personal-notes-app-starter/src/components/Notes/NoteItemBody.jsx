import React from 'react';
import PropTypes from 'prop-types';

function NoteItemBody({ title, createdAt, body }) {
    const createdDate = new Date(createdAt);

    const day = createdDate.getDate();
    const month = createdDate.toLocaleString('default', { month: 'long' });
    const year = createdDate.getFullYear();

    const formattedDate = `${day}, ${month} ${year}`;

    return (
        <div className="cardContent">
            <div className="cardInfo">
                <h5 className="cardTitle">{title}</h5>
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