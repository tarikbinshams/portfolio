import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Show the button when the user scrolls down 300px
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="t-relative">
      <Navbar />
      <main>{children}</main>
      <Footer />

      {
        isVisible &&
        <div className="t-fixed t-bottom-[30px] t-right-[30px] t-z-50 t-hidden md:t-block">
          <svg
            width={166}
            height={167}
            viewBox="0 0 166 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={scrollToTop}
            className="t-cursor-pointer"
          >
            <g filter="url(#filter0_d_1_108)">
              <circle cx={83} cy={55} r={26} fill="url(#paint0_linear_1_108)" />
              <path
                d="M74.1406 54.5883L83.3564 45.3726L92.5721 54.5883M83.3564 46.6525V65.34"
                stroke="white"
                strokeWidth={2.18447}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_108"
                x={0.0137024}
                y={0.506851}
                width={165.973}
                height={165.973}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy={28.4931} />
                <feGaussianBlur stdDeviation={28.4931} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.168627 0 0 0 0 0.47451 0 0 0 0 0.827451 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_108"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_108"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_108"
                x1={83}
                y1={29}
                x2={83}
                y2={81}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3191FF" />
                <stop offset={1} stopColor="#0A4EFE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      }
    </div>
  );
}
