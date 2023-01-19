import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import payloadAddUser from '../../services/Regres/payloads/add-users.json'
import payloadRegisterSuccessful from '../../services/Regres/payloads/post-register-successful.json'
import payloadRegisterUnSuccessful from '../../services/Regres/payloads/post-register-unsuccessful.json'
import payloadLoginSuccessful from '../../services/Regres/payloads/post-login-successful.json'

//Cenario 01
When(/^create a new user$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/users',
        failOnStatusCode: false,
        body: payloadAddUser}).as('response')
	return true;
});

Then(/^new user successfully created$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(201)
        expect(when.body.name).to.equal('morpheus')
        expect(when.body.job).to.equal('leader')
    })
	return true;
});

//Cenario 02
When(/^make a register$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/register',
        failOnStatusCode: false,
        body: payloadRegisterSuccessful
    }).as('response')
	return true;
});

Then(/^is successfully done$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(200)
        expect(when.body.id).to.equal(4)
        expect(when.body.token).to.equal('QpwL5tke4Pnpja7X4')
    })
	return true;
});

//Cenário 03
When(/^make a register unsuccessful$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/register',
        failOnStatusCode: false,
        body: payloadRegisterUnSuccessful
    }).as('response')
	return true;
});

Then(/^missing password is displayed$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(400)
        expect(when.body.error).to.equal('Missing password')
    })
	return true;
});

//Cenário 04
When(/^I login with valid data$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/login',
        failOnStatusCode: false,
        body: payloadLoginSuccessful
    }).as('response')
	return true;
});

Then(/^login is successful$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(200)
        expect(when.body.token).to.equal('QpwL5tke4Pnpja7X4')
    })
	return true;
});

//Cenário 05
When(/^I inform an invalid data in the login$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/login',
        failOnStatusCode: false,
        body: payloadRegisterUnSuccessful
    }).as('response')
	return true;
});

Then(/^login is unsuccessful$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(400)
        expect(when.body.error).to.equal('Missing password')
    })
	return true;
});




