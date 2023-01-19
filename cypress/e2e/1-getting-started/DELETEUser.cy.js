import * as DELETEUser from '../services/Regres/requests/DELETEUser.request';
import * as POSTCreateUsers from '../services/Regres/requests/POSTCreateUsers.request';

describe('DELETE Regres', () => {
    it('Delete User', () => {
        POSTCreateUsers.createUsers().then((resListUsers) => {
            DELETEUser.DeleteUser(resListUsers.body.id).should((resListUsers) => {
                expect(resListUsers.status).to.equal(204)
            })
        })
    })
})
