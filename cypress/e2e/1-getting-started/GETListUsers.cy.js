import * as GETListUsers from '../services/Regres/requests/GETListUsers.request';

describe('GET Regres', () => {
    it('List Users', () => {
        GETListUsers.listUsers().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('data')
            expect(response.body.total).to.equal(12)
        })
    })
    it('List single user', () => {
        GETListUsers.listSingleUser().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('data')
            expect(response.body.data.id).to.equal(2)
            expect(response.body.data.email).to.equal('janet.weaver@reqres.in')
            expect(response.body.data.first_name).to.equal('Janet')
            expect(response.body.data.last_name).to.equal('Weaver')
            expect(response.body.data.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg')
        })
    })
    it('List single user not found', () => {
        GETListUsers.listSingleUserNotFoud().should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.not.null
        })
    })
    it('List resource', () => {
        GETListUsers.listResource().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body.total_pages).to.equal(2)
            expect(response.body.data[0].id).to.equal(1)
            expect(response.body.data[0].name).to.equal('cerulean')
        })
    })
    it('List single resource', () => {
        GETListUsers.listSingleResource().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.have.property('data')
            expect(response.body.data.id).to.equal(2)
            expect(response.body.data.name).to.equal('fuchsia rose')
            expect(response.body.data.year).to.equal(2001)
            expect(response.body.data.color).to.equal('#C74375')
            expect(response.body.data.pantone_value).to.equal('17-2031')
        })
    })
    it('List resource not found', () => {
        GETListUsers.listResourceNotFound().should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.not.null
        })
    })
})


