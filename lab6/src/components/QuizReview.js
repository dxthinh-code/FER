import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const QuizReview = () => {
  const questions = useSelector(state => state.quiz.questions);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2 className="text-center bg-dark text-white py-3 rounded">Quiz Review</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
        {questions.map(q => (
          <div
            key={q.id}
            className="border p-3 bg-success-subtle rounded text-center"
            style={{ width: '130px' }}
          >
            <div><strong>Question No</strong></div>
            <div>{q.id}</div>
            <div className="fw-bold">Answered</div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center gap-2 mt-4">
        <button className="btn btn-info" onClick={() => navigate('/quizzes')}>Quiz</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/review')}>Quiz Review</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/result')}>Submit</button>
      </div>
    </div>
  );
};

export default QuizReview;
