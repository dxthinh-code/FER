import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['javascript', 'scripting', 'script', 'js'],
      correctAnswer: 'script',
      selectedAnswer: null,
    },
    {
      id: 2,
      question: 'What are variables used for in JavaScript Programs?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these',
      ],
      correctAnswer: 'Storing numbers, dates, or other values',
      selectedAnswer: null,
    },
    {
      id: 3,
      question: "Which of the following can't be done with client-side JavaScript?",
      options: [
        'Validating a form',
        "Sending a form's contents by email",
        'Storing the form data to a database file on the server',
        'None of the above',
      ],
      correctAnswer: 'Storing the form data to a database file on the server',
      selectedAnswer: null,
    },
  ],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) question.selectedAnswer = answer;
    },
  },
});

export const { selectAnswer } = quizSlice.actions;
export default quizSlice.reducer;