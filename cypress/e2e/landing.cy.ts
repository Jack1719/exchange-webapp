describe('test landing page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  }),
  it('should show proper layout', () => {
    cy.get('#header-id').should("exist")
    cy.get('#main-id').should("exist")
    cy.get('#footer-id').should("exist")
  }),
  it('show navigate to /exchanges when we click menu', () => {
    cy.get("#menu-popover button").click()
    cy.wait(10)
    cy.get("#exchange-button").click()
    cy.location("pathname").should("eq", "/exchanges")
  })
})