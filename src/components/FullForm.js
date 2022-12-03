import React from 'react';
import QuestionSlot from './QuestionSlot';

const FullForm = (props) => {
  return (
    <div>
      {props.form.map((q, key) => (
        <QuestionSlot 
          question={q} 
          key={key} 
        />
      ))}
    </div>
  )
}

export default FullForm