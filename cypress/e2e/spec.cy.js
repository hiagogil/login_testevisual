describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/visual_testing.html')
    cy.pixeleyeSnapshot({
      name: "landing-header"
    })
    cy.get('#log').type('HiagoGil')
    cy.get('#senha').type('Teste12345')
    cy.get('#ok').click()
  })
})