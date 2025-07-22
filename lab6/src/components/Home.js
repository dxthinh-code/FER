import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5 px-3">
        <h1 className="display-3 fw-bold">Boost Your JavaScript Skills</h1>
        <p className="lead mt-3">Interactive. Insightful. Effective.</p>
        <button className="btn btn-outline-light btn-lg mt-4" onClick={() => navigate('/quizzes')}>
          🚀 Start Quiz Now
        </button>
      </div>

      {/* Feature Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Why This Quiz App?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h3>📘 Learn</h3>
              <p>Questions are designed to teach you essential JS concepts from real-world problems.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h3>🛠 Practice</h3>
              <p>Answer questions in a smooth, distraction-free interface that tracks your selections.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h3>📈 Improve</h3>
              <p>Review correct answers, see explanations, and monitor your progress over time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">How It Works</h2>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="p-3">
                <span className="fs-1">1️⃣</span>
                <h5 className="mt-2">Select Quiz</h5>
                <p>Choose the quiz from menu and begin.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <span className="fs-1">2️⃣</span>
                <h5 className="mt-2">Answer Questions</h5>
                <p>Pick answers and navigate through the questions.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <span className="fs-1">3️⃣</span>
                <h5 className="mt-2">Review Results</h5>
                <p>Submit and view your performance summary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-5 bg-primary text-white">
        <h2 className="mb-3">Ready to test your skills?</h2>
        <button className="btn btn-light btn-lg px-4" onClick={() => navigate('/quizzes')}>
          👉 Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
