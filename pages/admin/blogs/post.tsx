import PostNewBlog from '@components/Blogs/Admin/PostNewBlog'
import React from 'react'
import { useAdminAppContext } from "../../../context/AdminAppContext";

export default function Post() {
  const { isExpanded } = useAdminAppContext();
  return (
    <div>
      <div className={`${isExpanded ? "lg:t-w-[calc(100vw-190px)]" : "lg:t-w-[calc(100vw-110px)]"} t-m-auto t-px-4 lg:t-px-16 t-my-20`}>
        <PostNewBlog />
      </div>

    </div>
  )
}
