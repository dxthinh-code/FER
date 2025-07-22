import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
    <NavLink className="navbar-brand" to="/">Home</NavLink>
    <ul className="navbar-nav ms-3">
      <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/news">News</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/quizzes">Quiz</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;
