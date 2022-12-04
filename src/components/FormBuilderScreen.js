import React, {useState, useEffect} from 'react';
import "../styling/FormBuilder.css";

const FormBuilderScreen = (props) => {

  const [qType, setQType] = useState('text');
  const [qText, setQText] = useState('');
  const [addOptions, setAddOptions] = useState(false);
  const [optionText, setOptionText] = useState('');
  const [options, setOptions] = useState({
    count: 0,
    list: [],
  });

  const submitQuestion = () => {


    if (qText.length < 2) {
      return;
    }

    if (qType === 'radio' || qType === 'checklist') {
      props.submitQuestion(qType, qText, options);
    } else {
      props.submitQuestion(qType, qText);
    };

    setQType('text');
    setQText('');
    setAddOptions(false);
    setOptions({count: 0, list: []});
  };

  const addNewOption = () => {

    if (optionText.length === 0) {
      return;
    };

    let newList = options.list;
    newList.push(optionText);
    setOptions({
      list: newList,
      count: newList.length,
    });
    setOptionText('');
  };

  useEffect(() => {

    if (qType === 'radio' || qType === 'checklist') {
      setAddOptions(true);
    } else {
      setAddOptions(false);
    };

  }, [qType]);

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
      {addOptions ?
        <div className='add-options-bar'>
          {options.list.map((item, key) => (
            <div 
              className='single-option'
              key={key}
            >
              {item}
            </div>
          ))}
          <input 
            className='new-option-input'
            type='text'
            value={optionText}
            onChange={(e) => setOptionText(e.target.value)}
          >
          </input>
          <button 
            onClick={() => addNewOption()}
            className='add-option-button'
          >
            Add New Option
          </button> 
        </div>
      : null}
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