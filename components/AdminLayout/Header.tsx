import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useAdminAppContext } from "../../context/AdminAppContext";

export default function Header() {
  const router = useRouter();
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  const { isExpanded, setIsExpanded, mobileMenuOpen, setMobileMenuOpen } = useAdminAppContext();

  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (!dropDownRef.current?.contains(event.target)) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth/login");
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`t-fixed t-w-full ${
        isExpanded ? "lg:t-w-[calc(100vw-150px)]" : "lg:t-w-[calc(100vw-55px)] t-ml-[-15px]"
      } t-h-[60px] t-bg-[#DBECFF] t-pl-[30px] t-z-50`}
    >
      <div className="t-flex t-justify-between lg:t-px-8">
        <div className="t-mt-4">
          <div
            onClick={handleClick}
            className="t-hidden lg:t-grid t-cursor-pointer t-w-[28px] t-h-[28px] t-rounded-full t-bg-[#2B79D3] t-place-items-center"
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
          </div>

          <div
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:t-hidden t-w-[28px] t-h-[28px] t-rounded-full t-bg-[#2B79D3] t-grid t-place-items-center`}
          >
            {mobileMenuOpen ? (
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
            ) : (
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
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </div>
        </div>
        <div ref={dropDownRef} className="t-mt-4 t-pr-10 t-relative">
          <div
            onClick={() => setDropDownOpen(!dropDownOpen)}
            className="t-flex t-gap-2 t-cursor-pointer"
          >
            <img
              className=" t-my-auto t-w-[25px] t-h-[25px] t-rounded-full t-border-2 t-border-[#2B79D3]"
              src="/images/dummyUserImage.png"
              alt=""
            />
            <p className="t-text-[14px] t-text-[#2B79D3] t-font-[plain-medium]">Admin</p>
          </div>
          {dropDownOpen && (
            <div className="t-absolute t-top-[50px] t-right-[10px] t-z-[400] t-bg-[#ffffff]">
              <div className="t-h-[50px] t-w-[125px] t-rounded-[10px] t-border t-border-[#2B79D3]">
                <ul className="t-px-4 t-py-2">
                  {/* Buttons of admin navbar */}
                  {/* <li className="t-flex t-gap-2 t-py-1 t-cursor-pointer">
                    <svg
                      className="t-my-auto"
                      width="15"
                      height="15"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3.375C4 2.71196 4.26339 2.07607 4.73223 1.60723C5.20107 1.13839 5.83696 0.875 6.5 0.875C7.16304 0.875 7.79893 1.13839 8.26777 1.60723C8.73661 2.07607 9 2.71196 9 3.375C9 4.03804 8.73661 4.67393 8.26777 5.14277C7.79893 5.61161 7.16304 5.875 6.5 5.875C5.83696 5.875 5.20107 5.61161 4.73223 5.14277C4.26339 4.67393 4 4.03804 4 3.375ZM4 7.125C3.1712 7.125 2.37634 7.45424 1.79029 8.04029C1.20424 8.62634 0.875 9.4212 0.875 10.25C0.875 10.7473 1.07254 11.2242 1.42417 11.5758C1.77581 11.9275 2.25272 12.125 2.75 12.125H10.25C10.7473 12.125 11.2242 11.9275 11.5758 11.5758C11.9275 11.2242 12.125 10.7473 12.125 10.25C12.125 9.4212 11.7958 8.62634 11.2097 8.04029C10.6237 7.45424 9.8288 7.125 9 7.125H4Z"
                        fill="#2B79D3"
                      />
                    </svg>
                    <span className="t-text-[#2B79D3] t-text-[14px] t-font-[plain-light]">
                      Profile
                    </span>
                  </li>
                  <li className="t-flex t-gap-2 t-py-1 t-cursor-pointer">
                    <svg
                      className="t-my-auto"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.5 10.625C5.83152 10.625 6.14946 10.4933 6.38388 10.2589C6.6183 10.0245 6.75 9.70652 6.75 9.375C6.75 9.04348 6.6183 8.72554 6.38388 8.49112C6.14946 8.2567 5.83152 8.125 5.5 8.125C5.16848 8.125 4.85054 8.2567 4.61612 8.49112C4.3817 8.72554 4.25 9.04348 4.25 9.375C4.25 9.70652 4.3817 10.0245 4.61612 10.2589C4.85054 10.4933 5.16848 10.625 5.5 10.625ZM9.25 5C9.58152 5 9.89946 5.1317 10.1339 5.36612C10.3683 5.60054 10.5 5.91848 10.5 6.25V12.5C10.5 12.8315 10.3683 13.1495 10.1339 13.3839C9.89946 13.6183 9.58152 13.75 9.25 13.75H1.75C1.41848 13.75 1.10054 13.6183 0.866116 13.3839C0.631696 13.1495 0.5 12.8315 0.5 12.5V6.25C0.5 5.91848 0.631696 5.60054 0.866116 5.36612C1.10054 5.1317 1.41848 5 1.75 5H2.375V3.75C2.375 2.9212 2.70424 2.12634 3.29029 1.54029C3.87634 0.95424 4.6712 0.625 5.5 0.625C5.91038 0.625 6.31674 0.705831 6.69589 0.862876C7.07503 1.01992 7.41953 1.25011 7.70971 1.54029C7.99989 1.83047 8.23008 2.17497 8.38712 2.55411C8.54417 2.93326 8.625 3.33962 8.625 3.75V5H9.25ZM5.5 1.875C5.00272 1.875 4.52581 2.07254 4.17417 2.42417C3.82254 2.77581 3.625 3.25272 3.625 3.75V5H7.375V3.75C7.375 3.25272 7.17746 2.77581 6.82583 2.42417C6.47419 2.07254 5.99728 1.875 5.5 1.875Z"
                        fill="#2B79D3"
                      />
                    </svg>
                    <span className="t-text-[#2B79D3] t-text-[14px] t-font-[plain-light]">
                      Password
                    </span>
                  </li> */}
                  <li onClick={handleLogout} className="t-flex t-gap-2 t-py-1 t-cursor-pointer">
                    <svg
                      className="t-my-auto"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 11.5C5.17392 11.5 3.90215 10.9732 2.96447 10.0355C2.02678 9.09785 1.5 7.82608 1.5 6.5C1.5 5.17392 2.02678 3.90215 2.96447 2.96447C3.90215 2.02678 5.17392 1.5 6.5 1.5"
                        stroke="#EF5D6F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.25 6.5H11.5M11.5 6.5L9.625 4.625M11.5 6.5L9.625 8.375"
                        stroke="#EF5D6F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="t-text-[#EF5D6F] t-text-[14px] t-font-[plain-light]">
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
