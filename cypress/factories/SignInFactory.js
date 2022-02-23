

export default {

    validCredentials: function () {

        var data = {
            username: "tomsmith",
            password: "SuperSecretPassword!"
        }

        return data

    },

    invalidPassword: function () {

        var data = {
            username: "tomsmith",
            password: "wrongPassword"
        }

        return data

    },

    invalidUsername: function () {

        var data = {
            username: "invalidUsername",
            password: "SuperSecretPassword!"
        }

        return data
    },

    invalidCredentials: function () {

        var data = {
            username: "invalidUsername!",
            password: "invalidPassword!"
        }

        return data
    }

}