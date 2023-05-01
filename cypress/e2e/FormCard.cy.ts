/// <reference types="cypress" />

describe('Test Form Card', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    expect(cy.contains('Form Page'));
  });

  it('Card should be created', () => {
    cy.get('input[type="file"]').selectFile({
      contents: Cypress.Buffer.from('test'),
      fileName: 'test.jps',
      lastModified: Date.now(),
    });

    cy.get('input[name="firstName"]').type('Name');
    cy.get('input[name="lastName"]').type('LastName');
    cy.get('input[name="birthday"]').type('1985-05-06');
    cy.get('select[name="city"]').select('Minsk');
    cy.get('#male').click();
    cy.get('input[name="agreement"]').click();
    cy.get('button').click();
    expect(cy.get('h3').should('have.text', 'Name LastName'));
  });
});
