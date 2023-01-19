/// <reference types="cypress" />

const payloadAddUser = require('../payloads/add-users.json')

function createUsers () {
    return cy.request({
        method: 'POST',
        url: 'api/users',
        failOnStatusCode: false,
        body: payloadAddUser
    })
}

export{ createUsers };

const payloadRegisterSuccessful = require('../payloads/post-register-successful.json')

function postRegisterSuccessful () {
    return cy.request({
        method: 'POST',
        url: 'api/register',
        failOnStatusCode: false,
        body: payloadRegisterSuccessful
    })
}

export{ postRegisterSuccessful };

const payloadRegisterUnSuccessful = require('../payloads/post-register-unsuccessful.json')

function postRegisterUnSuccessful () {
    return cy.request({
        method: 'POST',
        url: 'api/register',
        failOnStatusCode: false,
        body: payloadRegisterUnSuccessful
    })
}

export{ postRegisterUnSuccessful };

const payloadLoginSuccessful = require('../payloads/post-login-successful.json')

function postLoginSuccessful () {
    return cy.request({
        method: 'POST',
        url: 'api/login',
        failOnStatusCode: false,
        body: payloadLoginSuccessful
    })
}

export{ postLoginSuccessful };

const payloadLoginUnSuccessful = require('../payloads/post-register-unsuccessful.json')

function postLoginUnSuccessful () {
    return cy.request({
        method: 'POST',
        url: 'api/login',
        failOnStatusCode: false,
        body: payloadLoginUnSuccessful
    })
}

export{ postLoginUnSuccessful };

