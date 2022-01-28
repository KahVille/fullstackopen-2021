
const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response, next) => {
  try {

    const user = request.user;

    if(!user)
    return response.status(400).json({message: 'user not found'});

  const blogs = await Blog.find({}).populate('user', {username: 1, name: 1});
    return response.json(blogs.map(blog => blog.toJSON()));
  }
  catch(error) {
    return next(error);
  }
});

blogsRouter.post('/', async (request, response, next) => {
  try {
    const user = request.user;

    if(!user)
    return response.status(400).json({message: 'user not found'});

    const body = request.body;

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
    const user = request.user;

    if(!user)
    return response.status(400).json({message: 'user not found'});


    const removedBlog = await Blog.findOneAndDelete({_id: request.params.id.toString(), user: user._id.toString()});
    
    if(!removedBlog || !removedBlog._id || removedBlog.user.toString() !== user._id.toString())
      return response.status(400).json({message: 'invalid remove operation'});

    return response.status(200).json(removedBlog.toJSON());
  } catch (error) {
    return next(error);
  }

});

blogsRouter.put('/:id', async (request, response, next) => {
  try {

    const user = request.user;

    if(!user)
    return response.status(400).json({message: 'user not found'});

    const updatedBlogDetails = JSON.parse(JSON.stringify(request.body));
    const updatedBlogPost = await Blog.findByIdAndUpdate(request.params.id.toString(), updatedBlogDetails, {new: true});
    return response.status(200).json(updatedBlogPost.toJSON());
  } catch (error) {
    return next(error);
  }

});


module.exports = { blogsRouter };
