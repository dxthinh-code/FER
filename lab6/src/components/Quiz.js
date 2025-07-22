import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer } from '../redux/quizSlice';
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const questions = useSelector(state => state.quiz.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleSelect = (id, answer) => {
    dispatch(selectAnswer({ questionId: id, answer }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center bg-dark text-white py-3 rounded">JavaScript Quiz</h2>

      <QuestionCard question={questions[current]} onSelect={handleSelect} />

      <div className="d-flex justify-content-center gap-2 mt-3">
        <button className="btn btn-primary" onClick={() => setCurrent(0)}>First</button>
        <button className="btn btn-primary" onClick={() => setCurrent(prev => Math.max(0, prev - 1))}>Prev</button>
        <button className="btn btn-primary" onClick={() => setCurrent(prev => Math.min(questions.length - 1, prev + 1))}>Next</button>
        <button className="btn btn-primary" onClick={() => setCurrent(questions.length - 1)}>Last</button>
      </div>

      <div className="d-flex justify-content-center gap-2 mt-4">
        <button className="btn btn-info" onClick={() => setCurrent(0)}>Quiz</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/review')}>Quiz Review</button>
        <button className="btn btn-info" onClick={() => navigate('/quiz/result')}>Submit</button>
      </div>
    </div>
  );
};

export default Quiz;
