// QuestionList.js
import React from 'react';
import './QuestionList.css'; // Import QuestionList-specific styles
import Question from './Question';

function QuestionList({ questions, addAnswer }) {
  return (
    <div className="QuestionList">
      <h2>Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <Question question={question} addAnswer={addAnswer} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
