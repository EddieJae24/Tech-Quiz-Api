

import Quiz from "../../client/src/components/Quiz"

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

  it('should start the quiz and display the first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // cy.get('.card').should('be.visible');
    // cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

  //  Begin answering questions after clicking the start quiz button
    cy.get('button').contains('1').click();

  // check if the quaiz is completed
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

  // Begin answering questions after clicking the start quiz button
    cy.get('button').contains('1').click();

    // Now restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // check if the quiz is restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
