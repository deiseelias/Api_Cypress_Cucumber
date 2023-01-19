/// <reference types="cypress" />

function listUsers () {
    return cy.request({
        method: 'GET',
        url: 'api/users?page=2',
        failOnStatusCode: false,
    })
}

export{ listUsers };

function listSingleUser () {
    return cy.request({
        method: 'GET',
        url: 'api/users/2',
        failOnStatusCode: false,
    })
}

export{ listSingleUser };

function listSingleUserNotFoud () {
    return cy.request({
        method: 'GET',
        url: '/api/users/23',
        failOnStatusCode: false,
    })
}

export{ listSingleUserNotFoud };

function listResource () {
    return cy.request({
        method: 'GET',
        url: '/api/unknown',
        failOnStatusCode: false,
    })
}

export{ listResource };

function listSingleResource () {
    return cy.request({
        method: 'GET',
        url: '/api/unknown/2',
        failOnStatusCode: false,
    })
}

export{ listSingleResource };

function listResourceNotFound () {
    return cy.request({
        method: 'GET',
        url: '/api/unknown/23',
        failOnStatusCode: false,
    })
}

export{ listResourceNotFound };

