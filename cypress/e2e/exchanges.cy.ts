describe('test exchanges page', () => {
  it('should show proper layout', () => {
    cy.visit("http://localhost:3000/exchanges")
    cy.get('#header-id').should("exist")
    cy.get('#main-id').should("exist")
    cy.get('#footer-id').should("exist")
  }),
  it('shoud show loading while fetching data and show 10 exchanges and name element should have it\'s url, click it navigate properly', () => {
    cy.server()
    cy.fixture('exchanges.json').then((exchanges) => {
      cy.route({
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=0',
        status: 200,
        delay: 1000,
        response: exchanges,
      }).as('getExchanges')
      cy.visit("http://localhost:3000/exchanges")
      cy.get('#loading-id').should("exist")
      cy.wait('@getExchanges')
      cy.get('.exchange-item').should('have.length', 10)
      cy.get('.exchange-item-name').first().should('have.attr', 'href', exchanges[0].url)
      cy.get('.exchange-item').first().click()
      cy.location("pathname").should("eq", `/exchanges/${exchanges[0].id}`)
    })
  }),
  it('shoud show loading while fetching data and show warning', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=0',
      status: 404,
      delay: 1000,
      response: 'fixture:exchanges.json',
    }).as('getExchanges')
    cy.visit("http://localhost:3000/exchanges")
    cy.get('#loading-id').should("exist")
    cy.wait('@getExchanges')
    cy.get('#warning-id').should('exist')
  })
})