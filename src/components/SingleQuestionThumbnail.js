import React from 'react'

const SingleQuestionThumbnail = (props) => {

  console.log('new question: ' + JSON.stringify(props.question));
  return (
    <div className='s-q-thumbnail'>
      <h5 className='s-q-type'>{props.question.type}</h5>
      <p className='s-q-text'>{props.question.text}</p>
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