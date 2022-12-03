import React from 'react'
import '../styling/QuestionSlot.css';

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
      : responseBox === 'number' ?
        <input
          type='number'
          className='response-box-number'
        >

        </input>
      : responseBox === 'radio' ?
        <select
          className='response-box-radio'
        >
          {props.question.options.list.map((opt, key) => (
            <>
              <div className='radio-label'>{opt}</div>
              <option value={opt} key={key}>{opt}</option>
            </>
          ))}
        </select>
      : responseBox === 'checklist' ?
      <div className='checklist-flex'>
        {props.question.options.list.map((opt, key) => (
          <div className='checklist-label'> 
          <div>{opt}</div>
            <input 
              type='checkbox' 
              value={opt}
              key={key}
            >
            </input>
            
          </div>
        ))}
        </div>
      : null
      }
    </div>
  )
}

export default QuestionSlot