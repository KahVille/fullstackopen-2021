require('dotenv').config();
const mongoose = require('mongoose');
const supertest = require('supertest');
const {app} = require ('../../app');

const apptest = supertest(app);

describe('blogs api model', () => {
    
    test('model integrity', async () => {
        const response = await apptest.get('/api/blogs');
        const blogs = response.body.map(blog => blog);
        blogs.forEach(element => {
            expect(element.id).toBeDefined();
        });
    });

    afterAll(() => {
        mongoose.connection.close();
    });
});