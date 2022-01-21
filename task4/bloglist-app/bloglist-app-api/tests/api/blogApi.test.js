require('dotenv').config();
const mongoose = require('mongoose');
const supertest = require('supertest');
const {app} = require ('../../app');

const apptest = supertest(app);

describe('blogs api route', () => {
    
    test('get all blogs', async () => {
        try {
            await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);            
        } catch (error) {
            console.log(error);
        }
    });

    afterAll(async () => {
        try {
            await mongoose.connection.close();
        } catch (error) {
            console.log(error);
        }
    });
});


