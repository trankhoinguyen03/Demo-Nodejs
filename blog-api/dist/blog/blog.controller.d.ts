import { BlogService, Blog } from './blog.service';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    getAllBlogs(): Blog[];
    createBlog(blog: {
        title: string;
        content: string;
    }): Blog;
    updateBlog(id: string, updatedBlog: {
        title?: string;
        content?: string;
    }): Blog | {
        message: string;
    };
    deleteBlog(id: string): {
        message: string;
    };
}
