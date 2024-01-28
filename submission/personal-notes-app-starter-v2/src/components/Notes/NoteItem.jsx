import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import LocaleContext from "../../contexts/LocaleContext";
import { showFormattedDate } from "./../../utils/index";
import { Link } from "react-router-dom";

function NoteItem({ id, title, body, createdAt }) {
  const { selectLanguage } = React.useContext(LocaleContext);
  return (
    <div className="eachCard">
       <div className="cardContent">
          <div className="cardInfo">
              <Link to={`/notes/${id}`} className="cardTitle">{title}</Link>
              <h6 className="cardSubTitle">{selectLanguage({ id: showFormattedDate(createdAt, "id-ID"), en: showFormattedDate(createdAt, "en-US") })}</h6>
              <span className="cardText">{parser(body)}</span>
          </div>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NoteItem;
