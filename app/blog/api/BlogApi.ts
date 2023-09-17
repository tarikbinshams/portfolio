import { getAxios } from '@config/axios-config';

class BlogApi {
    async getAllBlogs({ ...params }) {
        try {
            const response: any = await getAxios({
                url: `/blog?` +
                    (params.limit ? `&limit=${params.limit}` : '') +
                    (params.page ? `&page=${params.page}` : '') +
                    (params.category ? `&category=${params.category}` : '') +
                    (params.sortBy ? `&sortBy=${params.sortBy}` : '') +
                    (params.search ? `&search=${params.search}` : '') +
                    (params.active ? `&active=${params.active}` : '') +
                    (params.filters ? `&${params.filters}` : ''),
                method: 'get',
            });
            return response;
        } catch (e) {
            throw e;
        }
    }

    async getBlogById({ ...params }) {
        try {
            const response: any = await getAxios({
                url: `/blog/${params.id}`,
                method: "GET",
            });
            return response;
        } catch (e) {
            throw e;
        }
    }

    async createBlog(params: FormData) {
        const response: any = await getAxios({
            url: `/blog`,
            data: params,
            method: "POST",
        });
        console.log(response);
        if (response) return response;
        else return false;
    }

    async updateOneBlog(params: FormData) {
        const response: any = await getAxios({
            url: `/blog/${params.get("id")}`,
            data: params,
            method: "PATCH",
        });
        console.log(response);
        if (response) return response;
        else return false;
    }

    async updateBlogStatus({ ...params }) {
        const data = {
            is_active: params.is_active,
        }
        const response: any = await getAxios({
            url: `/blog/${params.id}/status`,
            data: data,
            method: "PATCH",
        });
        console.log(response);
        if (response) return response;
        else return false;
    }


}

const BlogApiInstance = new BlogApi();
export { BlogApiInstance, BlogApi };

