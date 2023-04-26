/// <reference types="cypress" />

describe('Test ProductList', () => {
  it('', () => {
    cy.visit('/');
    cy.contains('Home');
    cy.contains('About');
    cy.contains('Form');
    cy.contains('Home page');
    expect(cy.get('h3').should('have.length', 8));
  });
});
