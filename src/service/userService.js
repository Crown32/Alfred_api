import User from '../model/User.js';

export default {
    async createUser(req, res) {
        const user = new User(req.body);
        await user.save();
        res.send({
            message: 'User created successfully',
            user
        });
    }
}