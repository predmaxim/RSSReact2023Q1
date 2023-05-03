/// <reference types="cypress" />

describe('Test ProductList', () => {
  it('Gets, types and asserts', () => {
    cy.visit('/');
    cy.contains('Home');
    cy.contains('About');
    cy.contains('Form');
    cy.contains('Home page');
    cy.get('input[name="search"]');
    cy.get('input[name="sort"]');
    cy.get('select[name="sort-type"]');
    cy.get('button').last().should('have.value', 13);
    expect(cy.get('h3').should('have.length', 8));
  });
});
