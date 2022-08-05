describe('test landing page', () => {
  it('should show proper layout', () => {
    cy.visit('http://localhost:3000')
    cy.get('#header-id').should("exist")
    cy.get('#main-id').should("exist")
    cy.get('#footer-id').should("exist")
  })
})