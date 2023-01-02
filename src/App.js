import React, {useEffect, useState} from 'react';
import FormBuilderScreen from "./components/FormBuilderScreen";
import SingleQuestionThumbnail from "./components/SingleQuestionThumbnail";
import MyFormPage from './pages/MyFormPage';
import "./styling/Form.css";

function App() {

  const [questions, setQuestions] = useState([]);
  const [creating, setCreating] = useState(true);
  const [formTitle, setFormTitle] = useState('My Form');

  const submitQuestionError = () => {
    alert('That question has already been added.');
  }

  const addQuestion = (qType, qText, options) => {

    // for (const q of questions) {
    //   if (q.type === qType) {
    //     if (q.text === qText) {
    //       submitQuestionError();
    //       return;
    //     };
    //   };
    // };

    let newQuestionObject = {
      text: qText,
      type: qType,
    };

    if (options) {
      newQuestionObject = {...newQuestionObject, options: options};
    }

    let qCatcher = [...questions];
    qCatcher.push(newQuestionObject);
    setQuestions(qCatcher);
  };

  const removeQuestion = (q) => {

    let catcher = [...questions];
    catcher = catcher.filter(item => item.text !== q.text || item.type !== q.type);
    setQuestions(catcher);
  };

  useEffect(() => {
    if (questions.length === 0) {
      let placeholderQuestion = {
        text: 'Questions will appear here.',
        type: 'none',
      };
      setQuestions([placeholderQuestion]);
    } else {
      if (questions[0].text === 'Questions will appear here.' && questions.length > 1) {
        let qCatcher = [...questions];
        qCatcher.shift();
        setQuestions(qCatcher);
      }
    }
  }, [questions]);

  return (
    <div className="App">
      { creating ?
        <>
          <h2 className="form-header">Build a Form Here</h2>
          <FormBuilderScreen 
            submitQuestion={(type, text, options) => addQuestion(type, text, options)}
            saveName={(newName) => setFormTitle(newName)}
            title={formTitle}
          />
          <div className='questions-list'>
            {questions.map(q => (
              <div className='single-question'>
                <SingleQuestionThumbnail 
                  question={q}
                  removeQuestion={() => removeQuestion(q)}
                />
              </div>
            ))}
          </div>
        </>
      :
        <MyFormPage 
          form={{
            questions: questions,
            title: formTitle
          }} 
          formTitle={formTitle} 
        />
      }
      <button 
        onClick={() => setCreating(!creating)}
        className='change-mode-button'
      >
        {creating ? 'View Form' : 'Edit Form'}
      </button>
    </div>
  );
}

export default App;
