import React, {useState} from 'react';
import FormBuilderScreen from "./components/FormBuilderScreen";
import SingleQuestionThumbnail from "./components/SingleQuestionThumbnail";
import "./styling/Form.css";

function App() {

  const [questions, setQuestions] = useState([]);

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
  }

  return (
    <div className="App">
      <h2 className="form-header">Build a Form Here</h2>
      <FormBuilderScreen 
        submitQuestion={(type, text, options) => addQuestion(type, text, options)}
      />
      <ul className='questions-list'>
        {questions.map(q => (
          <li className='single-question'>
            <SingleQuestionThumbnail 
              question={q}
              removeQuestion={() => removeQuestion(q)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
