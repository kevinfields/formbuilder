import React from 'react'
import FullForm from '../components/FullForm'
import '../styling/MyFormPage.css';

const MyFormPage = (props) => {
  return (
    <div className='full-form'>
      <div className='form-header-literal'>{props.form.title}</div>
      <FullForm form={props.form.questions} />
    </div>
  )
}

export default MyFormPage