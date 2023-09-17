// import { AppointmentServiceInstance } from '@app/appointment/services/AppointmentService'
import { BlogServiceInstance } from "@app/blog/services/BlogService";
import dayjs from "dayjs";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

const BlogRow = ({ idx, data, refetch }: any) => {
  const router = useRouter();
  const toggleClass = "t-transform t-translate-x-5";

  const trimAndAppendDots = (inputString: string) => {
    if (inputString.length > 46) {
      return inputString.slice(0, 47) + " ...";
    }
    return inputString;
  };

  const updateStatus = async (id: string, status: boolean) => {
    await BlogServiceInstance.updateBlogStatus({
      id: id,
      is_active: status == true ? false : true,
    });
    refetch();
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/blogs/edit/${id}`);
  };

  return (
    <div
      className={`t-h-[60px] t-font-[sans-regular] t-mt-2 t-rounded-[5px] t-border-t 
                    t-border-gray-200 t-shadow-md ${
                      idx % 2 == 0 ? "t-bg-[#F7F4FE]" : "t-bg-white"
                    }`}
    >
      <div className="t-w-full t-grid t-grid-cols-8 t-pt-4 t-px-4">
        <span className="t-col-span-1">{data?.id}</span>
        <span className="t-col-span-3">{trimAndAppendDots(data?.title)}</span>
        <span className="t-col-span-1">{data?.category}</span>

        <span className="t-col-span-1">
          <div className="t-flex t-gap-1">
            {/* <p className="t-my-auto t-text-[] t-text-[12px]">Inactive</p> */}
            <div
              className={
                "t-w-11 t-h-6 t-flex t-items-center t-rounded-full t-p-0.5 t-cursor-pointer" +
                (data?.is_active ? " t-bg-[#a8d0fe]" : " t-bg-[#bdbdbd]")
              }
              onClick={() => {
                updateStatus(data?.id, data?.is_active);
              }}
            >
              {/* Switch */}
              <div
                className={
                  "t-h-5 t-w-5 t-rounded-full t-shadow-md t-transform t-duration-300 t-ease-in-out" +
                  (data?.is_active && toggleClass) +
                  (data?.is_active ? " t-bg-[#2B79D3]" : " t-bg-[#575757]")
                }
              ></div>
            </div>
            <p className="t-my-auto t-text-[14px]">Active</p>
          </div>
        </span>

        <span className="t-col-span-1">{moment(data?.created_at).format("MM/DD/YYYY")}</span>

        <span className="t-col-span-1">
          <div className="t-flex t-gap-2 t-cursor-pointer" onClick={() => handleEdit(data?.id)}>
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
        </span>
      </div>
    </div>
  );
};

const BlogCard = ({ data, refetch }: any) => {
  const router = useRouter();
  const toggleClass = "t-transform t-translate-x-5";

  const trimAndAppendDots = (inputString: string) => {
    if (inputString.length > 66) {
      return inputString.slice(0, 67) + " ...";
    }
    return inputString;
  };

  const updateStatus = async (id: string, status: boolean) => {
    await BlogServiceInstance.updateBlogStatus({
      id: id,
      is_active: status == true ? false : true,
    });
    refetch();
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/blogs/edit/${id}`);
  };

  return (
    <div className="t-h-[180px] t-bg-[#EDF5FD] t-rounded-[12px] t-p-4 t-my-4">
      <div className="t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">Serial:</span> <span className="t-opacity-100">{data?.id}</span>
        </p>
      </div>
      <div className="t-my-2 t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">Title:</span> <span className="t-opacity-100">{trimAndAppendDots(data?.title)}</span>
        </p>
      </div>
      <div className="t-my-2 t-flex t-justify-between t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">Category:</span> <span className="t-opacity-100">{data?.category}</span>
        </p>
        <p className="t-font-[sans-regular]">
          <span className="t-opacity-80">{"Date: "}</span>
          <span className="t-opacity-100">
            {moment(data?.created_at).format("MM/DD/YYYY")}
          </span>
        </p>
      </div>

      <div className="t-mt-4 t-flex t-justify-between">
        <div className="t-flex t-place-items-center t-gap-1">
          <p className="t-my-auto t-font-[sans-regular] t-opacity-80">{"Status: "}</p>
          <div
            className={
              "t-w-11 t-h-4 t-flex t-items-center t-rounded-full t-p-0.5 t-cursor-pointer t-font-[sans-regular]" +
              (data?.is_active ? " t-bg-[#a8d0fe]" : " t-bg-[#bdbdbd]")
            }
            onClick={() => {
              updateStatus(data?.id, data?.is_active);
            }}
          >
            {/* Switch */}
            <div
              className={
                "t-h-5 t-w-5 t-rounded-full t-shadow-md t-transform t-duration-300 t-ease-in-out" +
                (data?.is_active && toggleClass) +
                (data?.is_active ? " t-bg-[#2B79D3]" : " t-bg-[#575757]")
              }
            ></div>
          </div>
          <p className="t-my-auto t-text-[] t-text-[16px] t-font-[sans-regular]">Active</p>
        </div>

        <div className="t-flex t-gap-2 t-cursor-pointer" onClick={() => handleEdit(data?.id)}>
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
          <p className="t-text-[] t-text-[16px] t-font-[sans-regular]">Edit</p>
        </div>
      </div>
    </div>
  );
};

