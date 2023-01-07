import React from 'react';
import '../styling/SingleQuestionThumbnail.css';

const SingleQuestionThumbnail = (props) => {

  
  return (
    <div className='s-q-thumbnail'>
      <div className='s-q-header-wrapper'>
        <button 
          className='remove-question-button'
          onClick={() => props.removeQuestion()}
        >
          Remove
        </button>
        <button
          className="edit-question-button"
          onClick={() => props.editQuestion()}
        >
          Edit
        </button>
        <div className='s-q-type'>{props.question.type !== 'none' ? props.question.type : ''}</div>
      </div>
      <div className='s-q-text'>{props.question.text}</div>
    </div>
  )
}

export default SingleQuestionThumbnail