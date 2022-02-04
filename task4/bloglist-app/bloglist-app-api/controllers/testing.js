require('dotenv').config();
const bcrypt = require('bcrypt');
const testingRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');


testingRouter.post('/reset', async (request, response, next) => {
    try {
        await Blog.deleteMany({});
        await User.deleteMany({});
        return response.status(204).end();

    } catch (error) {
        return next(error)
    }
});

testingRouter.post('/createuser', async (request, response, next) => {
    try {    
        await User.deleteMany();

        const passwordHash = await bcrypt.hash('testpassword', 10);

        const user = new User({
            username: 'testUser',
            name: 'Matti Meikälinen',
            passwordHash: passwordHash
        });
    
        await user.save();
        return response.status(204).end(); 

    } catch (error) {
        return next(error)
    }
});

testingRouter.get('/', async (request, response, next) => {
    try {
        return response.status(200).end();
    } catch (error) {
        return next(error)
    }
});

module.exports = { testingRouter }