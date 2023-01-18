import User from '../schemas/user.model';
import Home from './home';
export default class UserHome extends Home {

    constructor() {
        super(User);
    }
}