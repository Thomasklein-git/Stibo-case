import { getUsers } from '../services/user.service'

class UserController {
    static async getUsers() {
        return await getUsers();
    }
}

export default UserController;