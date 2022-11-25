import React from 'react'

const SingleQuestionThumbnail = (props) => {

  
  return (
    <div className='s-q-thumbnail'
      onClick={() => console.log(JSON.stringify(props.question))}
    >
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