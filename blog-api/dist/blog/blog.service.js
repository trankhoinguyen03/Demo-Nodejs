"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
let BlogService = class BlogService {
    blogs = [];
    getAllBlogs() {
        return this.blogs;
    }
    createBlog(blog) {
        this.blogs.push(blog);
        return blog;
    }
    updateBlog(id, updatedBlog) {
        const blogIndex = this.blogs.findIndex(blog => blog.id === id);
        if (blogIndex === -1) {
            return { message: "Blog not found" };
        }
        this.blogs[blogIndex] = { ...this.blogs[blogIndex], ...updatedBlog };
        return this.blogs[blogIndex];
    }
    deleteBlog(id) {
        this.blogs = this.blogs.filter(blog => blog.id !== id);
        return { message: "Blog deleted" };
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)()
], BlogService);
//# sourceMappingURL=blog.service.js.map