import * as POSTCreateUsers from '../services/Regres/requests/POSTCreateUsers.request';

describe('POST Regres', () => {
    it('Create User', () => {
        POSTCreateUsers.createUsers().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.equal('morpheus')
            expect(response.body.job).to.equal('leader')
        })
    })
    it('Register successful', () => {
        POSTCreateUsers.postRegisterSuccessful().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.equal(4)
            expect(response.body.token).to.equal('QpwL5tke4Pnpja7X4')
        })
    })
    it('Register unsuccessful', () => {
        POSTCreateUsers.postRegisterUnSuccessful().should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.equal('Missing password')
        })
    })
    it('Login successful', () => {
        POSTCreateUsers.postLoginSuccessful().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.token).to.equal('QpwL5tke4Pnpja7X4')
        })
    })
    it('Login unsuccessful', () => {
        POSTCreateUsers.postLoginUnSuccessful().should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.equal('Missing password')
        })
    })
})
