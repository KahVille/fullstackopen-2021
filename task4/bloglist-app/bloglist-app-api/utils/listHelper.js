const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
    const likesCount = blogs.reduce((sum, likes) => {
        return sum + likes;
    });
    return likesCount;
}

module.exports = { dummy, totalLikes };
