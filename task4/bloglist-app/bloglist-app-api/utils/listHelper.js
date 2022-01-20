const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
    if (!blogs || blogs.length < 1 )
        return 0;

    const likesCount = blogs.reduce((sum, blog) => {
        return sum + blog.likes;
    }, 0);
    return likesCount;
}

module.exports = { dummy, totalLikes };
