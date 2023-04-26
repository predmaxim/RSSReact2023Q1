/// <reference types="cypress" />

describe('Test Pagination', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home page');
  });

  it('Get all buttons', () => {
    expect(cy.get('[data-cy=pagination-container]').find('button').should('have.length', 13));
  });
});
