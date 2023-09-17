import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { NAV_LOGO, NAV_LOGO_ALT } from "@constants/globals";
import { NAV_ITEMS } from "@constants/navItems"
import ComingSoon from "@components/common/ComingSoonModal";
import {toast} from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const [routeExist, setRouteExist] = React.useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = React.useState<any>(null);
  const [activeLink, setActiveLink] = React.useState<any>(null);
  const [mobileMenuActive, setMobileMenuActive] = React.useState<boolean>(false);

  const [mobileActiveItem, setMobileActiveItem] = React.useState<any>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleDesktopItemHover = (item: any) => {
    setHoveredItem(item);
  };

  const handleItemHoverExit = () => {
    setHoveredItem(null);
  }

  const handleMobileMenu = (state: boolean) => {
    setMobileMenuActive(state);
    setMobileActiveItem(null);
  };

  const handleMobileActiveItem = (item: any) => {
    setMobileActiveItem(item);
  };

  useEffect(() => {
    if (router.pathname === '/blogs') {
      setActiveLink('/blogs');
      return;
    }
    if (router.asPath.includes('#')) {
      setActiveLink(router.asPath.substring(1));
      return;
    }
    if (router.pathname === '/') {
      setActiveLink('/');
      return;
    }
  }, [router]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setHoveredItem(null);
      setMobileActiveItem(null);
      setMobileMenuActive(false);
    });
  }, [router]);

  const handleMobileNavItem = (item: any) => {
    if (item?.childrenItems.length < 1) {
      router.push(item.href);
      return;
    }
    if (item.childrenItems && item.childrenItems.length > 0) {
      handleMobileActiveItem(item);
    }
  };

  const handleDesktopNavItem = async (item: any) => {
    if (router.pathname === '/blogs' && item.href !== '/blogs') {
      router.replace('/');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push(item.href);
    } else {
      router.push(item.href);
    }
  }

  return (
    <Fragment>
      {/* Mobile Navbar starts here */}

      {
        mobileMenuActive &&
        <div className="t-absolute t-z-30 t-top-[0px]">
          <div className="t-bg-[#ffffff] t-w-[100vw] t-h-[640px] t-rounded-[26px] t-px-8">
            <div className="t-flex t-justify-between t-h-[86px]">
              <div className="t-mt-[11px] t-cursor-pointer ">
                <Link href="/">
                  <Image
                    src={NAV_LOGO}
                    alt={NAV_LOGO_ALT}
                    width={55}
                    height={50}
                  />
                </Link>
              </div>
              <div
                onClick={() => handleMobileMenu(false)}
                className="t-mt-[22px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <path d="M23.115 7.37753C22.9994 7.26165 22.862 7.16971 22.7108 7.10698C22.5596 7.04426 22.3975 7.01197 22.2338 7.01197C22.0701 7.01197 21.908 7.04426 21.7567 7.10698C21.6055 7.16971 21.4682 7.26165 21.3525 7.37753L15.24 13.4775L9.12753 7.36503C9.0118 7.2493 8.87441 7.1575 8.7232 7.09487C8.572 7.03224 8.40994 7 8.24628 7C8.08261 7 7.92055 7.03224 7.76935 7.09487C7.61814 7.1575 7.48075 7.2493 7.36503 7.36503C7.2493 7.48075 7.1575 7.61814 7.09487 7.76935C7.03224 7.92055 7 8.08261 7 8.24628C7 8.40994 7.03224 8.572 7.09487 8.7232C7.1575 8.87441 7.2493 9.0118 7.36503 9.12753L13.4775 15.24L7.36503 21.3525C7.2493 21.4682 7.1575 21.6056 7.09487 21.7568C7.03224 21.908 7 22.0701 7 22.2338C7 22.3974 7.03224 22.5595 7.09487 22.7107C7.1575 22.8619 7.2493 22.9993 7.36503 23.115C7.48075 23.2308 7.61814 23.3226 7.76935 23.3852C7.92055 23.4478 8.08261 23.48 8.24628 23.48C8.40994 23.48 8.572 23.4478 8.7232 23.3852C8.87441 23.3226 9.0118 23.2308 9.12753 23.115L15.24 17.0025L21.3525 23.115C21.4682 23.2308 21.6056 23.3226 21.7568 23.3852C21.908 23.4478 22.0701 23.48 22.2338 23.48C22.3974 23.48 22.5595 23.4478 22.7107 23.3852C22.8619 23.3226 22.9993 23.2308 23.115 23.115C23.2308 22.9993 23.3226 22.8619 23.3852 22.7107C23.4478 22.5595 23.48 22.3974 23.48 22.2338C23.48 22.0701 23.4478 21.908 23.3852 21.7568C23.3226 21.6056 23.2308 21.4682 23.115 21.3525L17.0025 15.24L23.115 9.12753C23.59 8.65253 23.59 7.85253 23.115 7.37753Z" fill="black" />
                </svg>
              </div>
            </div>
            <ul className="t-ml-2">
              {NAV_ITEMS.map((item, index) => (
                <li
                  onClick={() => handleMobileNavItem(item)}
                  key={index}
                  className="t-flex t-justify-between t-py-5"
                >
                  <span
                    className={`
                  t-font-[sans-bold] t-text-[18px] t-my-auto
                  ${router.pathname === item?.href && "t-text-[#2B79D3]"} 
                  `}
                  >
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="t-mt-4 t-flex t-justify-center"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <span className="t-font-[sans-regular] t-border-[0.15rem] t-border-[#ffffff] hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[15px] t-pb-[8px] t-pt-[5px] t-rounded-[26px] t-text-[16px] t-my-auto">
                Automated Services
              </span>
            </div>
          </div>
        </div>
      }

      {/* Mobile Navbar ends here */}

      {/* Desktop Navbar starts here */}

      <div className="lg:t-max-w-[1400px] t-m-auto t-px-2 lg:t-px-16">
        <div className="t-flex t-justify-between t-h-[74px] lg:t-bg-[white] t-rounded-[51px] t-z-40 t-mt-2 lg:t-mt-4 t-px-6 t-py-4">
          <div className="t-mt-[-5px] t-cursor-pointer ">
            <Link href="/">
              <Image
                src={NAV_LOGO}
                alt={NAV_LOGO_ALT}
                width={55}
                height={50}
              />
            </Link>
          </div>
          <div
            className="t-mt-[11px]"
          >
            <div className="t-hidden lg:t-block">
              <ul className="t-flex t-gap-12">
                {NAV_ITEMS.map((item, index) => (
                  <div key={index} onClick={() => handleDesktopNavItem(item)} className="t-relative">
                    <li
                      onMouseEnter={() => handleDesktopItemHover(item)}
                      onMouseLeave={handleItemHoverExit}
                      className={`t-cursor-pointer t-font-[sans-bold] t-text-[15px] t-text-center 
                       ${activeLink === item?.href && "t-text-[#2B79D3]"}
                      ${hoveredItem?.content === item.content
                          ? "t-text-[#277AF7] hover:t-border-[#277AF7] t-pb-1"
                          : ""
                        }
                      `}
                    >
                      {item.content}
                    </li>
                    {
                      hoveredItem?.content === item.content &&
                      <div className="navItemBorder"></div>
                    }
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="t-mt-2">
            <div
              className="t-cursor-pointer t-hidden xl:t-block t-h-[20px] t-w-[200px]"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <span className="t-font-[sans-regular] hover:t-border-2 hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[15px] t-pb-[8px] t-pt-[5px] t-rounded-[26px] t-text-[16px] ">
                Automated Services
              </span>
            </div>
          </div>

          <div
            onClick={() => handleMobileMenu(true)}
            className="t-my-auto t-cursor-pointer t-block lg:t-hidden "
          >
            {
              mobileMenuActive ?
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.15625 16.4688H21.8438M2.15625 8.96875H21.8438M2.15625 1.46875H21.8438" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg> :
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.15625 16.4688H21.8438M2.15625 8.96875H21.8438M2.15625 1.46875H21.8438" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            }

          </div>
        </div>
      </div>
      {/* Desktop Navbar starts here */}

      {
        modalOpen &&
        <ComingSoon show={closeModal} />
      }
    </Fragment>
  );
};

export default Navbar;
