require('dotenv').config();
const mongoose = require('mongoose');
const supertest = require('supertest');
const {app} = require ('../../app');
const helper = require('../utils/testHelper');

const apptest = supertest(app);

describe('blogs api route', () => {
    
    test('get all blogs', async () => {
            await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
    });

    test('post a new valid blog and check length', async () => {
        const responseStart = await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
        const blogsStart = responseStart.body.map(blog => blog);

        const usersAtStart = await helper.usersInDatabase();

        const testBlog = {
            title: 'teest blog',
            author: 'Matti Meikäläinen',
            url: 'test-blog',
            likes: 13,
            userId: usersAtStart[0]._id.toString()
        };

        expect(testBlog).toEqual(expect.objectContaining({
            title: expect.any(String),
            author: expect.any(String),
            url: expect.any(String),
            likes: expect.any(Number),
            userId: expect.any(String)
        }))

        const result = await apptest
        .post('/api/blogs')
        .send(testBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);

        expect(result.body).toEqual(expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            author: expect.any(String),
            url: expect.any(String),
            likes: expect.any(Number),
            user: expect.any(String)
        }))

        const responseEnd = await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
        const blogsEnd = responseEnd.body.map(blog => blog);

        expect(blogsEnd).toHaveLength(blogsStart.length + 1);
});

test('post a new invalid blog', async () => {
    const testBlog = {
        url: 'test-blog',
        likes: 13
    }

    const response = await apptest
    .post('/api/blogs')
    .send(testBlog)
    .expect(400)
    .expect('Content-Type', /application\/json/);

});

test('remove a blog', async () => {
    const responseStart = await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
    const blogsStart = responseStart.body.map(blog => blog)[0];

    let id = blogsStart.id;

    const response = await apptest
    .delete(`/api/blogs/${id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/);

});

test('update a blog post', async () => {
    const responseStart = await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
    const blogsStart = responseStart.body.map(blog => blog)[0];

    let updatedBlogPost = blogsStart;
    updatedBlogPost.likes = updatedBlogPost.likes +1;
        
    const response = await apptest
    .put(`/api/blogs/${updatedBlogPost.id}`)
    .send(updatedBlogPost)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});
    afterAll(() => {
        mongoose.connection.close();
    });
});


