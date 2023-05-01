/// <reference types="cypress" />

describe('Test Form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    expect(cy.contains('Form Page'));
  });
  it('Form is showed', () => {
    expect(cy.contains('Enter your data'));
    expect(cy.get('form'));
    expect(cy.get('input[type="file"]'));
    expect(cy.get('input[type="text"]').should('have.length', 2));
    expect(cy.get('input[type="radio"]').should('have.length', 2));
    expect(cy.get('input[type="checkbox"]'));
    expect(cy.get('button').should('have.text', 'Submit'));
  });
  it('Validation is work', () => {
    cy.get('button').should('have.text', 'Submit').click();
    expect(cy.contains('Choose an image'));
    expect(cy.contains('The field must not be empty'));
    expect(cy.contains('Select your birthday'));
    expect(cy.contains('Select your city'));
    expect(cy.contains('Select your gender'));
    expect(cy.contains('Accept the agreement!'));
  });
});
