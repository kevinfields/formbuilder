import React, {useState} from 'react';
import FormBuilderScreen from "./components/FormBuilderScreen";
import SingleQuestionThumbnail from "./components/SingleQuestionThumbnail";
import "./styling/Form.css";

function App() {

  const [questions, setQuestions] = useState([]);

  const submitQuestionError = () => {
    alert('That question has already been added.');
  }

  const addQuestion = (qType, qText) => {

    for (const q of questions) {
      if (q.type === qType) {
        if (q.text === qText) {
          submitQuestionError();
          return;
        };
      };
    };

    let newQuestionObject = {
      text: qText,
      type: qType,
    };

    let qCatcher = [...questions];
    qCatcher.push(newQuestionObject);
    setQuestions(qCatcher);
  }
  return (
    <div className="App">
      <h2 className="form-header">Build a Form Here</h2>
      <FormBuilderScreen 
        submitQuestion={(type, text) => addQuestion(type, text)}
      />
      <ul className='questions-list'>
        {questions.map(item => (
          <li className='single-question'>
            <SingleQuestionThumbnail question={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
