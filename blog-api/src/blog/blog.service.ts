import { Injectable } from '@nestjs/common';

export interface Blog {
    id: number;
    title: string;
    content: string;
}

@Injectable()
export class BlogService {
    private blogs: Blog[] = [];

    getAllBlogs(): Blog[] {
        return this.blogs;
    }

    createBlog(blog: Blog) {
        this.blogs.push(blog);
        return blog;
    }

    updateBlog(id: number, updatedBlog: { title?: string; content?: string }) {
        const blogIndex = this.blogs.findIndex(blog => blog.id === id);
        if (blogIndex === -1) {
            return { message: "Blog not found" };
        }

        this.blogs[blogIndex] = { ...this.blogs[blogIndex], ...updatedBlog };
        return this.blogs[blogIndex];
    }

    deleteBlog(id: number) {
        this.blogs = this.blogs.filter(blog => blog.id !== id);
        return { message: "Blog deleted" };
    }
}
