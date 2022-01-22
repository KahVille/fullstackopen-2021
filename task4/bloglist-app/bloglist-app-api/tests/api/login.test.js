require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const helper = require('../utils/testHelper');

const supertest = require('supertest');
const {app} = require ('../../app');

const appLogintest = supertest(app);

describe('user login test', () => {

    beforeEach(async () => {
        await User.deleteMany();

        const passwordHash = await bcrypt.hash('testpassword', 10);

        const user = new User({username: 'testUser', passwordHash: passwordHash, name: 'Mattti Meikäläinen'});
        await user.save();
    });

    test('login successfully', async () => {

        const loginInformation = {
            username: 'testUser',
            password: 'testpassword'
        };

        const result = await appLogintest
        .post('/api/login')
        .send(loginInformation)
        .expect(200)
        .expect('Content-Type', /application\/json/);

        expect(result.body).toEqual(expect.objectContaining({
            token: expect.any(String),
            username: 'testUser',
            name: expect.any(String)
        }));
    });

});