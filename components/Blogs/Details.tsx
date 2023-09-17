import config from "@config/app-config";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BlogContent from "./BlogContent";
import styles from "@styles/Blog.module.css";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { parseRelativeUrl } from "utils/url.utils";
import { removeDoubleSlashFromUrl, getFrontendUrl } from "utils/removeSlashFromUrl";


function extractH1UsingRegex(htmlString: string): any {
  const regex = /<h2>(.*?)<\/h2>/gs;

  let matches;
  const h2TextArray = [];

  while ((matches = regex.exec(htmlString)) !== null) {
    const h2Text = matches[1].replace(/<\/?[^>]+(>|$)/g, "").trim(); // Extract and trim the text inside <h2> and remove HTML tags
    h2TextArray.push(h2Text);
  }
}

export default function Details({ blogData }: { blogData: any }) {
  console.log("BLOG DATA", blogData);
  const router = useRouter();
  const result = extractH1UsingRegex(blogData?.description);
  const [hashValue, setHashValue] = React.useState<string>("");

  useEffect(() => {
    if (router.asPath !== router.route) {
      setHashValue(router.asPath.split("#")[1]);
    }
  }, [router]);

  return (
    <div className="t-px-8 lg:t-px-0">
      <div className="t-my-2 lg:t-my-8 t-grid">
        <div className="t-flex t-gap-x-4 t-mb-4  t-font-[sans-regular]">
          <p
            className="t-text-[#2B79D3] hover:t-underline t-cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </p>
          <p className="t-text-[#2B79D3]"> {`>`} </p>
          <p
            className="t-text-[#2B79D3] hover:t-underline t-cursor-pointer"
            onClick={() => router.push("/blogs")}
          >
            {" "}
            Blogs{" "}
          </p>
          <p className="t-text-[#2B79D3]"> {`>`} </p>
          <p className="t-text-[#2B79D3]">{blogData?.title} </p>
        </div>
        <p
          className="t-text-[24px] lg:t-text-[35px]  t-font-[sans-bold] t-my-auto t-text-left lg:t-leading-12
                        t-text-transparent t-bg-clip-text t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]"
        >
          {blogData?.title}
        </p>
        <p className="t-text-[16px] t-text-[#2B79D3] t-mt-2  t-font-[sans-regular]">
          {`${blogData?.category} | `}
          <span style={{ color: "black" }}>
            {moment(blogData?.created_at).format("MM/DD/YYYY")}
          </span>
        </p>
      </div>

      {/* table of contents */}
      <div className={``}>
        <div className="t-flex t-justify-center lg:t-justify-center t-flex-wrap lg:t-flex-nowrap lg:t-mt-10">
          <div className="">
            <img
              className="t-w-[370px] md:t-w-full t-h-[220px] md:t-h-[300px] t-rounded-[7px] t-my-4 md:t-mt-0"
              src={removeDoubleSlashFromUrl(blogData?.image)}
              alt="blogImage"
            />
          </div>
          {/* <div
            className="t-w-[270px] t-mt-4 lg:t-mr-20 lg:t-mt-0 t-bg-white t-border t-border-[#2B79D3] 
                            t-rounded-xl"
          >
            <div className="t-border-[#bfdcfd] t-p-4">
              <p className="t-text-[#2B79D3] t-text-[20px] t-font-[500]">Table of Content</p>

              <div className="t-flex t-justify-center t-my-2">
                <svg
                  width="270"
                  height="2"
                  viewBox="0 0 188 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.65039 0.672974H187.143"
                    stroke="url(#paint0_linear_155_820)"
                    strokeWidth="1.32495"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_155_820"
                      x1="1.65039"
                      y1="1.17186"
                      x2="188.469"
                      y2="1.61072"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#277AF7" stopOpacity="0" />
                      <stop offset="0.4991" stopColor="#277AF7" />
                      <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                {
                  result?.map((item: any, index: number) =>
                    <div key={index} className="t-my-3">
                      <p
                        className={`t-border-l t-border-[#2B79D3] t-text-[#277AF7] t-pl-4 t-text-[15px] t-py-2 t-rounded-r-[3px] t-cursor-pointer ${hashValue === key && "t-bg-[#DBECFF] "
                          } hover:t-bg-[#DBECFF]`}
                      >
                        {item}
                      </p>
                    </div>
                  )
                }
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <BlogContent data={blogData?.description} content={result} id={blogData?.id} />

      <svg
        width="90%"
        height="2"
        viewBox="0 0 1304 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H1303"
          stroke="url(#paint0_linear_155_869)"
          strokeWidth="1.32495"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_155_869"
            x1="1.00002"
            y1="1.49888"
            x2="1311.96"
            y2="23.1154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#277AF7" stopOpacity="0" />
            <stop offset="0.4991" stopColor="#277AF7" />
            <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* share buttons */}
      <div className="t-grid t-place-items-center t-my-10">
        <p className="t-text-[#1B1617] t-text-[22px] t-font-[sans-regular]">Share</p>
        <div className="t-mt-6 t-flex t-gap-3">
          <LinkedinShareButton
            url={getFrontendUrl(`/blogs/${blogData?.id}`)}
            title={blogData?.title}
          >
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_155_856)">
                <path
                  d="M28.4349 43.2929C38.2991 43.2929 46.2956 35.2964 46.2956 25.4322C46.2956 15.568 38.2991 7.57153 28.4349 7.57153C18.5707 7.57153 10.5742 15.568 10.5742 25.4322C10.5742 35.2964 18.5707 43.2929 28.4349 43.2929Z"
                  fill="#EFEBFB"
                />
                <path
                  d="M28.4328 4C16.638 4 7 13.6515 7 25.4328C7 37.2141 16.6515 46.8656 28.4328 46.8656C40.2141 46.8656 49.8656 37.2141 49.8656 25.4328C49.8656 13.6515 40.2276 4 28.4328 4ZM22.5422 36.1492H18.0804V21.8607H22.5422V36.1492ZM20.2236 19.8926C18.7948 19.8926 17.7164 18.639 17.7164 17.3854C17.7164 15.9565 18.7948 14.7029 20.2236 14.7029C21.6525 14.7029 22.7309 15.7813 22.7309 17.2102C22.8926 18.639 21.6525 19.8926 20.2236 19.8926ZM39.1492 36.1492H34.6874V29.1802C34.6874 27.5761 34.6874 25.4328 32.3689 25.4328C30.0504 25.4328 29.6864 27.2256 29.6864 29.1802V36.3245H25.2246V22.0359H29.5112V24.004C30.0504 22.9256 31.4792 21.6855 33.7978 21.6855C38.2596 21.6855 39.1627 24.7184 39.1627 28.4793V36.1492H39.1492Z"
                  fill="url(#paint0_linear_155_856)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_155_856"
                  x="0.420647"
                  y="0.710323"
                  width="56.0239"
                  height="56.0243"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.28968" />
                  <feGaussianBlur stdDeviation="3.28968" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.152941 0 0 0 0 0.478431 0 0 0 0 0.968627 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_856"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.822419" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.152941 0 0 0 0 0.478431 0 0 0 0 0.968627 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_155_856"
                    result="effect2_dropShadow_155_856"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_155_856"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_155_856"
                  x1="28.4328"
                  y1="4"
                  x2="28.4328"
                  y2="46.8656"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3191FF" />
                  <stop offset="1" stopColor="#0A4EFE" />
                </linearGradient>
              </defs>
            </svg>
          </LinkedinShareButton>

          <TwitterShareButton url={getFrontendUrl(`/blogs/${blogData?.id}`)}>
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_155_861)">
                <path
                  d="M29.1438 47C40.9808 47 50.5766 37.3742 50.5766 25.5C50.5766 13.6259 40.9808 4 29.1438 4C17.3067 4 7.71094 13.6259 7.71094 25.5C7.71094 37.3742 17.3067 47 29.1438 47Z"
                  fill="url(#paint0_linear_155_861)"
                  stroke="#EEEAFA"
                  strokeWidth="0.41121"
                  strokeMiterlimit="10"
                />
                <path
                  d="M17.7704 14L27.2109 26.6621L17.7109 36.9571H19.8492L28.1666 27.9435L34.8865 36.9571H42.1625L32.1907 23.5828L41.0333 14H38.895L31.2354 22.3011L25.0464 14H17.7704ZM20.9148 15.5798H24.2573L39.0177 35.3773H35.6752L20.9148 15.5798Z"
                  fill="#EEEAFA"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_155_861"
                  x="0.926506"
                  y="0.504757"
                  width="56.4341"
                  height="56.57"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.28968" />
                  <feGaussianBlur stdDeviation="3.28968" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.152941 0 0 0 0 0.478431 0 0 0 0 0.968627 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_861"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.822419" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.152941 0 0 0 0 0.478431 0 0 0 0 0.968627 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_155_861"
                    result="effect2_dropShadow_155_861"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_155_861"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_155_861"
                  x1="29.1438"
                  y1="4"
                  x2="29.1438"
                  y2="47"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3191FF" />
                  <stop offset="1" stopColor="#0A4EFE" />
                </linearGradient>
              </defs>
            </svg>
          </TwitterShareButton>

          <FacebookShareButton
            url={getFrontendUrl(`/blogs/${blogData?.id}`)}
            quote={blogData?.title}
          >
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_155_865)">
                <path
                  d="M28.2109 4C16.3289 4 6.71094 13.6179 6.71094 25.5C6.71094 37.3821 16.3289 47 28.2109 47C40.093 47 49.7109 37.3821 49.7109 25.5C49.7109 13.6179 40.0749 4 28.2109 4ZM34.5323 17.0413C34.5323 17.0413 32.395 17.0413 31.5437 17.0413C30.4932 17.0413 30.2758 17.476 30.2758 18.5628C30.2758 19.4684 30.2758 21.1891 30.2758 21.1891H34.5323L34.1157 25.8079H30.2577V39.6281H24.7333V25.8623H21.8533V21.171H24.7333C24.7333 21.171 24.7333 20.5008 24.7333 17.476C24.7333 14.0164 26.5989 12.2051 30.6924 12.2051C31.3626 12.2051 34.5142 12.2051 34.5142 12.2051L34.5323 17.0413Z"
                  fill="url(#paint0_linear_155_865)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_155_865"
                  x="0.131584"
                  y="0.710323"
                  width="56.1587"
                  height="56.1587"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3.28968" />
                  <feGaussianBlur stdDeviation="3.28968" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.152941 0 0 0 0 0.478431 0 0 0 0 0.968627 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_155_865"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.822419" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.152941 0 0 0 0 0.478431 0 0 0 0 0.968627 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_155_865"
                    result="effect2_dropShadow_155_865"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_155_865"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_155_865"
                  x1="28.2109"
                  y1="4"
                  x2="28.2109"
                  y2="47"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3191FF" />
                  <stop offset="1" stopColor="#0A4EFE" />
                </linearGradient>
              </defs>
            </svg>
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
}
