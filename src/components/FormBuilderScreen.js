import React, {useState, useEffect} from 'react';
import "../styling/FormBuilder.css";

const FormBuilderScreen = (props) => {

  const [qType, setQType] = useState('text');
  const [qText, setQText] = useState('');

  const submitQuestion = () => {
    if (window.confirm('Are you sure?')) {
      props.submitQuestion(qType, qText);
    };
  };

  return (
    <div className='form-builder-screen'>
      <h2 className='form-builder-header'>Build a Form</h2>
      <select 
        className='new-question-type-selector'
        onChange={(e) => setQType(e.target.value)}
        defaultValue='text'
      >
        <option value='text'>
          Text
        </option>
        <option value='number'>Numerical</option>
        <option value='radio'>Multiple Choice Single</option>
        <option value='checklist'>Multple Choice Multiple</option>
      </select>
      <textarea 
        value={qText}
        onChange={(e) => setQText(e.target.value)}
        className='new-question-text'
        placeholder='Question Text'
      >
      </textarea>
      <button
        className='submit-question-button'
        onClick={() => submitQuestion()}
      >
        Add Question
      </button>
    </div>
  )
}

export default FormBuilderScreen