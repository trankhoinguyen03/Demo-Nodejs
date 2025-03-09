import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { BlogService, Blog } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Get()
  getAllBlogs(): Blog[] {
    return this.blogService.getAllBlogs();
  }

  @Post()
  createBlog(@Body() blog: { title: string; content: string }) {
    const newBlog: Blog = { id: this.blogService.getAllBlogs().length + 1, ...blog };
    return this.blogService.createBlog(newBlog);
  }

  @Put(':id')
  updateBlog(
    @Param('id') id: string,
    @Body() updatedBlog: { title?: string; content?: string }
  ) {
    return this.blogService.updateBlog(Number(id), updatedBlog);
  }

  @Delete(':id')
  deleteBlog(@Param('id') id: string) {
    return this.blogService.deleteBlog(Number(id));
  }
}
