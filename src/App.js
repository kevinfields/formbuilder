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

  const editQuestion = (q) => {

    let catcher = [...questions];
    let index = questions.findIndex(item => (item.text === q.text && item.type === q.type));

    let newText = prompt('Enter New Question: ');
    let newQuestion = {
      text: newText !== '' ? newText : q.text,
      type: q.type,
    };

    catcher[index] = newQuestion;
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
          <table className="table tableStack formTable">
            <thead className="formTableHeader">
              <h2>Build a Form Here</h2>
            </thead>
            <tbody>
              <tr className="tableRow">
                <td className="tableData formScreen">
                  <FormBuilderScreen 
                    submitQuestion={(type, text, options) => addQuestion(type, text, options)}
                    saveName={(newName) => setFormTitle(newName)}
                    title={formTitle}
                  />
                </td>
                <td className="tableData questionsList">
                  <div className='questions-list'>
                    {questions.map(q => (
                      <div className='single-question'>
                        <SingleQuestionThumbnail 
                          question={q}
                          removeQuestion={() => removeQuestion(q)}
                          editQuestion={() => editQuestion(q)}
                        />
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
