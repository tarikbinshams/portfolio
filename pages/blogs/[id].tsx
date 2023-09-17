import { BlogServiceInstance } from '@app/blog/services/BlogService';
import Details from '@components/Blogs/Details'
import RelatedBlogs from '@components/Blogs/RelatedBlogs'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';

export default function BlogDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [blogId, setBlogId] = React.useState<number>();

    useEffect(() => {
        if (id) {
            setBlogId(Number(id));
        }
    }, [id]);

    const { data: blogData, isLoading, isError, error, refetch } = useQuery(["blogDetails", blogId],
        async () => {
            const blogs: any = await BlogServiceInstance.getBlogById({
                id: blogId
            });
            return blogs;
        },
    );
    return (
        <div>
            <div className="lg:t-max-w-[1400px] t-m-auto lg:t-px-16">
                <Details blogData={blogData} />
                <RelatedBlogs blogId={blogData?.id} category={blogData?.category} tags={blogData?.tags} />
            </div>
        </div>
    )
}
