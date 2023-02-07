describe.skip('member directory', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.github.com/users?since=0&per_page=10', {
      fixture: 'members',
    });
    cy.intercept('GET', 'https://api.github.com/users/mojombo', {
      fixture: 'mojombo',
    });
    cy.intercept('GET', 'https://api.github.com/users/defunkt', {
      fixture: 'defunkt',
    });
    cy.visit('http://localhost:3000');
  });

  it('should display the logo and header', () => {
    cy.dataCy('logo-img').should('be.visible');
    cy.dataCy('header').should('be.visible');
  });

  it('should render ten member cards', () => {
    cy.dataCy('member-card-container').within(() => {
      cy.dataCy('member-card').should('have.length', 10);
    });
  });

  it('should contain correct card information for single member card', () => {
    cy.dataCy('member-card-container').within(() => {
      cy.dataCy('member-card').first().within(() => {
        cy.dataCy('member-avatar').should('exist');
        cy.dataCy('member-link').should('exist');
        cy.dataCy('member-login').should('exist');
        cy.dataCy('member-name').should('exist');
        cy.dataCy('member-location').should('exist');
        cy.dataCy('member-email').should('not exist');
        cy.dataCy('member-repos').should('exist');
      });
    });
  });
});
