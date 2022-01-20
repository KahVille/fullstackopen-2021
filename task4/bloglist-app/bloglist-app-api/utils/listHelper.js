const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
    if (!blogs || blogs.length < 1 )
        return 0;
        
    const likesCount = blogs.reduce((sum, likes) => {
        return sum + likes;
    });
    return likesCount;
}

module.exports = { dummy, totalLikes };
