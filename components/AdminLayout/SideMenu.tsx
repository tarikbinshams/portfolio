import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import { ADMIN_NAV_ITEMS } from "@constants/adminNavItems";
import { useAdminAppContext } from "../../context/AdminAppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminSideMenu() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState("");
  const { isExpanded, mobileMenuOpen, setMobileMenuOpen } = useAdminAppContext();
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  const handleItem = (item: any) => {
    if (item.childrenItems?.length === 0) {
      router.push(item.href);
    } else {
      if (item.content == activeItem) {
        setActiveItem("");
      } else {
        setActiveItem(item.content);
      }
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setActiveItem("");
      setMobileMenuOpen(false);
    });
  }, [router]);

  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!mobileMenuRef.current?.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="t-hidden lg:t-block t-relative">
        {isExpanded && (
          <div className="t-fixed t-w-[180px] t-h-[calc(100vh-2px)] t-bg-[#DBECFF] t-rounded-r-[35px] t-p-4 t-border-y-[0.10rem] t-border-r-[0.10rem] t-border-[#2B79D3]">
            <div className="">
              <Image
                onClick={() => router.push("/")}
                className="t-cursor-pointer"
                src="/images/vts_logo.png"
                width={60}
                height={60}
                alt="logo"
              />
            </div>

            <div className="t-mt-4">
              {ADMIN_NAV_ITEMS.map((item, index) => (
                <div key={index} className="">
                  <div
                    onClick={() => handleItem(item)}
                    className={`t-flex t-gap-2 t-cursor-pointer ${
                      router.pathname === item.href && "t-bg-[#C9E2FF]"
                    } hover:t-bg-[#C9E2FF] t-pt-1 t-pb-1.5 t-px-5 t-mt-2 t-rounded-[10px]`}
                  >
                    <div className="">
                      {/* dangerously html */}
                      <div
                        className={`
                                        t-mt-[5px]
                                        `}
                        dangerouslySetInnerHTML={{ __html: item?.icon }}
                      />
                    </div>
                    <div className="t-flex t-justify-between t-w-full">
                      <p className="t-text-[15px] t-font-[plain-medium] t-text-[#2B79D3]">
                        {item.content}
                      </p>
                      {item.childrenItems && item.childrenItems?.length > 0 && (
                        <div className="">
                          {item.content === activeItem ? (
                            <svg
                              className="t-mt-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#2B79D3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 15l-6-6-6 6" />
                            </svg>
                          ) : (
                            <svg
                              className="t-mt-1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#2B79D3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  {item.content === activeItem && (
                    <div className="t-text-[12px] t-font-[plain-medium] t-pl-7">
                      {item.childrenItems?.map((childItem, index) => (
                        <div
                          onClick={() => handleItem(childItem)}
                          key={index}
                          className="t-border-l t-border-[#2B79D3] t-cursor-pointer t-text-[#2B79D3] t-py-1 hover:t-bg-[#C9E2FF] t-pl-4 t-rounded-r-[10px]"
                        >
                          {childItem.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!isExpanded && (
          <div className="t-fixed t-w-[80px] t-h-[calc(100vh-2px)] t-bg-[#DBECFF] t-rounded-r-[35px] t-p-4">
            <div className="">
              <Image
                onClick={() => router.push("/")}
                className="t-cursor-pointer"
                src="/images/vts_logo.png"
                width={60}
                height={60}
                alt="logo"
              />
            </div>

            <div className="t-mt-4 t-grid t-place-items-center">
              {ADMIN_NAV_ITEMS.map((item, index) => (
                <div key={index} className="">
                  <div
                    onClick={() => handleItem(item)}
                    className={`t-flex t-gap-2 t-cursor-pointer ${
                      router.pathname === item.href && "t-bg-[#C9E2FF]"
                    } hover:t-bg-[#C9E2FF] t-p-3 t-my-1 t-rounded-[10px]`}
                  >
                    <div className={``} dangerouslySetInnerHTML={{ __html: item?.icon }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {mobileMenuOpen && (
        <div className="t-bg-[#0e0e0e79] t-fixed t-top-0 t-left-0 t-right-0 t-bottom-0 t-z-40 t-w-full t-overflow-x-hidden t-overflow-y-auto t-inset-0 t-h-[calc(100%)] t-max-h-full">
          <div ref={mobileMenuRef} className="lg:t-hidden t-absolute t-left-0 t-top-0 t-z-50">
            <div className="t-w-[180px] t-h-[calc(100vh)] t-bg-[#DBECFF] t-rounded-r-[35px] t-p-4 t-border-y-[0.10rem] t-border-r-[0.10rem] t-border-[#2B79D3]">
              <div className="">
                <Image
                  onClick={() => router.push("/")}
                  className="t-cursor-pointer"
                  src="/images/vts_logo.png"
                  width={60}
                  height={60}
                  alt="logo"
                />
              </div>

              <div className="t-mt-4">
                {ADMIN_NAV_ITEMS.map((item, index) => (
                  <div key={index} className="">
                    <div
                      onClick={() => handleItem(item)}
                      className={`t-flex t-gap-2 t-cursor-pointer ${
                        router.pathname === item.href && "t-bg-[#C9E2FF]"
                      } hover:t-bg-[#C9E2FF] t-pt-1 t-pb-1.5 t-px-5 t-mt-2 t-rounded-[10px]`}
                    >
                      <div className="">
                        <div
                          className={`
                                        t-mt-[5px]
                                        `}
                          dangerouslySetInnerHTML={{ __html: item?.icon }}
                        />
                      </div>
                      <div className="t-flex t-justify-between t-w-full">
                        <p className="t-text-[15px] t-font-[plain-medium] t-text-[#2B79D3]">
                          {item.content}
                        </p>
                        {item.childrenItems && item.childrenItems?.length > 0 && (
                          <div className="">
                            {item.content === activeItem ? (
                              <svg
                                className="t-mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#2B79D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 15l-6-6-6 6" />
                              </svg>
                            ) : (
                              <svg
                                className="t-mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#2B79D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {item.content === activeItem && (
                      <div className="t-text-[12px] t-font-[plain-medium] t-pl-7">
                        {item.childrenItems?.map((childItem, index) => (
                          <div
                            onClick={() => handleItem(childItem)}
                            key={index}
                            className="t-border-l t-border-[#2B79D3] t-cursor-pointer t-text-[#2B79D3] t-py-1 hover:t-bg-[#C9E2FF] t-pl-4 t-rounded-r-[10px]"
                          >
                            {childItem.content}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:t-hidden t-z-50 t-absolute t-left-[180px] t-top-[18px] t-w-[28px] t-h-[28px] t-rounded-full t-bg-[#2B79D3] t-grid t-place-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
