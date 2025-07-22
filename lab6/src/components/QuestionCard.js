import React from 'react';

const QuestionCard = ({ question, onSelect, reviewMode = false }) => {
  return (
    <div
      className={`p-3 mb-3 rounded ${
        reviewMode
          ? question.selectedAnswer === question.correctAnswer
            ? 'bg-success-subtle'
            : 'bg-danger-subtle'
          : ''
      }`}
    >
      <h5><strong>Q{question.id}.</strong> {question.question}</h5>

      {question.options.map((opt, idx) => (
        <div className="form-check mb-2" key={idx}>
          <input
            className="form-check-input"
            type="radio"
            name={`question-${question.id}`}
            id={`q${question.id}-opt${idx}`}
            value={opt}
            checked={question.selectedAnswer === opt}
            onChange={() => !reviewMode && onSelect(question.id, opt)}
            disabled={reviewMode}
          />
          <label
            className={`form-check-label ${
              reviewMode && opt === question.correctAnswer ? 'fw-bold' : ''
            }`}
            htmlFor={`q${question.id}-opt${idx}`}
          >
            {opt}
          </label>
        </div>
      ))}

      {reviewMode && (
        <div className="bg-light p-2 mt-2 border rounded">
          Right answer is: <strong>{question.correctAnswer}</strong>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
