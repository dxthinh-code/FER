import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';

const QuizResult = () => {
  const questions = useSelector(state => state.quiz.questions);

  return (
    <div className="container mt-4">
      <h2 className="text-center bg-dark text-white py-3 rounded">Quiz Review</h2>
      {questions.map(q => (
        <QuestionCard key={q.id} question={q} reviewMode />
      ))}
    </div>
  );
};

export default QuizResult;
