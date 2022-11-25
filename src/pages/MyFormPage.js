import React from 'react'
import FullForm from '../components/FullForm'

const MyFormPage = (props) => {
  return (
    <div className='full-form'>
      <h2>My Form</h2>
      <FullForm form={props.form} />
    </div>
  )
}

export default MyFormPage