import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">About This App</h2>
      <p className="lead">
        This Quiz App is a React-based application designed to help learners test and improve their JavaScript knowledge through interactive multiple-choice quizzes.
      </p>

      <h4 className="mt-4">Key Features:</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">✔ Built with React and Redux Toolkit</li>
        <li className="list-group-item">✔ Real-time answer tracking and review</li>
        <li className="list-group-item">✔ Mobile-friendly, responsive design</li>
        <li className="list-group-item">✔ Quiz summary and result analysis</li>
      </ul>

      <p className="mt-4">
        This project is part of a learning curriculum to strengthen skills in React, state management with Redux, and UI design using Bootstrap.
      </p>
    </div>
  );
};

export default About;
