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

const mostBlogs = (blogs) => {
    let copy = [...blogs];

    const uniqueAuthors = [...new Set(copy.map(item => item.author))];

    let authorBlogs = copy.map((element) => { return {author: element.author, likes: element.likes}});

    let authorBlogCount = [];

    uniqueAuthors.forEach((element) => {
        const count = authorBlogs.reduce((acc, cur) => cur.author === element ? ++acc : acc, 0);
        authorBlogCount.push({
            author: element,
            blogPostCount: count
        });
    });

    authorBlogCount.sort((firstItem, secondItem) => firstItem.blogPostCount - secondItem.blogPostCount).reverse();
    const [mostBlogPostsByAuthor] = authorBlogCount;

    return {author: mostBlogPostsByAuthor.author, blogPostCount: mostBlogPostsByAuthor.blogPostCount};
}

const mostLikes = (blogs) => {
    let copy = [...blogs];

    const uniqueAuthors = [...new Set(copy.map(item => item.author))];
    let authorBlogs = copy.map((element) => { return {author: element.author, likes: element.likes}});

    let authorBlogCount = [];
    uniqueAuthors.forEach((element) => {
        const likeCount = authorBlogs.reduce((sum, blog) => {
            return blog.author === element ? sum + blog.likes : sum;
        }, 0);
        authorBlogCount.push({
            author: element,
            likeCount: likeCount
        });
    });

    authorBlogCount.sort((firstItem, secondItem) => firstItem.likeCount - secondItem.likeCount).reverse();
    const [mostLikedAuthor] = authorBlogCount;

    return {author: mostLikedAuthor.author, likeCount: mostLikedAuthor.likeCount};



}


module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes};
