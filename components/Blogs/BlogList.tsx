import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { useQuery } from "react-query";
import { BlogServiceInstance } from "@app/blog/services/BlogService";
import ParallaxTilt from "react-parallax-tilt";
import { AnimatePresence, motion } from "framer-motion";

export default function BlogList() {
  const [typeSelected, setTypeSelected] = React.useState("All");
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(4);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [mobileActiveItem, setMobileActiveItem] = React.useState<any>();

  const {
    data: blogData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["blogs", dataPerPage, page, typeSelected, searchValue], async () => {
    const blogs: any = await BlogServiceInstance.getBlogs({
      page: page,
      limit: dataPerPage,
      category: typeSelected === "All" ? "" : typeSelected,
      search: searchValue,
      active: true,
    });

    setTotalBlogs(blogs.meta.total);
    // console.log("blogs", totalBlogs);

    // group by category
    const groupedBlogs = blogs.data.reduce((acc: any, blog: any) => {
      // if (!acc[blog.category]) {
      //   acc[blog.category] = [];
      // }
      if (!acc["Combined"]) {
        acc["Combined"] = [];
      }
      acc["Combined"].push(blog);
      return acc;
    }, {});
    console.log("groupedBlogs", groupedBlogs);
    return groupedBlogs;
  });

  const renderPageNumbers = () => {
    let pages = 0;
    if (blogData) {
      pages = Math.ceil(totalBlogs / dataPerPage);
      // console.log("pages", pages);
    }

    return Array.from({ length: pages }, (_, index) => index + 1).map((pageNumber) => (
      <div
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className="t-grid t-grid-rows-2 t-cursor-pointer"
      >
        <div>{pageNumber}</div>
        {pageNumber === page && (
          <div className="t-h-[5px] t-w-[5px] t-bg-[#2B79D3] t-rounded t-justify-self-center"></div>
        )}
      </div>
    ));
  };

  const handleCategoryChange = (type: string) => {
    setTypeSelected(type);
    setPage(1);
    setMobileActiveItem(null);
  };

  return (
    <div>
      <div className="">
        <div className="lg:t-flex lg:t-justify-between t-grid t-gap-8 lg:t-gap-0 lg:t-mr-14 t-mx-8 t-mb-24">
          {/* this is search box div */}

          <div className="t-relative t-justify-self-center t-my-auto">
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
              className={`sm:t-w-[180px] t-font-[sans-regular] t-text-[16px] t-w-[280px] sm:t-py-1 t-py-3 t-pl-10 t-rounded-full t-border-[2px] t-border-[#2b79d386] t-bg-transparent t-text-[#000000] t-text-left t-text-[14px] placeholder:t-text-[#030627] t-outline-none font-poppins focus:t-border-[#2B79D3]`}
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>

          {/* this is the DESKTOP category div */}

          <div className="sm:t-flex t-hidden sm:t-gap-4 t-gap-1 t-flex-wrap t-justify-center t-bg-white t-rounded-full t-border t-border-[#2B79D3]">
            <span
              onClick={() => handleCategoryChange("All")}
              className={`${
                typeSelected === "All"
                  ? "t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE] t-text-[#ffffff]"
                  : "t-bg-white t-text-[#2B79D3]"
              } sm:t-px-6 t-px-4 t-py-1 t-rounded-full t-cursor-pointer t-font-[sans-regular]`}
            >
              All
            </span>
            <span
              onClick={() => handleCategoryChange("Blockchain")}
              className={`${
                typeSelected === "Blockchain"
                  ? "t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE] t-text-[#ffffff]"
                  : "t-bg-white t-text-[#2B79D3]"
              } sm:t-px-6 t-px-4 t-py-1 t-rounded-full t-cursor-pointer t-font-[sans-regular]`}
            >
              Blockchain
            </span>
            <span
              onClick={() => handleCategoryChange("Frontend")}
              className={`${
                typeSelected === "Frontend"
                  ? "t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE] t-text-[#ffffff]"
                  : "t-bg-white t-text-[#2B79D3]"
              } sm:t-px-6 t-px-4 t-py-1 t-rounded-full t-cursor-pointer t-font-[sans-regular]`}
            >
              Frontend
            </span>
            <span
              onClick={() => handleCategoryChange("Backend")}
              className={`${
                typeSelected === "Backend"
                  ? "t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE] t-text-[#ffffff]"
                  : "t-bg-white t-text-[#2B79D3]"
              } sm:t-px-6 t-px-4 t-py-1 t-rounded-full t-cursor-pointer t-font-[sans-regular]`}
            >
              Backend
            </span>
            <span
              onClick={() => handleCategoryChange("Database")}
              className={`${
                typeSelected === "Database"
                  ? "t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE] t-text-[#ffffff]"
                  : "t-bg-white t-text-[#2B79D3]"
              } sm:t-px-6 t-px-4 t-py-1 t-rounded-full t-cursor-pointer t-font-[sans-regular]`}
            >
              Database
            </span>
            <span
              onClick={() => handleCategoryChange("Others")}
              className={`${
                typeSelected === "Others"
                  ? "t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE] t-text-[#ffffff]"
                  : "t-bg-white t-text-[#2B79D3]"
              } sm:t-px-6 t-px-4 t-py-1 t-rounded-full t-cursor-pointer t-font-[sans-regular]`}
            >
              Others
            </span>
          </div>

          {/* this is the MOBILE category div */}

          <div className="sm:t-hidden t-block t-relative t-w-[63%] t-justify-self-center t-rounded-full">
            <div
              className="t-bg-white t-w-[100%] t-mx-[1%] t-px-7 t-absolute t-top-0 t-rounded-full t-border t-border-[#2B79D3]
                          t-flex t-justify-between"
              onClick={() => setMobileActiveItem(true)}
            >
              <p className="t-font-medium t-my-auto t-py-4 ">{typeSelected}</p>
              <motion.div className="t-my-auto">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L12.6667 15.6667L14.1637 17.0276C14.3544 17.201 14.6456 17.201 14.8363 17.0276L20 12"
                    stroke="#2B79D3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>

            <AnimatePresence>
              {mobileActiveItem && (
                <motion.div
                  className={`t-bg-white t-w-[100%] t-z-50 t-mx-[1%] t-px-7 t-absolute t-top-0 t-rounded-3xl t-border t-border-[#2B79D3]`}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  style={{ overflow: "hidden" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div
                    onClick={() => setMobileActiveItem(null)}
                    className="t-py-0 t-flex t-justify-between"
                  >
                    <p className="t-font-semibold t-my-auto t-py-4 t-text-blue-400 t-text-[18px]">
                      Blogs Category
                    </p>
                    <motion.div className="t-my-auto">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 16L15.3333 12.6667L13.8363 11.3058C13.6456 11.1324 13.3544 11.1324 13.1637 11.3058L8 16"
                          stroke="#2B79D3"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div
                    onClick={() => handleCategoryChange("All")}
                    className={`t-px-0 t-py-3 t-text-[17px] t-cursor-pointer t-border-t-2`}
                  >
                    All
                  </div>
                  <div
                    onClick={() => handleCategoryChange("Blockchain")}
                    className={`t-px-0 t-py-3 t-text-[17px] t-cursor-pointer t-border-t-2`}
                  >
                    Blockchain
                  </div>
                  <div
                    onClick={() => handleCategoryChange("Frontend")}
                    className={`t-px-0 t-py-3 t-text-[17px] t-cursor-pointer t-border-t-2`}
                  >
                    Frontend
                  </div>
                  <div
                    onClick={() => handleCategoryChange("Backend")}
                    className={`t-px-0 t-py-3 t-text-[17px] t-cursor-pointer t-border-t-2`}
                  >
                    Backend
                  </div>
                  <div
                    onClick={() => handleCategoryChange("Database")}
                    className={`t-px-0 t-py-3 t-text-[17px] t-cursor-pointer t-border-t-2`}
                  >
                    Database
                  </div>
                  <div
                    onClick={() => handleCategoryChange("Others")}
                    className={`t-px-0 t-py-3 t-text-[17px] t-cursor-pointer t-border-t-2 t-pb-4`}
                  >
                    Others
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {isLoading ? (
          <div className="t-my-20">
            <p className="t-text-center t-text-[24px] t-font-[plain-light]">Loading...</p>
          </div>
        ) : blogData && Object.keys(blogData).length === 0 ? (
          <div className="t-my-20">
            <p className="t-text-center t-text-[24px] t-font-[plain-light]">No blog found.</p>
          </div>
        ) : (
          blogData &&
          Object?.entries(blogData).map(([key, value]) => {
            const items = value as any[];
            return (
              <div key={key} className="t-mt-20 t-mb-12">
                <div
                  className={`t-flex t-flex-wrap t-gap-8 lg:t-gap-8 t-justify-center lg:t-justify-start`}
                >
                  {items.map((item, index) => (
                    // <ParallaxTilt
                    //   tiltMaxAngleX={20}
                    //   tiltMaxAngleY={20}
                    //   perspective={800}
                    //   glareEnable={true}
                    //   glareMaxOpacity={0}
                    //   scale={1.05}
                    //   key={index}
                    // >
                    <div key={index}>
                      <BlogCard blog={item} />
                    </div>
                    // </ParallaxTilt>
                  ))}
                </div>
              </div>
            );
          })
        )}

        <div className="t-mt-16 t-flex t-text-black t-justify-center t-mb-[80px] font-poppins t-gap-[24px]">
          {renderPageNumbers()}
        </div>
      </div>
    </div>
  );
}
