import React from "react";
import BlogCard from "./BlogCard";
import { BlogServiceInstance } from "@app/blog/services/BlogService";
import { useQuery } from "react-query";

export default function RelatedBlogs({
  blogId,
  category,
  tags,
}: {
  blogId: any;
  category: string;
  tags: string;
}) {
  const {
    data: blogData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["blogs", category], async () => {
    const blogs: any = await BlogServiceInstance.getBlogs({
      category: category,
      active: true,
    });
    const filteredBlogs = blogs.data.filter((blog: any) => blog.id !== blogId);
    return filteredBlogs;
  });
  return (
    <div className="t-px-8 lg:t-px-0">
      <p className="t-text-[#1B1617] t-text-[18px] t-text-center lg:t-text-left  t-font-[sans-regular]">
        Enjoy our insights?
      </p>
      <p className="t-text-[#2B79D3] t-text-[30px] t-text-center lg:t-text-left t-font-[sans-regular]">Related Posts</p>
      <div
        className={`t-flex t-flex-wrap t-justify-center t-gap-4 t-mt-6 t-mb-12 ${
          blogData?.length > 3 ? "lg:t-justify-between" : "lg:t-justify-start"
        }`}
      >
        {blogData && blogData.map((blog: any) => <BlogCard key={blog.id} blog={blog} />)}

        {blogData?.length === 0 && (
          <p className="t-text-[#030627] t-text-[15px] t-font-[400] t-mt-4 t-text-justify t-font-[sans-regular]">
            No related posts found
          </p>
        )}
      </div>
    </div>
  );
}
