// QuestionForm.js
import React, { useState } from 'react';
import './QuestionForm.css'; // Import QuestionForm-specific styles

function QuestionForm({ addQuestion }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addQuestion({ text });
    setText('');
  };

  return (
    <form className="QuestionForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask a question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;
