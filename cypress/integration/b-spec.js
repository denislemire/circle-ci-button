describe('b-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || 'htdocs/index.html')
    })

      cy.get('#MyButton').click() // Click on button
  })
})
