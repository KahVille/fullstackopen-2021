require('dotenv').config();
const mongoose = require('mongoose');
const supertest = require('supertest');
const {app} = require ('../../app');

const apptest = supertest(app);

describe('blogs api route', () => {
    
    test('get all blogs', async () => {
            await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
    });

    test('post a new valid blog and check length', async () => {
        const responseStart = await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
        const blogsStart = responseStart.body.map(blog => blog);

        const testBlog = {
            title: 'teest blog',
            author: 'Matti Meikäläinen',
            url: 'test-blog',
            likes: 13
        }

        const response = await apptest
        .post('/api/blogs')
        .send(testBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);


        const responseEnd = await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
        const blogsEnd = responseEnd.body.map(blog => blog);

        expect(blogsEnd).toHaveLength(blogsStart.length + 1);
});

    afterAll(() => {
        mongoose.connection.close();
    });
});


