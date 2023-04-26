/// <reference types="cypress" />

describe('Test Sort', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Home page');
    cy.get('input[name="sort"]');
    cy.get('select[name="sort-type"]');
  });

  it('', () => {
    cy.get('#desc').click({ force: true });
    expect(
      cy
        .get('h3')
        .first()
        .contains(/3 lights lndenpant kitchen islang/i)
    );
  });

  it('', () => {
    cy.get('select[name="sort-type"]').select('price');
    expect(
      cy
        .get('h3')
        .first()
        .contains(/FREE FIRE T Shirt/i)
    );
  });
});
