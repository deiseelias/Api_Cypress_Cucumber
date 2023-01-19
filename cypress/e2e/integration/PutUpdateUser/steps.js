import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import payloadAddUser from '../../services/Regres/payloads/add-users.json'
import payloadUpdateUser from '../../services/Regres/payloads/update-user.json'


Given(/^create a user for update$/, () => {
    cy.request({
        method: 'POST',
        url: 'api/users',
        failOnStatusCode: false,
        body: payloadAddUser}).as('newUser')
	return true;
});

When(/^edit the user$/, () => {
    cy.request({
        method: 'PUT',
        url: `api/users/'@newUser'`,
        failOnStatusCode: false,
        body: payloadUpdateUser
    }).as('response')
	return true;
});

Then(/^user successfully edited$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.equal(200)
        expect(when.body).to.be.not.null
        expect(when.body.name).to.equal('morpheus da silva')
        expect(when.body.job).to.equal('zion resident')
    })
	return true;
});
