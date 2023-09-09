describe('Recrutiment form testing', () => {
  beforeEach(() => {
    cy.viewport(1920, 1200);
    cy.visit('/rekrutacja');
  });

  it('should render Header 1 with non-empty text', () => {
    cy.get('h1[data-cypress="header1"]').should('not.be.empty');
  });

  it('should make the Header button work and navigate to recruitment', () => {
    cy.get('button[data-cypress="headerButton"]').should('be.visible').click();
    cy.url().should('include', '/rekrutacja'); // Upewnij się, że URL jest zgodny z oczekiwaniami
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

  it('should render the form, interact with the send button, and validate form fields', () => {
    // Sprawdź, czy przycisk "Send" jest widoczny
    cy.get('button[data-cypress="send-button"]').should('be.visible');

    // Kliknij przycisk "Send"
    cy.get('button[data-cypress="send-button"]').click();

    // Sprawdź, czy wyświetlają się komunikaty o obowiązkowych polach
    cy.contains('Imiona i nazwisko* - pole obowiązkowe');
    cy.contains('Data i miejsce urodzenia* - pole obowiązkowe');
    cy.contains(
      'PESEL (lub w przypadku jego braku - numer paszportu)* - pole obowiązkowe',
    );

    // Sprawdź, czy istnieje 10 pól wprowadzania
    cy.get('input[data-cypress="input"]').should('have.length', 10);

    // Sprawdź, czy tło pierwszego pola wprowadzania ma oczekiwany kolor
    cy.get('input[data-cypress="input"]')
      .eq(0)
      .should('have.css', 'outline-color', 'rgb(255, 0, 0)');
  });
});
