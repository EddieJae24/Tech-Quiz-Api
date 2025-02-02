
describe('Testing the quiz app', () => {
beforeEach(() => {
    cy.visit('/')
})
});

describe('Python Quiz App', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: [
        {
          question: 'What is the output of print(2 ** 3)?',
          answers: [
            { text: '6', isCorrect: false },
            { text: '8', isCorrect: true },
            { text: '9', isCorrect: false },
            { text: '12', isCorrect: false }
          ],
        },
        {
          question: 'Which of the following is a mutable data type in Python?',
          answers: [
            { text: 'str', isCorrect: false },
            { text: 'tuple', isCorrect: false },
            { text: 'list', isCorrect: true },
            { text: 'int', isCorrect: false }
          ],
        },
        {
          question: 'What is the keyword used to define a function in Python?',
          answers: [
            { text: 'function', isCorrect: false },
            { text: 'func', isCorrect: false },
            { text: 'def', isCorrect: true },
            { text: 'define', isCorrect: false }
          ],
        }
      ],
    }).as('getQuestions');

    cy.visit('/');
  });

  it('Starts the Python quiz and displays the first question', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
  });

  it('Selects an answer and proceeds to the next question', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
    cy.get('button').contains('2').click();

    cy.contains('Which of the following is a mutable data type in Python?').should('be.visible');
  });

  it('Completes the quiz and displays the final score', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
    cy.get('button').contains('2').click();

    cy.contains('Which of the following is a mutable data type in Python?').should('be.visible');
    cy.get('button').contains('3').click();

    cy.contains('What is the keyword used to define a function in Python?').should('be.visible');
    cy.get('button').contains('3').click();

    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score:').should('be.visible');
  });

  it('Allows retaking the Python quiz', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is the output of print(2 ** 3)?').should('be.visible');
    cy.get('button').contains('2').click();

    cy.contains('Which of the following is a mutable data type in Python?').should('be.visible');
    cy.get('button').contains('3').click();

    cy.contains('What is the keyword used to define a function in Python?').should('be.visible');
    cy.get('button').contains('3').click();

    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Take New Quiz').click();

    // cy.contains('Start Quiz').should('be.visible');
  });
});
