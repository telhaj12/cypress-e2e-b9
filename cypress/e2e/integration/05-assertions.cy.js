describe('Assertions', () => {

  beforeEach(() => {

    // This will fail if the page doesnt send text/html with a 200 status
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.contains(".cards", "Html Elements").click();
  });


  it('Default Assertions', () => {

    cy
    // There is a default assertion that this
    // button must exist in the DOM before proceeding
    .get('#register_button')
    // since Cypress internally checks if the web element on the dom tree or not
    // we don't need to do the below assertion
    .should('be.visible')
    // before issuing the click, this button must be "actionable"
    // it can not be covered, disabled, or hidden from the view.
    .click()

  })

})