export default function BlogListV2() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [dataPerPage, setDataPerPage] = useState(10);
  const [typeSelected, setTypeSelected] = useState("");
  const categoryRefDesktop = React.useRef<any>();
  const categoryRefMobile = React.useRef<any>();

  const {
    data: blogData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["blogs", dataPerPage, typeSelected, page, searchValue], async () => {
    const blogs: any = await BlogServiceInstance.getBlogs({
      // page: page,
      // limit: dataPerPage,
      category: typeSelected === "Category" ? "" : typeSelected,
      search: searchValue,
      // active: true,
    });

    // console.log("BLOGS", blogs);
    console.log("Category: ", typeSelected);
    return blogs;
  });

  return (
    <>
      <div className="t-hidden lg:t-block t-border t-border-[#2B79D3] t-rounded-[7px] t-h-[calc(100vh-6rem)] t-overflow-y-auto t-p-1 t-pl-6">
        <div className="t-grid t-place-items-start t-mt-12 t-mb-10">
          <div>
            <p className="t-text-[#030627] t-text-[36px]">List of Blog Posts</p>
            <p className="t-mt-4 t-text-[16px] t-font-[sans-regular] t-leading-5">
              Manage all blog posts from here
            </p>
          </div>

          <div className="t-mt-6 t-w-full t-flex t-justify-between">
            <div className="t-flex t-gap-8">
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
                  className={`t-pl-10 t-rounded-[7px] t-border-[2px] t-bg-transparent t-border-[#2b79d386] t-py-1 t-w-[180px] t-text-[#000000] t-text-left t-text-[16px] t-font-[sans-regular] placeholder:t-text-[#030627] t-outline-none focus:t-border-[#2B79D3]`}
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              </div>

              <div className="t-relative t-flex t-justify-start t-font-[sans-regular]">
                <div>
                  <select
                    ref={categoryRefDesktop}
                    id="category"
                    onChange={() =>
                      categoryRefDesktop.current &&
                      setTypeSelected(categoryRefDesktop.current.value)
                    }
                    className="t-w-full t-py-1 t-px-6 t-border-2 t-border-[#2b79d386] t-bg-inherit t-rounded-md t-shadow-sm 
                                  focus:t-outline-none focus:t-ring focus:t-border-blue-300"
                  >
                    <option value="Category">Category</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Database">Database</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="t-flex t-mr-4">
              <span
                onClick={() => router.push("/admin/blogs/post")}
                className={`t-bg-[#2B79D3] t-text-[#ffffff] t-font-[sans-regular] t-px-6 t-pt-1.5 t-rounded-[7px] t-cursor-pointer`}
              >
                Create new Blog
              </span>
            </div>
          </div>
        </div>

        <div className="t-h-[60px] t-bg-[#EDF5FD] t-rounded-t-[7px] ">
          <div className="t-w-full t-grid t-grid-cols-8 t-pt-4 t-px-4 t-font-[sans-regular]">
            <span className="t-col-span-1">Serial</span>
            <span className="t-col-span-3">Title</span>
            <span className="t-col-span-1">Category</span>
            <span className="t-col-span-1">Status</span>
            <span className="t-col-span-1">Date</span>
            <span className="t-col-span-1"></span>
          </div>
        </div>

        {blogData?.data.map((data: any, index: number) => (
          <BlogRow key={index} idx={index} data={data} refetch={refetch} />
        ))}
      </div>

      {/* mobile view starts */}
      <div className="lg:t-hidden t-px-4 t-mt-4">
        <div className="t-relative t-grid t-place-items-start t-mt-12 t-mb-10">
          <div>
            <p className="t-text-[#030627] t-text-[28px] t-font-[600]">List of Blog Posts</p>
            <p className="t-mt-4 t-text-[13px] t-font-[500] t-leading-5">
              Manage all blog posts from here
            </p>
          </div>

          <div className="t-mt-4 t-w-full t-flex t-justify-between">
            <div className="t-flex t-gap-4">
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
                  className={`t-pl-8 t-rounded-[7px] t-border-[2px] t-bg-transparent t-border-[#2b79d386] t-py-1 sm:t-w-[150px] t-w-[100px] t-text-[#000000] t-text-left t-text-[14px] placeholder:t-text-[#030627] t-outline-none focus:t-border-[#2B79D3]`}
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              </div>

              <div>
                <select
                  ref={categoryRefMobile}
                  id="category"
                  onChange={() =>
                    categoryRefMobile.current && setTypeSelected(categoryRefMobile.current.value)
                  }
                  className="t-w-full t-py-1 t-px-3 t-border-2 t-border-[#2b79d386] t-bg-inherit t-rounded-md t-shadow-sm focus:t-outline-none focus:t-ring focus:t-border-blue-300"
                >
                  <option value="Category">Category</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Database">Database</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="t-absolute t-right-0 -t-bottom-9">
              <button
                onClick={() => router.push("/admin/blogs/post")}
                className={`t-bg-[#2B79D3] t-text-[#ffffff] sm:t-p-2 t-px-2 t-py-1 t-rounded-[7px] t-cursor-pointer`}
              >
                Create new Blog
              </button>
            </div>
          </div>
        </div>

        {blogData?.data.map((data: any, index: number) => (
          <BlogCard key={index} data={data} refetch={refetch} />
        ))}
      </div>
    </>
  );
}
