const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');

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

    const body = request.body;

    const user = await User.findById(body.userId);

    const blog = await new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    });

    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id.toString());
    
    await user.save();

    return response.status(201).json(savedBlog.toJSON());
  } catch (error) {
    return next(error);
  }
});

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    const removedBlog = await Blog.findByIdAndDelete(request.params.id.toString());
    return response.status(200).json(removedBlog);
  } catch (error) {
    return next(error);
  }

});

blogsRouter.put('/:id', async (request, response, next) => {
  try {
    const updatedBlogDetails = JSON.parse(JSON.stringify(request.body));
    const updatedBlogPost = await Blog.findByIdAndUpdate(request.params.id.toString(), updatedBlogDetails, {new: true});
    return response.status(200).json(updatedBlogPost);
  } catch (error) {
    return next(error);
  }

});


module.exports = { blogsRouter };
