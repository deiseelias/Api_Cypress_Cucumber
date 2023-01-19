/// <reference types="cypress" />

function DeleteUser (idUser) {
    return cy.request({
        method: 'DELETE',
        url: `api/users/${idUser}`,
        failOnStatusCode: false
    })
}

export{ DeleteUser };

