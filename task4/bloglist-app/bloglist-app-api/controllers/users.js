const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

usersRouter.get('/', async (request, response, next) => {
    try {
        const users = await User.find({}).populate('blogs', {title: 1, author:1, url: 1});       
        return response.json(users.map(user => user.toJSON()));
    } catch (error) {
        return next(error);
    }
});

usersRouter.post('/', async (request, response, next) => {
    try {
        const newUserData = request.body;

        if((!newUserData.password && !newUserData.username) || (newUserData.password.length < 3 && newUserData.username.length < 3))
            return response.status(400).json({message: 'invalid username and password'});

        if(!newUserData.username || newUserData.username.length < 3)
            return response.status(400).json({message: 'Invalid username'});

        
        if(!newUserData.password || newUserData.password.length < 3)
            return response.status(400).json({message: 'Invalid password'});


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
