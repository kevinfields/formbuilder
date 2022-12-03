import React from 'react'

const SingleQuestionThumbnail = (props) => {

  
  return (
    <div className='s-q-thumbnail'>
      <div className='s-q-type'>{props.question.type}</div>
      <div className='s-q-text'>{props.question.text}</div>
      <button 
        className='remove-question-button'
        onClick={() => props.removeQuestion()}
      >
       Remove Question
      </button>
    </div>
  )
}

export default SingleQuestionThumbnail