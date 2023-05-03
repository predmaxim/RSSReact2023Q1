/// <reference types="cypress" />

describe('Test quickView', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home page');
    cy.get('h3').should('have.length', 8);
    cy.get('#12 img').click();
    cy.get('#qv-12');
  });

  it('', () => {
    expect(cy.get('#qv-12').find('h3').should('have.text', 'Brown Perfume'));
  });

  it('', () => {
    cy.get('#qv-12').find('button').contains('x').click();
  });
});
