describe('Visual Testing with Pixeleye', () => {
  const viewports = ['iphone-xr', 'macbook-15', 'ipad-2'];

  viewports.forEach(viewport => {
    it(`should capture snapshots at various states and resolutions for ${viewport}`, () => {
      cy.viewport(viewport);
      cy.visit('http://localhost:8080/testevisual.html');
      
      // Esperar o tempo necessário para a página carregar completamente
      cy.wait(4000);

      // Captura do estado inicial da página
      cy.pixeleyeSnapshot({
        name: `paginainicial-${viewport}`
      });

      // Interações e validações
      cy.get('#log').clear().type('HiagoGil');
      cy.get('#log').should('have.value', 'HiagoGil');
      
      cy.get('#senha').clear().type('Teste12345');
      cy.get('#senha').should('have.value', 'Teste12345');
      
      // Captura do estado antes do clique
      cy.pixeleyeSnapshot({
        name: `antesdoclick-${viewport}`
      });

      // Clique no botão e espere a atualização da página
      cy.get('#ok').click();
      cy.wait(2000); // Ajuste o tempo de espera conforme necessário

      // Captura do estado após o clique
      cy.pixeleyeSnapshot({
        name: `aposoclick-${viewport}`
      });
    });
  });
});
