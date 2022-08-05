describe('test details page', () => {
  it('should show proper layout and allows to goback if we click back nav', () => {
    cy.visit("http://localhost:3000/exchanges/binance")
    cy.get('#header-id').should("exist")
    cy.get('#main-id').should("exist")
    cy.get('#footer-id').should("exist")
    cy.get('#back-nav').click()
    cy.location("pathname").should("eq", `/exchanges`)
  }),
  it('shoud show loading while fetching data and show warning', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/exchanges/binance',
      status: 500,
      delay: 1000,
      response: 'fixture:binance.json',
    }).as('getDetail')
    cy.visit("http://localhost:3000/exchanges/binance")
    cy.get('#loading-id').should("exist")
    cy.wait('@getDetail')
    cy.get('#warning-id').should('exist')
  }),
  it('shoud show loading and show proper detail', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/exchanges/binance',
      status: 200,
      delay: 1000,
      response: 'fixture:binance.json',
    }).as('getDetail')
    cy.visit("http://localhost:3000/exchanges/binance")
    cy.get('#loading-id').should("exist")
    cy.wait('@getDetail')
    cy.get('#detail-id').should('exist')
  })
})