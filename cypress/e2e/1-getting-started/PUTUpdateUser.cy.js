import * as PUTUpdateUser from '../services/Regres/requests/PUTUpdateUser.request';
import * as POSTCreateUsers from '../services/Regres/requests/POSTCreateUsers.request';

describe('PUT Regres', () => {
    it('Update User', () => {
        POSTCreateUsers.createUsers().then((resUpdateUsers) => {
            PUTUpdateUser.UpdateUser(resUpdateUsers.body.id).should((resUpdateUsers) => {
                expect(resUpdateUsers.status).to.equal(200)
                expect(resUpdateUsers.body).to.be.not.null
                expect(resUpdateUsers.body.name).to.equal('morpheus da silva')
                expect(resUpdateUsers.body.job).to.equal('zion resident')
            })
        })
    })
})
