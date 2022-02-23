import SignInFactory from '../factories/SignInFactory'
import SignInPage from '../pages/SignInPage'
import HomePage from '../pages/HomePage'

describe('Validating Home page scenarios', function() {

    it('User logging out of the application', function() {

        var validCredentials = SignInFactory.validCredentials()

        const expectedMessage = 'You logged out of the secure area!'
        SignInPage.navigate()
        SignInPage.insertCredentials(validCredentials)
        SignInPage.submit()
        HomePage.logOut()
        SignInPage.flashMessageShouldBe(expectedMessage)

    })

    it('User should remain logged after refreshing page', function() {

        var validCredentials = SignInFactory.validCredentials()

        SignInPage.navigate()
        SignInPage.insertCredentials(validCredentials)
        SignInPage.submit()
        HomePage.refreshPage()
        HomePage.checkIfUserStillLogged()
    })


})