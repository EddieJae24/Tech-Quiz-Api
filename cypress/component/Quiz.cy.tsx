import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  it('Renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz/>)
  })
})

// // // import { mount } from '@cypress/react';
// // import Quiz from '../../client/src/components/Quiz'; // Adjust the import path as needed
// import { getQuestions } from '../../client/src/services/questionApi';

// // Mock API Response
// const mockQuestions = [
//   {
//     question: 'What is the output of print(2 ** 3)?',
//     answers: [
//       { text: '6', isCorrect: false },
//       { text: '8', isCorrect: true },
//       { text: '9', isCorrect: false },
//       { text: '12', isCorrect: false }
//     ]
//   },
//   {
//     question: 'Which of the following is a mutable data type in Python?',
//     answers: [
//       { text: 'str', isCorrect: false },
//       { text: 'tuple', isCorrect: false },
//       { text: 'list', isCorrect: true },
//       { text: 'int', isCorrect: false }
//     ]
//   }
// ];

// describe('Quiz Component', () => {
//   beforeEach(() => {
//     cy.stub(getQuestions, 'default').resolves(mockQuestions);
//   });

//   it('renders the Start Quiz button initially', () => {
//     cy.mount(<Quiz />);
//     cy.contains('Start Quiz').should('be.visible');
//   });

//   it('starts the quiz and displays the first question', () => {
//     cy.mount(<Quiz />);
//     cy.contains('Start Quiz').click();
//     cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
//   });

//   it('selects an answer and moves to the next question', () => {
//     cy.mount(<Quiz />);
//     cy.contains('Start Quiz').click();

//     // First Question
//     cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
//     cy.contains('8').click();

//     // Second Question
//     cy.contains('Which of the following is a mutable data type in Python?').should('be.visible');
//   });

//   it('completes the quiz and displays the final score', () => {
//     cy.mount(<Quiz />);
//     cy.contains('Start Quiz').click();

//     // Answer both questions correctly
//     cy.contains('8').click();
//     cy.contains('list').click();

//     cy.contains('Quiz Completed').should('be.visible');
//     cy.contains('Your score: 2/2').should('be.visible');
//   });

//   it('allows restarting the quiz', () => {
//     cy.mount(<Quiz />);
//     cy.contains('Start Quiz').click();

//     cy.contains('8').click();
//     cy.contains('list').click();

//     cy.contains('Quiz Completed').should('be.visible');
//     cy.contains('Take New Quiz').click();

//     cy.contains('Start Quiz').should('be.visible');
//   });
// });
