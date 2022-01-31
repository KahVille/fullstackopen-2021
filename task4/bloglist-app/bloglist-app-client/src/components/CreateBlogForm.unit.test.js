import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CreateBlogForm from "./CreateBlogForm";

describe('create blog form unit test',() => {
    test('submit valid blog post', async () => {

        const blog = {
            url: 'test-blog-post',
            title: 'Test blog post',
            author: 'Matti meikäläinen',
            likes: 0
        };

        const createNewBlogPost = jest.fn();

        const component = render(<CreateBlogForm createNewBlog={createNewBlogPost}/>);

        const form = component.container.querySelector('form');
        expect(form).toBeDefined();

        const inputTitle = form.querySelector('input[name="Title"]');
        const inputAuthor = form.querySelector('input[name="Author"]');
        const inputUrl = form.querySelector('input[name="Url"]');

        expect(inputTitle).toBeDefined();
        expect(inputAuthor).toBeDefined();
        expect(inputUrl).toBeDefined();

        fireEvent.change(inputTitle, { target: { value: blog.title } });
        fireEvent.change(inputAuthor, { target: { value: blog.author } });
        fireEvent.change(inputUrl, { target: { value: blog.url } });

        fireEvent.submit(form);

        expect(createNewBlogPost.mock.calls).toHaveLength(1);
        expect(createNewBlogPost.mock.calls[0][0].title).toBe(blog.title);
        expect(createNewBlogPost.mock.calls[0][0].author).toBe(blog.author);
        expect(createNewBlogPost.mock.calls[0][0].url).toBe(blog.url);
    });
});

