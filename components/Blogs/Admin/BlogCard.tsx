import React, { useState } from "react";
import styles from "@styles/Blog.module.css";
import config from "@config/app-config";
import { BlogServiceInstance } from "@app/blog/services/BlogService";
import { useRouter } from "next/router";

const handleTags = (tags: string) => {
  return tags.split(",").map((tag: string) => {
    return (
      <div key={tag} className="t-flex t-gap-1">
        <span className="t-text-[12px] t-text-[#2B79D3] t-py-1">{tag}</span>
        {tag !== tags.split(",")[tags.split(",").length - 1] && (
          <span className="t-w-1 t-h-1 t-bg-[#2B79D3] t-rounded-full t-my-auto"></span>
        )}
      </div>
    );
  });
};

export default function AdminBlogCard({ blog, refetch }: { blog: any; refetch: any }) {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const toggleClass = "t-transform t-translate-x-5";

  const updateStatus = async (id: string, status: boolean) => {
    await BlogServiceInstance.updateBlogStatus({
      id: id,
      is_active: status == true ? false : true,
    });
    refetch();
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/blogs/edit/${blog?.id}`);
  };

  return (
    <div>
      <div className="t-w-[270px] t-h-[350px] t-rounded-[8px] t-shadow-[0px_1px_10px_1px_rgba(0,0,0,0.1)] t-relative">
        <img
          className="t-w-full t-h-[150px] t-p-2"
          src={config.BACKEND_API_PUBLIC_URL + blog?.image}
          alt="blogImage"
        />
        <div className="t-px-2">
          <p className="t-text-[#030627] t-text-[20px] t-font-medium">
            {blog?.title.slice(0, 50)} {blog?.title.length > 50 && "..."}
          </p>
          <p className="t-text-[12px] t-text-[#2B79D3] t-py-0 t-flex t-gap-1">
            {handleTags(blog?.tags)}
          </p>
          <div className={styles.textShadow}>
            <div className="t-text-[12px] t-text-[#000000]">
              <div dangerouslySetInnerHTML={{ __html: blog?.description.slice(0, 200) + "..." }} />
            </div>
          </div>
          <div className="t-mt-2 t-flex t-justify-between">
            <div className="t-my-auto">
              <div className="t-flex t-gap-2 t-cursor-pointer" onClick={() => handleEdit(blog?.id)}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4L15 8M9 18H17.5M1 14L14 1L18 5L5 18H1V14Z"
                    stroke="#2B79D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="t-text-[] t-text-[12px] t-font-[600]">Edit</p>
              </div>
            </div>
            <div className="t-flex t-gap-1">
              <p className="t-my-auto t-text-[] t-text-[12px]">Inactive</p>
              <div
                className={
                  "t-w-11 t-h-6 t-flex t-items-center t-rounded-full t-p-0.5 t-cursor-pointer" +
                  (blog?.is_active ? " t-bg-[#a8d0fe]" : " t-bg-[#bdbdbd]")
                }
                onClick={() => {
                  updateStatus(blog?.id, blog?.is_active);
                }}
              >
                {/* Switch */}
                <div
                  className={
                    "t-h-5 t-w-5 t-rounded-full t-shadow-md t-transform t-duration-300 t-ease-in-out" +
                    (blog?.is_active && toggleClass) +
                    (blog?.is_active ? " t-bg-[#2B79D3]" : " t-bg-[#575757]")
                  }
                ></div>
              </div>
              <p className="t-my-auto t-text-[] t-text-[12px]">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
