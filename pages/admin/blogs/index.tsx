import AdminBlogList from "@components/Blogs/Admin/BlogList";
import BlogList from "@components/Blogs/BlogList";
import React from "react";
import { useAdminAppContext } from "../../../context/AdminAppContext";
import Head from "next/head";
import BlogListV2 from "@components/Blogs/Admin/BlogListV2";

export default function AdminBlogsIndex() {
  const { isExpanded } = useAdminAppContext();
  return (
    <div>
      <Head>
        <title>Admin | Blogs | VTS</title>
        <meta name="description" content="Business Automation for Enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${
          isExpanded ? "lg:t-w-[calc(100vw-190px)]" : "lg:t-w-[calc(100vw-110px)]"
        } t-m-auto lg:t-px-16`}
      >
        {/* <AdminBlogList /> */}
        <BlogListV2 />
      </div>
    </div>
  );
}
