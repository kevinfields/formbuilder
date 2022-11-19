import React from 'react'

const SingleQuestionThumbnail = (props) => {
  return (
    <div className='s-q-thumbnail'>
      <h5>{props.question.qType}</h5>
      <p>{props.question.qText}</p>
    </div>
  )
}

export default SingleQuestionThumbnail