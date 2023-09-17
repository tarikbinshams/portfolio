import React, { useState } from "react";
import AdminBlogCard from "./BlogCard";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { BlogServiceInstance } from "@app/blog/services/BlogService";

export default function AdminBlogList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(40);
  const [searchValue, setSearchValue] = useState("");

  const {
    data: blogData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    ["blogs", dataPerPage, page, searchValue],
    async () => {
      const blogs: any = await BlogServiceInstance.getBlogs({
        // page: page,
        // limit: dataPerPage,
        category: "",
        search: searchValue,
        // active: true,
      });
      console.log("blogs", blogs);
      // group by category
      const groupedBlogs = blogs.data.reduce((acc: any, blog: any) => {
        if (!acc[blog.category]) {
          acc[blog.category] = [];
        }
        acc[blog.category].push(blog);
        return acc;
      }, {});
      console.log("groupedBlogs", groupedBlogs);
      return groupedBlogs;
    }
    // {
    //     enabled: !!categorySelectedValue,
    // }
  );
  return (
    <div>
      <div className="t-py-8 t-px-8 lg:t-px-0">
        <div className="t-flex t-justify-between">
          <div className="t-relative t-my-auto">
            <div className="t-absolute t-pb-0 t-inset-y-0 t-left-0 t-flex t-items-center t-pl-3 t-pointer-events-none">
              <svg
                aria-hidden="true"
                className="t-w-4 t-h-4 t-text-[#0306275e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className={`t-pl-10 t-rounded-[7px] t-border-[2px] t-bg-transparent t-border-[#2b79d386] t-py-1 t-w-[180px] t-text-[#000000] t-text-left t-text-[14px] placeholder:t-text-[#030627] t-outline-none focus:t-border-[#2B79D3]`}
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
          <div className="t-flex t-gap-4">
            <span
              onClick={() => router.push("/admin/blogs/post")}
              className={`t-bg-[#2B79D3] t-text-[#ffffff] t-px-6 t-py-1 t-rounded-[7px] t-cursor-pointer`}
            >
              Create new Blog
            </span>
          </div>
        </div>

        {blogData &&
          Object?.entries(blogData).map(([key, value]) => {
            const items = value as any[];
            return (
              <div key={key} className="t-mt-20 t-mb-12">
                <p className="t-text-[#030627] t-text-[24px] t-font-[500] t-pb-6 t-text-center lg:t-text-left">
                  {key}
                </p>
                <div className="t-flex t-flex-wrap t-gap-8 lg:t-gap-8 t-justify-center lg:t-justify-start">
                  {items.map((item, index) => (
                    <div key={index}>
                      <AdminBlogCard blog={item} refetch={refetch} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
