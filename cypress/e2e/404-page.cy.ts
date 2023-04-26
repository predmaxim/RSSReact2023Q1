/// <reference types="cypress" />

describe('Test About Page', () => {
  it('Vitit about page and get Heaader', () => {
    cy.visit('/');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(2000);
    // cy.get('h1');
    // cy.url().should('include', '/about');
    // expect(cy.contains('404 Page not found'));
  });
});
