describe('a-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || 'htdocs/index.html')
    })

    it('has h1', () => {
      cy.contains('h1', 'Amazing!')
    })
  })
})
