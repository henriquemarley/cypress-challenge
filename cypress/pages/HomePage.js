

class HomePage {

    logOut() {
        cy.get('a[class="button secondary radius"]')
            .click()
    }

    refreshPage() {
        cy.reload()
    }

    checkIfUserStillLogged() {
        cy.get('i[class=icon-lock]')
            .parent()
            .should('have.text', ' Secure Area')
    }

}

export default new HomePage;