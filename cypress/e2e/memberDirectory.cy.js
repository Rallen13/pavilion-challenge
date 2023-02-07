describe('member directory', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should display the logo and header', () => {
    cy.dataCy('logo-img').should('be.visible');
    cy.dataCy('header').should('be.visible');
  });
});
