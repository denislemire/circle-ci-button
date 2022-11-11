describe('b-spec', () => {
  describe('page', () => {
    beforeEach(() => {
      debugger
      cy.visit(Cypress.env('HOST') || 'htdocs/index.html')
    })

    it('Click my button', () => {
      cy.get('#MyButton').click() // Click on button
    })

    it('Check h1 display', () => {
      cy.get('#HiddenText')
        .should('have.attr','style','display: none')
    })
  })
})
