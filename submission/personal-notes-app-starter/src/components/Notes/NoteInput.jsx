import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlinePlus } from "react-icons/hi";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //? inisialisasi state
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state); //? passing to addPage and local-data
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
        <div
          className="add-new-page__input__body"
          contentEditable={true}
          data-placeholder="Description.."
          value={this.state.body}
          onInput={this.onTagChangeEventHandler}
        ></div>
        <button type="submit" className="btn btn-primary" onClick={this.onSubmitEventHandler}>
        <HiOutlinePlus /> Save
        </button>
      </div>
    )
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
