import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import { log } from 'async';

//Cenário 01
When(/^consult the list of users$/, () => {
    cy.request({
        method: 'GET',
        url: 'api/users?page=2',
        failOnStatusCode: false,}).as('response')
	return true;
});

Then(/^all registered users are listed$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(200)
        expect(when.body).to.be.not.null
        expect(when.body).to.have.property('data')
        expect(when.body.total).to.equal(12)
    })
	return true;
});

//Cenário 02
When(/^consult a single user$/, () => {
    cy.request({
        method: 'GET',
        url: 'api/users/2',
        failOnStatusCode: false,}).as('response')
	return true;
});

Then(/^the user is displayed$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(200)
        expect(when.body).to.be.not.null
        expect(when.body).to.have.property('data')
        expect(when.body.data.id).to.equal(2)
        expect(when.body.data.email).to.equal('janet.weaver@reqres.in')
        expect(when.body.data.first_name).to.equal('Janet')
        expect(when.body.data.last_name).to.equal('Weaver')
        expect(when.body.data.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg')
    })
	return true;
});

//Cenário 03
When(/^consult a user not found$/, () => {
    cy.request({
        method: 'GET',
        url: '/api/users/23',
        failOnStatusCode: false,}).as('response')
	return true;
});

Then(/^error message displayed$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(404)
        expect(when.body).to.be.not.null
    })
	return true;
});

//Cenario 04
When(/^consult a list resource$/, () => {
    cy.request({
        method: 'GET',
        url: '/api/unknown',
        failOnStatusCode: false,}).as('response')
	return true;
});

Then(/^resource displayed$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(200)
        expect(when.body).to.be.not.null
        expect(when.body.total_pages).to.equal(2)
        expect(when.body.data[0].id).to.equal(1)
        expect(when.body.data[0].name).to.equal('cerulean')
    })
	return true;
});

//Cenario 05
When(/^consult a single resource$/, () => {
    cy.request({
        method: 'GET',
        url: '/api/unknown/2',
        failOnStatusCode: false,}).as('response')
	return true;
});

Then(/^the resource is displayed$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(200)
        expect(when.body).to.be.not.null
        expect(when.body).to.have.property('data')
        expect(when.body.data.id).to.equal(2)
        expect(when.body.data.name).to.equal('fuchsia rose')
        expect(when.body.data.year).to.equal(2001)
        expect(when.body.data.color).to.equal('#C74375')
        expect(when.body.data.pantone_value).to.equal('17-2031')
    })
	return true;
});

//Cenartio 06
When(/^consult users inexist$/, () => {
    cy.request({
        method: 'GET',
        url: '/api/unknown/23',
        failOnStatusCode: false,}).as('response')
	return true;
});

Then(/^error message inexist$/, () => {
    cy.get('@response').then(when => {
        expect(when.status).to.eq(404)
        expect(when.body).to.be.not.null
    })
	return true;
});



