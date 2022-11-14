describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

// hooks
// before
// beforeEach
// after
// afterEach

describe("Login feature Test", () => {
  it("should visit the login page correctly", function() {
    cy.log("Run the server locally")
    cy.log("navigate to login page")
    cy.log("Kill the server")
  })
  it("should be able to login", function() {
    cy.log("Run the server locally")
    cy.log("navigate to login page")
    cy.log("fill the username and the password login")
    cy.log("should navigate the login page")
  })
})
