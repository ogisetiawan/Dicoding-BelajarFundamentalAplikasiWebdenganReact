import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import parser from 'html-react-parser';

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{formattedDate}</p>
      <div className="detail-page__body">{parser(note.body)}</div>
    </section>
  )
}

export default DetailPage;