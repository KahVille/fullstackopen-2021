import { render, fireEvent } from "@testing-library/react";
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

        const blogDetailsDiv = component.container.querySelector('.blog-view-details');
        expect(blogDetailsDiv).toHaveStyle('display: none');

        const blogDiv = component.container.querySelector('.blog-view-list');
        expect(blogDiv).not.toHaveStyle('display: none');
        expect(blogDiv).toHaveTextContent(blog.title);
        expect(blogDiv).toHaveTextContent(blog.author);
        expect(blogDiv).not.toHaveTextContent(`likes: ${blog.likes}`);
        expect(blogDiv).not.toHaveTextContent(`${blog.url}`);
    });

    test('render blog content in a detail view', async () => {

        const blog = {
            url: 'test-blog-post',
            title: 'Test blog post',
            author: 'Matti meikäläinen',
            likes: 0
        };

        const component = render(<Blog blog={blog} onLikeBlogPost={() => {}} onRemoveBlogPost={() => {}} />);
        
        const blogListViewDiv = component.container.querySelector('.blog-view-list');
        expect(blogListViewDiv).not.toHaveStyle('display: none');

        const blogDetailsDiv = component.container.querySelector('.blog-view-details');
        expect(blogDetailsDiv).toHaveStyle('display: none');

        const button = component.getByText('View details');
        fireEvent.click(button);

        expect(blogDetailsDiv).not.toHaveStyle('display: none')
        expect(blogDetailsDiv).toHaveTextContent(blog.title);
        expect(blogDetailsDiv).toHaveTextContent(blog.author);
        expect(blogDetailsDiv).toHaveTextContent(`likes: ${blog.likes}`);
        expect(blogDetailsDiv).toHaveTextContent(`${blog.url}`);
    });

});

