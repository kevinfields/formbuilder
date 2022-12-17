import React from 'react'
import FullForm from '../components/FullForm'
import '../styling/MyFormPage.css';

const MyFormPage = (props) => {
  return (
    <div className='full-form'>
      <div className='form-header-literal'>{props.formTitle}</div>
      <FullForm form={props.form} />
    </div>
  )
}

export default MyFormPage