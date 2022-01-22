require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const helper = require('../utils/testHelper');

const supertest = require('supertest');
const {app} = require ('../../app');

const appUsertest = supertest(app);

describe('user account testing', () => {

    beforeEach(async () => {
        await User.deleteMany();

        const passwordHash = await bcrypt.hash('testpassword', 10);

        const user = new User({username: 'testUser', passwordHash: passwordHash, name: 'Mattti Meikäläinen'});
        await user.save();
    });

    test('get all users', async () => {
        await appUsertest
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/);

    })

    test('create new user with username and password', async () => {
        const usersAtStart = await helper.usersInDatabase();
        const newUser = {
            username: 'newUsertest',
            name: 'Matti Meikäläinen',
            password: 'test'
        };

        await appUsertest
        .post('/api/users')
        .send(newUser)
        .expect(200)
        .expect('Content-Type', /application\/json/);

        const usersAtEnd = await helper.usersInDatabase();
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

        const usernames = usersAtEnd.map(user => user.username);
        expect(usernames).toContain(newUser.username);
    });

    test('create new user with same credentials as a another user', async () => {
        const usersAtStart = await helper.usersInDatabase();
        const newUser = {
            username: 'testUser',
            name: 'Matti Meikäläinen',
            password: 'testpassword'
        };

        const result = await appUsertest
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/);

        expect(result.body.message).toContain('`username` to be unique');

        const usersAtEnd = await helper.usersInDatabase();

        expect(usersAtEnd).toHaveLength(usersAtStart.length);

    })

});