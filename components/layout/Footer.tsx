import React from "react";
import { FOOTER_LOGO, FOOTER_LOGO_ALT } from "@constants/globals";
import Image from "next/image";
import Link from "next/link";
import { FOOTER } from "@contents/footer";
import { NAV_LOGO, NAV_LOGO_ALT } from "@constants/globals";
import { NAV_ITEMS } from "@constants/navItems";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const str = FOOTER.description;
  let splitDescriptionArray = str.split(',');

  const handleContactClick = () => { };

  return (
    <div className="t-bg-[url('/images/footerMobileBg.png')] lg:t-bg-[url('/images/footerBg.png')] t-bg-cover t-bg-no-repeat t-w-[100%]">
      <div className="lg:t-max-w-[1400px] t-m-auto t-px-8 lg:t-px-16 t-pt-28 sm:t-pt-48 lg:t-pt-28">
        <div className="t-grid t-grid-cols-2 lg:t-grid-cols-6 t-pb-0">
          <div className="t-col-span-2">
            <div className="t-my-auto t-cursor-pointer t-flex t-gap-2">
              <Link href="/">
                <Image src={NAV_LOGO} alt={NAV_LOGO_ALT} width={55} height={50} />
              </Link>
              <Link href="/">
                <p className="t-text-[#277AF7] t-text-[22px] t-font-[sans-bold] t-mt-2">VTS Blockchain Engineers</p>
              </Link>
            </div>
            <p className="t-ml-2 t-text-[16px] t-mt-5 t-text-[#25252680] t-font-[sans-regular]">
              <span className="t-capitalize">{splitDescriptionArray[0]}</span>
              <br />
              <span className="t-capitalize"> {splitDescriptionArray[1]}</span>
            </p>

            <div className="t-flex t-gap-4 t-ml-2 t-mt-4">
              <Link href="https://www.linkedin.com/company/v-t-solutions">
                <a target="_blank">
                  <img className="t-cursor-pointer" src="/images/linkedin.svg" alt="linkedin" />
                </a>
              </Link>
              <Link href="https://discord.gg/23aNkjDxxK">
                <a target="_blank">
                  <img className="t-cursor-pointer" src="/images/discord.svg" alt="discord" />
                </a>
              </Link>
            </div>
          </div>
          <div className="t-col-span-4 ">
            <div className="t-block lg:t-hidden t-mt-8"></div>
            <div className="t-grid lg:t-grid-cols-3 t-grid-cols-1 t-gap-y-4 lg:t-gap-0 t-mt-6 lg:t-mt-2">
              {FOOTER.INFO?.map((item, index) => (
                <div key={index} className="t-col-span-1">
                  <p className="t-text-[20px] t-text-[#277AF7] t-font-[sans-bold]">
                    {item.title}
                  </p>
                  <ul className="t-mt-4">
                    {item?.links?.map((link: any, index: number) => (
                      <li key={index} className="">
                        <Link href={link?.link}>
                          <div className="t-flex t-gap-2">
                            {link.icon && (
                              <div
                                className={`t-mt-0 ${link?.title.startsWith("1050") && "t-ml-1"}`}
                                dangerouslySetInnerHTML={{ __html: link.icon }}
                              ></div>
                            )}
                            <div
                              className="t-text-[#25252680] t-font-[sans-regular] t-text-[17px] t-mb-2 t-cursor-pointer"
                              dangerouslySetInnerHTML={{ __html: link?.title }}
                            ></div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* <div className="t-border t-border-gray-300 t-mt-0"></div> */}

            <div className="t-mt-4">
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className="">
                  {item?.childrenItems && item.childrenItems.length > 0 && (
                    <div className="">
                      <p className="t-text-[20px] t-text-[#2B79D3] t-font-[500] t-mt-6 t-mb-2">
                        {item?.content}
                      </p>
                      <div className="t-grid t-grid-cols-2 sm:t-grid-cols-3 lg:t-grid-cols-4 t-gap-4 sm:t-gap-2">
                        {item?.childCategory &&
                          item.childrenItems.map((child, index) =>
                            child?.childrenItems?.map((childItem, index) => (
                              <div key={index} className="t-col-span-1">
                                <Link href={childItem?.href}>
                                  <span className="t-text-gray-500 t-text-[14px] t-mb-1 t-cursor-pointer">
                                    {childItem?.content}
                                  </span>
                                </Link>
                              </div>
                            ))
                          )}
                        {!item?.childCategory &&
                          item.childrenItems.map((child, index) => (
                            <div key={index} className="t-col-span-1">
                              <span className="t-text-gray-500 t-text-[14px] t-mb-1 t-cursor-pointer">
                                {child?.content}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="t-mt-6 t-hidden lg:t-flex t-justify-center">
          <svg
            width={1000}
            height={2}
            viewBox="0 0 1304 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <path
              d="M1 1L1303 1.00011"
              stroke="url(#paint0_linear_627_922)"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_627_922"
                x1={1.00002}
                y1={1.49888}
                x2={1311.96}
                y2={23.1155}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#277AF7" stopOpacity={0} />
                <stop offset={0.4991} stopColor="#277AF7" />
                <stop offset={1} stopColor="#277AF7" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="t-mt-6 lg:t-hidden t-flex t-justify-center">
          <svg
            width={360}
            height={2}
            viewBox="0 0 412 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

          >
            <path
              d="M0 1H412"
              stroke="url(#paint0_linear_627_816)"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_627_816"
                x1={0.00000582816}
                y1={1.49888}
                x2={414.937}
                y2={3.66391}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#277AF7" stopOpacity={0} />
                <stop offset={0.4991} stopColor="#277AF7" />
                <stop offset={1} stopColor="#277AF7" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="t-pt-4 t-pb-3 t-flex t-justify-center">
          <span className="t-text-gray-500 t-text-[15px]">
            © {new Date().getFullYear()}{" "}
            <Link href="/">
              <a className="t-text-[#277AF7] t-font-[sans-bold]">
                VTS
              </a>
            </Link>
            . All rights reserved.
          </span>
        </div>
      </div>
    </div >
  );
}
