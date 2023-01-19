/// <reference types="cypress" />

const payloadUpdateUser = require('../payloads/update-user.json')

function UpdateUser (idUser) {
    return cy.request({
        method: 'PUT',
        url: `api/users/${idUser}`,
        failOnStatusCode: false,
        body: payloadUpdateUser
    })
}

export{ UpdateUser };

