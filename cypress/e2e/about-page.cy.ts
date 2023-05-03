/// <reference types="cypress" />

describe('Test About Page', () => {
  it('Vitit about page and get Heaader', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    expect(cy.contains('About Us Page'));
  });
});
