export interface Blog {
    id: number;
    title: string;
    content: string;
}
export declare class BlogService {
    private blogs;
    getAllBlogs(): Blog[];
    createBlog(blog: Blog): Blog;
    updateBlog(id: number, updatedBlog: {
        title?: string;
        content?: string;
    }): Blog | {
        message: string;
    };
    deleteBlog(id: number): {
        message: string;
    };
}
