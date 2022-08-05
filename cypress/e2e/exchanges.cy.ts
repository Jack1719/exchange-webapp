describe('test exchanges page', () => {
  it('should show proper layout', () => {
    cy.server()
    cy.get('#header-id').should("exist")
    cy.get('#main-id').should("exist")
    cy.get('#exchange-page-id').should("exist")
    cy.get('#footer-id').should("exist")
  }),
  it('shoud show loading while fetching data and show 10 exchanges', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=0',
      status: 200,
      delay: 3000,
      response: 'fixture:exchanges.json',
    }).as('getExchanges')
    cy.visit("http://localhost:3000/exchanges")
    cy.get('#loading-id').should("exist")
    cy.wait('@getExchanges')
    cy.get('#exchange-item').should('have.length', 10)
  }),
  it('shoud show loading while fetching data and show warning', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=0',
      status: 404,
      delay: 3000,
      response: 'fixture:exchanges.json',
    }).as('getExchanges')
    cy.visit("http://localhost:3000/exchanges")
    cy.get('#loading-id').should("exist")
    cy.wait('@getExchanges')
    cy.get('#warning-id').should('exist')
  })
})