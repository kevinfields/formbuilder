import React from 'react'

const QuestionSlot = (props) => {

  let responseBox = props.question.type;

  return (
    <div className='question-slot'>
      <h5 className='question-title'>{props.question.text}</h5>
      {responseBox === 'text' ?
        <input
          type='text'
          className='response-box-text'
        >

        </input>
      : responseBox === 'numerical' ?
        <input
          type='number'
          className='response-box-number'
        >

        </input>
      : responseBox === 'radio' ?
        <select
          className='response-box-radio'
        >
          {props.question.options.list.map((opt, key) => {
            <option value={opt} key={key}>{opt}</option>
          })}
        </select>
      : responseBox === 'checklist' ?
        props.question.options.list.map((opt, key) => (
          <>
          <div className='checklist-label'>{opt}</div>
          <input 
            type='checkbox' 
            value={opt}
            key={key}
          >
            
          </input>
          </>
        ))
      : null
      }
    </div>
  )
}

export default QuestionSlot