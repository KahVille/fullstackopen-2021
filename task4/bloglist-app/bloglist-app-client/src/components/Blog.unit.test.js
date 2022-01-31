import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Blog from "./Blog";

describe('blog unit test',() => {
    test('render blog content in a list view', () => {

        const blog = {
            url: 'test-blog-post',
            title: 'Test blog post',
            author: 'Matti meikäläinen',
            likes: 0
        };

        const component = render(<Blog blog={blog} onLikeBlogPost={() => {}} onRemoveBlogPost={() => {}} />);
        const blogDiv = component.container.querySelector('.blog-view-list');
        expect(blogDiv).toHaveTextContent(blog.title);
        expect(blogDiv).toHaveTextContent(blog.author);
        expect(blogDiv).not.toHaveTextContent(`likes: ${blog.likes}`);
    });

});

