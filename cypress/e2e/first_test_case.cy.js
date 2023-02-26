/// <reference types="Cypress" />


describe('cy_example_suite', () => {
  it('test_1', () => {
    cy.visit('https://example.cypress.io');
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('#query-btn').should('contain','Button');
    
    // cy.get() yields a jQuery object, you can get its attribute by invoking the .attr() method.
    cy.get('[data-test-id="test-example"]')
      .invoke('attr','data-test-id')
      .should('eq','test-example')
    
    

  })
})