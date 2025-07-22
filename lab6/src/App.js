import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import QuizResult from './components/QuizResult';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'; // ✅ import từ file mới

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quiz/result" element={<QuizResult />} />
        <Route path="/quiz/review" element={<QuizReview />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
