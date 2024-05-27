import React, { useState } from 'react';
import './ChatForum.css'; 

import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import Nav from './Nav';
function ChatForum() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, { ...question, id: questions.length }]);
  };

  const addAnswer = (questionId, answerText) => {
    setQuestions(
      questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: [...(question.answers || []), answerText],
          };
        }
        return question;
      })
    );
  };

  return (
    <>
        <Nav/>
        <div className="ChatForum">
      <h1>Chat Forum</h1>
      <QuestionForm addQuestion={addQuestion} />
      <QuestionList questions={questions} addAnswer={addAnswer} />
    </div>
    </>
  );
}

export default ChatForum;
