describe('home render', () => {
  it('header rendered succesfully', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');
    cy.contains('Kreuj z nami');
    cy.contains('swoją przyszłość');
  });

  it('header button work', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');
    cy.get('button[data-cypress="headerButton"]').should('be.visible').click();
    cy.url().should('include', '/rekrutacja'); // Zmienić na oczekiwany URL
  });

  it('header image rendered succesfully', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');
    cy.get('img[data-cypress="headerImage"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].clientWidth).to.be.greaterThan(0);
      });
  });

  it('two articles are visible', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');
    cy.get('div[data-cypress="article-box"]').should('have.length', 2);
  });

  it('recrutation modal is visible', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');
    cy.get('div[data-cypress="recrutation-modal"]').should('be.visible');
  });

  it('images from gallery are visible', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');
    cy.get('div[data-cypress="gallery-image"]')
      .should('have.length', 4)
      .and(($img) => {
        expect($img[0].clientHeight).to.be.greaterThan(0);
      });
  });
});
