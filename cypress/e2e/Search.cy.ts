/// <reference types="cypress" />

describe('Test Serch', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home page');
    cy.get('input[name="search"]').type('samsung{enter}');
  });

  it('Search "samsung" string and gets product cards', () => {
    expect(cy.get('h3').should('have.length', 2));
  });

  it('Clear search input button', () => {
    cy.get('h3').should('have.length', 2);
    cy.get('button').contains('x').click();
    expect(cy.get('h3').should('have.length', 8));
  });
});
