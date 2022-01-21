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

    test('model properties test', async () => {
        const testBlog = {
            title: 'teest blog',
            author: 'Matti Meikäläinen',
            url: 'test-blog'
        }

        const response = await apptest
        .post('/api/blogs')
        .send(testBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);

        const blog = response._body;
        
        expect(blog.likes).toBeDefined();
    });

    afterAll(() => {
        mongoose.connection.close();
    });
});