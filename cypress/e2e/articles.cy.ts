describe('News Page Rendering', () => {
  beforeEach(() => {
    cy.viewport(1920, 1200);
    cy.visit('/aktualnosci');
  });

  it('should render Header 1 with non-empty text', () => {
    cy.get('h1[data-cypress="header1"]').should('not.be.empty');
  });

  it('should render the Header image with proper dimensions', () => {
    cy.get('img[data-cypress="headerImage"]')
      .should('be.visible')
      .and(($img) => {
        const imageElement = $img[0] as HTMLImageElement;
        expect(imageElement.naturalWidth).to.be.greaterThan(0);
        expect(imageElement.naturalHeight).to.be.greaterThan(0);
      });
  });

  it('should render and click the button, displaying 11 articles with non-empty titles', () => {
    cy.get('button[data-cypress="show-more-articles"]')
      .should('be.visible')
      .click();

    cy.get('div[data-cypress="article-box"]').should('have.length', 11);
    cy.get('p[data-cypress="article-title"]')
      .should('have.length', 11)
      .should('not.be.empty');
  });

  it('should display six visible articles', () => {
    cy.get('div[data-cypress="article-box"]').should('have.length', 6);
    cy.get('p[data-cypress="article-title"]')
      .should('have.length', 6)
      .should('not.be.empty');
  });
});
