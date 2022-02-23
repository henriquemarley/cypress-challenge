

class SignInPage {

    navigate() {
        cy.visit('/login')
    }

    insertCredentials(credentials) {

        cy.get('#username')
            .type(credentials.username)
        cy.get('#password')
            .type(credentials.password)

    }

    submit() {
        cy.get('button[type=submit]')
            .click()
    }

    flashMessageShouldBe(expectedMessage) {
        cy.contains('#flash', expectedMessage)
            .should('be.visible')
    }

    checkElementalSeleniumLink() {
        cy.get('a[target=_blank]')
            .should('have.attr', 'target', '_blank')
    }

    closeWarningAlert() {
        cy.get('a[class=close]')
            .click()
        cy.get('#flash')
            .should('not.exist')
    }

    navigateToSecureArea() {
        cy.visit('/secure')
    }

    pressEnterOnPassword() {
        cy.get('#password')
            .type('{enter}')
    }

    isPasswordMasked() {
        cy.get('#password')
            .should('have.attr', 'type')
            .and('equal', 'password')
    }
}

export default new SignInPage;