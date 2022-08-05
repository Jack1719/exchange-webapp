describe('test landing page', () => {
  it('should show proper layout', () => {
    cy.visit('http://localhost:3000')
    cy.get('#header-id').exist()
    cy.get('#main-id').exist()
    cy.get('#footer-id').exist()
  })
})