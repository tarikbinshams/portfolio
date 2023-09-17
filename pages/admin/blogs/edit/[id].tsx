import EditBlog from '@components/Blogs/Admin/EditBlog';
import { BlogServiceInstance } from '@app/blog/services/BlogService';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function AdminBlogUpdate() {
    const router = useRouter();
    const { id } = router.query;
    const [blogId, setBlogId] = useState<number>();

    useEffect(() => {
        if (id) {
            setBlogId(Number(id));
        }
    }, [id]);

    const { data: blogData, isLoading, isError, error, refetch } = useQuery(["blogDetail", blogId],
        async () => {
            const blog: any = await BlogServiceInstance.getBlogById({
                id: blogId
            });
            console.log("blog", blog);
            return blog;
        },
    );

    return (
        <div className="lg:t-max-w-[1400px] t-m-auto t-px-8 lg:t-px-16">
            <div className="t-my-20">
                {
                  blogData && <EditBlog blog={blogData} />
                }
            </div>
        </div>
    )
}
