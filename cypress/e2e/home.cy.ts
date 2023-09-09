describe('Home Page Rendering', () => {
  beforeEach(() => {
    cy.viewport(1920, 1200);
    cy.visit('/');
  });

  it('should render Header 1 with non-empty text', () => {
    cy.get('h1[data-cypress="header1"]').should('not.be.empty');
  });

  it('should make the Header button work and navigate to recruitment', () => {
    cy.get('button[data-cypress="headerButton"]').should('be.visible').click();
    cy.url().should('include', '/recruitment'); // Upewnij się, że URL jest zgodny z oczekiwaniami
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

  it('should display two visible articles', () => {
    cy.get('div[data-cypress="article-box"]').should('have.length', 2);
  });

  it('should display the recruitment modal', () => {
    cy.get('div[data-cypress="recruitment-modal"]').should('be.visible');
  });

  it('should display visible images in the gallery', () => {
    cy.get('div[data-cypress="gallery-image"]')
      .should('have.length', 4)
      .and(($img) => {
        const firstImage = $img[0] as HTMLImageElement;
        expect(firstImage.clientHeight).to.be.greaterThan(0);
      });
  });
});
