import React from "react";
import styles from "@styles/Blog.module.css";
import { useRouter } from "next/router";
import config from "@config/app-config";
import { removeDoubleSlashFromUrl } from "utils/removeSlashFromUrl";

const handleTags = (tags: string) => {
  return tags?.split(",").map((tag: string) => {
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return formattedDate;
};

export default function BlogCard({ blog }: { blog: any }) {
  const router = useRouter();
  return (
    <div>
      <div
        onClick={() => router.push(`/blogs/${blog?.id}`)}
        className={`t-w-[280px] t-h-[400px] t-rounded-3xl t-p-3 t-shadow-[0px_1px_10px_1px_rgba(0,0,0,0.1)] t-relative 
                    t-bg-white t-cursor-pointer hover:t-border hover:t-border-[#2B79D3]`}
      >
        <img
          className="t-w-full t-h-[170px] t-p-2 t-rounded-3xl"
          src={removeDoubleSlashFromUrl(blog?.image)}
          alt="blogImage"
        />
        <div className="t-px-2">
          <p className="t-text-[12px] t-text-[#2B79D3] t-py-0 t-flex t-gap-1">
            {`${blog?.category} | `}{" "}
            <span className="t-text-black">{formatDate(blog?.created_at)}</span>
          </p>
          <p
            className="t-text-[#030627] t-text-[20px] t-font-[sans-bold] t-leading-6 t-py-2
                      t-text-transparent t-bg-clip-text t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]"
          >
            {blog?.title.slice(0, 50)} {blog?.title.length > 50 && "..."}
          </p>
          <div className={styles.textShadow}>
            <div className="t-text-[12px] t-text-[#000000]">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.description.slice(0, 200) + "...",
                }}
              />
            </div>
          </div>
          <div className="t-absolute t-bottom-3 t-right-5">
            <div className="t-flex t-place-items-center t-gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.75 1.50498C12.8812 2.15812 13.8222 3.09537 14.4799 4.22396C15.1375 5.35254 15.489 6.63331 15.4996 7.93949C15.5101 9.24566 15.1794 10.5319 14.54 11.671C13.9007 12.8101 12.9749 13.7624 11.8544 14.4337C10.7339 15.1051 9.45753 15.4721 8.15157 15.4985C6.84562 15.525 5.55541 15.2099 4.40867 14.5844C3.26192 13.959 2.2984 13.0449 1.6135 11.9326C0.928597 10.8204 0.546057 9.54851 0.50375 8.24298L0.5 7.99998L0.50375 7.75698C0.545752 6.46172 0.922661 5.19945 1.59773 4.09323C2.2728 2.987 3.22299 2.07457 4.35567 1.44489C5.48835 0.815215 6.76486 0.489778 8.06075 0.500309C9.35665 0.510839 10.6277 0.856979 11.75 1.50498ZM8 3.49998C7.8163 3.5 7.639 3.56745 7.50172 3.68952C7.36444 3.81159 7.27674 3.97979 7.25525 4.16223L7.25 4.24998V7.99998L7.25675 8.09823C7.27385 8.22835 7.3248 8.35171 7.4045 8.45598L7.46975 8.53098L9.71975 10.781L9.79025 10.8425C9.92178 10.9445 10.0835 10.9999 10.25 10.9999C10.4165 10.9999 10.5782 10.9445 10.7098 10.8425L10.7802 10.7802L10.8425 10.7097C10.9445 10.5782 10.9999 10.4165 10.9999 10.25C10.9999 10.0835 10.9445 9.92176 10.8425 9.79023L10.7802 9.71973L8.75 7.68873V4.24998L8.74475 4.16223C8.72326 3.97979 8.63556 3.81159 8.49828 3.68952C8.361 3.56745 8.1837 3.5 8 3.49998Z"
                  fill="#277AF7"
                />
              </svg>

              <p className="t-my-auto t-text-[12px] t-text-[#2B79D3]">
                {blog?.reading_time} min read
              </p>
            </div>
          </div>
          <div className="t-absolute t-bottom-3 t-left-5">
            <button
              onClick={() => router.push(`/blogs/${blog?.id}`)}
              className="t-my-auto t-text-[12px] t-bg-[#2B79D3] t-rounded-2xl t-px-3 t-py-2
              t-border hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff]"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
