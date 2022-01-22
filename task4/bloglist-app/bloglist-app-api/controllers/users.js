const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

usersRouter.get('/', async (request, response, next) => {
    try {
        const users = await User.find({});
        return response.json(users.map(user => user.toJSON()));
    } catch (error) {
        return next(error);
    }
});

usersRouter.post('/', async (request, response, next) => {
    try {
        const newUserData = request.body;
        
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(newUserData.password, saltRounds);
    
        const user = new User({
            username: newUserData.username,
            name: newUserData.name,
            passwordHash: passwordHash
        });
    
        const savedUser = await user.save();
    
        return response.json(savedUser);
    } catch (error) {
        return next(error)
    }
});

module.exports = { usersRouter };
