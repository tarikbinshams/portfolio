import { BlogApiInstance } from "../api/BlogApi";


class BlogService {
    async getBlogs({ ...params }) {
        const results = await BlogApiInstance.getAllBlogs(params);
        return results;
    }

    async getBlogById({ ...params }) {
        return await BlogApiInstance.getBlogById(params);
    }

    async createNewBlog(params: FormData) {
        const results = await BlogApiInstance.createBlog(params);
        return results;

    }

    async updateBlog(params: FormData) {
        return await BlogApiInstance.updateOneBlog(params);
    }

    async updateBlogStatus({ ...params }) {
        return await BlogApiInstance.updateBlogStatus(params);
    }

}

const BlogServiceInstance = new BlogService()
export { BlogService, BlogServiceInstance };
