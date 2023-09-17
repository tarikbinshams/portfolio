import BlogList from "@components/Blogs/BlogList";
import React from "react";
import styles from "@styles/Blog.module.css";
import Head from "next/head";
import Landing from "@components/Blogs/Landing";
import BLOGS from "@contents/Blogs";

export default function BlogsIndex() {
  return (
    <div>
      <Head>
        <title>Blogs | Virtual Trading Solution</title>
        <meta name="description" content="VTS Blockchain Engineers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="lg:t-max-w-[1400px] t-m-auto lg:t-px-16">
          <Landing data={BLOGS.landing} />
          <BlogList />
        </div>
      </div>
    </div>
  );
}
