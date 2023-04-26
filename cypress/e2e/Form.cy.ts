/// <reference types="cypress" />

describe('Test Form Page', () => {
  it('Vitit form page and get Heaader', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    expect(cy.contains('Form Page'));
  });
});
