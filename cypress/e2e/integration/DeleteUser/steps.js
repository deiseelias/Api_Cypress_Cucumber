import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import payloadAddUser from '../../services/Regres/payloads/add-users.json'

Given(/^create a user$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/users',
        failOnStatusCode: false,
        body: payloadAddUser}).as('newUser')
	return true;
});

When(/^I delete a new user$/, () => {
    cy.request({
        method: 'DELETE',
        url: `api/users/'@newUser'`,
        failOnStatusCode: false
    }).as('response')
	return true;
});

Then(/^user removed successfully$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.equal(204)
    })
	return true;
});
