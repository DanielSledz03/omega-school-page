describe('home render', () => {
  it('passes', () => {
    cy.viewport(1920, 1200);
    cy.visit('/');

    cy.contains('Kreuj z nami');
    cy.contains('swoją przyszłość');
  });
});
