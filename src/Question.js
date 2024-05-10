// Question.js
import React, { useState } from 'react';
import './Question.css'; // Import Question-specific styles

function Question({ question, addAnswer }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addAnswer(question.id, text);
    setText('');
  };

  return (
    <div className="Question">
      <p>{question.text}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your answer..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit Answer</button>
      </form>
      {question.answers && (
        <ul>
          {question.answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Question;
