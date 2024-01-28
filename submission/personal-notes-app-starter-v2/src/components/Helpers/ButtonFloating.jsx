import React from "react";
import PropTypes from "prop-types";

function ButtionFloating({ title, onClick, icon }) {
  return (
    <button className="btn btn-primary action" type="button" title={title} onClick={onClick}>
      {icon}
    </button>
  );
}

ButtionFloating.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired
};

export default ButtionFloating;
