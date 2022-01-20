const listHelper = require('../utils/listHelper');

test('total likes of empty list is zero', () => {
    const blogs = []
  
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(0);
});