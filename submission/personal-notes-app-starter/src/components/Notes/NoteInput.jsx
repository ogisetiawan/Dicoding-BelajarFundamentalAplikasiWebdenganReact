import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineSave } from "react-icons/hi";
import ContentEditable from 'react-contenteditable';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onTagChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state); // Passing to addPage and local-data
  }

  render() {
    return (
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Title.."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <ContentEditable
          className="add-new-page__input__body"
          html={this.state.body}
          onChange={this.onTagChangeEventHandler}
          data-placeholder="Description.."
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmitEventHandler}
        >
          <HiOutlineSave /> Save
        </button>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
