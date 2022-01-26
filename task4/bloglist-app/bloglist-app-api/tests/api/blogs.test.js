require('dotenv').config();
const mongoose = require('mongoose');
const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const {app} = require ('../../app');
const { secret } = require('../../config');
const User = require('../../models/user');

const apptest = supertest(app);

describe('blogs api route', () => {

    test('get all blogs', async () => {
        await apptest.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/);
    });

    test('post a new valid blog and check length', async () => {
        
        const loginInformation = {
            username: 'testUser',
            password: 'testpassword'
        };

        //Login to get token
        const logInResult = await apptest
        .post('/api/login')
        .send(loginInformation)
        .expect(200)
        .expect('Content-Type', /application\/json/);

        expect(logInResult.body).toEqual(expect.objectContaining({
            token: expect.any(String),
            username: 'testUser',
            name: expect.any(String)
        }));

        const tokenFromLogin = logInResult.body.token;

        // Get blogs at start
        const responseStart = await apptest.get('/api/blogs')
        .set('Authorization', `Bearer ${tokenFromLogin}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);
        const blogsStart = responseStart.body.map(blog => blog);

        const decodedToken = jwt.verify(tokenFromLogin, secret);
        const user = await User.findById(decodedToken.id);

        // Create a test blog
        const testBlog = {
            title: 'teest blog',
            author: user.name,
            url: 'test-blog',
            likes: 13,
            userId: user._id.toString()
        };

        expect(testBlog).toEqual(expect.objectContaining({
            title: expect.any(String),
            author: expect.any(String),
            url: expect.any(String),
            likes: expect.any(Number),
            userId: expect.any(String)
        }))

        const blogResult = await apptest
        .post('/api/blogs')
        .send(testBlog)
        .set('Authorization', `Bearer ${tokenFromLogin}`)
        .expect(201)
        .expect('Content-Type', /application\/json/);

        expect(blogResult.body).toEqual(expect.objectContaining({
            id: expect.any(String),
            title: expect.any(String),
            author: expect.any(String),
            url: expect.any(String),
            likes: expect.any(Number),
            user: expect.any(String)
        }))

        const responseEnd = await apptest.get('/api/blogs')
        .set('Authorization', `Bearer ${tokenFromLogin}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

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


