import SignInFactory from '../factories/SignInFactory'
import SignInPage from '../pages/SignInPage'

describe('Validating Login scenarios', function () {

    it('Login with valid credentials', function () {

        var validCredentials = SignInFactory.validCredentials()

        const expectedMessage = 'You logged into a secure area!'

        SignInPage.navigate()
        SignInPage.insertCredentials(validCredentials)
        SignInPage.submit()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('Login with invalid password', function () {

        var invalidPassword = SignInFactory.invalidPassword()

        const expectedMessage = 'Your password is invalid!'

        SignInPage.navigate()
        SignInPage.insertCredentials(invalidPassword)
        SignInPage.submit()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('Login with invalid username', function () {

        var invalidUsername = SignInFactory.invalidUsername()

        const expectedMessage = 'Your username is invalid!'

        SignInPage.navigate()
        SignInPage.insertCredentials(invalidUsername)
        SignInPage.submit()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('Login with invalid username and password', function() {

        var invalidCredentials = SignInFactory.invalidCredentials()

        const expectedMessage = 'Your username is invalid!'

        SignInPage.navigate()
        SignInPage.insertCredentials(invalidCredentials)
        SignInPage.submit()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('Login with empty credentials', function () {

        const expectedMessage = 'Your username is invalid!'

        SignInPage.navigate()
        SignInPage.submit()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('User tries to acess Secure Area without logging on the application', function() {

        const expectedMessage = 'You must login to view the secure area!'

        SignInPage.navigateToSecureArea()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('Checks if Elemental Selenium link is available', function() {

        SignInPage.navigate()
        SignInPage.checkElementalSeleniumLink()
    })

    it('User should be able to close warning alert', function() {

        SignInPage.navigate()
        SignInPage.submit()
        SignInPage.closeWarningAlert()
    })

    it('Verify if user is able to login using Enter key', function() {

        var validCredentials = SignInFactory.validCredentials()

        const expectedMessage = 'You logged into a secure area!'
        
        SignInPage.navigate()
        SignInPage.insertCredentials(validCredentials)
        SignInPage.pressEnterOnPassword()
        SignInPage.flashMessageShouldBe(expectedMessage)
    })

    it('Checks if password field is masked', function() {

        var validCredentials = SignInFactory.validCredentials()

        SignInPage.navigate()
        SignInPage.insertCredentials(validCredentials)
        SignInPage.isPasswordMasked()
    })


})