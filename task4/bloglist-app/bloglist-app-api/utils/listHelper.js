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

const favoriteBlog = (blogs) => {
    let copy = [...blogs];
    copy.sort((firstItem, secondItem) => firstItem.likes - secondItem.likes).reverse();
    const [mostLikedBlog] = copy;
    return mostLikedBlog;
}

module.exports = { dummy, totalLikes, favoriteBlog};
