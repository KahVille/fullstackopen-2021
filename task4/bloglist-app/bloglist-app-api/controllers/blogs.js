const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response, next) => {
  try {
  const blogs = await Blog.find({});
    return response.json(blogs);
  }
  catch(error) {
    return next(error);
  }
});

blogsRouter.post('/', async (request, response, next) => {
  try {
    const blog = await new Blog(request.body);
    const result = await blog.save();
    return response.status(201).json(result)
  } catch (error) {
    return next(error);
  }
});

module.exports = { blogsRouter };
