describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/visual_testing.html')
    cy.get('#log').type('').should('have.value','HiagoGil')
    cy.get('#senha').type('Teste12345').should('have.value',  'Teste12345')
    cy.get('#ok').click()


    cy.pixeleyeSnapshot({
      name: "landing-header"
    })
  })
})