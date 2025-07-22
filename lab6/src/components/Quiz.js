import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionCard from './QuestionCard';
import { selectAnswer, resetQuiz } from '../redux/quizSlice';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (questionId, answer) => {
    dispatch(selectAnswer({ questionId, answer }));
  };

  const handleReset = () => {
    dispatch(resetQuiz());
    setReviewMode(false);
    setShowScore(false);
    setScore(0);
    setCurrentIndex(0);
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q) => {
      if (q.selectedAnswer === q.correctAnswer) total++;
    });
    setScore(total);
    setReviewMode(true);
    setShowScore(true); // <- hiển thị điểm và chúc mừng
  };

  const handleCheck = () => {
    setReviewMode(true); // chỉ hiện câu hỏi + highlight
    setShowScore(false); // không hiện điểm
  };

  const question = questions[currentIndex];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">JavaScript Quiz</h2>

      {reviewMode ? (
        <div>
          {questions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              onSelect={handleSelect}
              reviewMode={true}
            />
          ))}

          {showScore && (
            <div className="alert alert-info text-center">
              <h4>
                You scored: {score} out of {questions.length}
              </h4>
              {score === questions.length ? (
                <p className="text-success fw-bold">🎉 Congratulations!</p>
              ) : (
                <p className="text-danger fw-bold">
                  Oh, what a pity, you got {score}/{questions.length} points.
                  <br />
                  Do better next time.
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <>
          <QuestionCard
            question={question}
            onSelect={handleSelect}
            reviewMode={false}
          />

          <div className="d-flex justify-content-center gap-2 my-3">
            <button
              className="btn btn-primary"
              onClick={() => setCurrentIndex(0)}
              disabled={currentIndex === 0}
            >
              First
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(prev + 1, questions.length - 1)
                )
              }
              disabled={currentIndex === questions.length - 1}
            >
              Next
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setCurrentIndex(questions.length - 1)}
              disabled={currentIndex === questions.length - 1}
            >
              Last
            </button>
          </div>
        </>
      )}

      {/* Nút dưới cùng: chia trái – phải */}
      <div className="d-flex justify-content-between mt-4">
        {/* Trái: điều hướng */}
        <div className="d-flex gap-2">
          <button className="btn btn-info" onClick={() => navigate('/quizzes')}>
            Quiz
          </button>
          <button className="btn btn-info" onClick={() => navigate('/quiz/review')}>
            Quiz Review
          </button>
          <button className="btn btn-info" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {/* Phải: check và reset */}
        <div className="d-flex gap-2">
          <button className="btn btn-warning" onClick={handleCheck}>
            Check
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
