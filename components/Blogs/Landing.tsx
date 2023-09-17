import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { slideIn } from "utils/motion";
import styles from "@styles/Solution.module.css";
import Image from "next/image";
import ParallaxTilt from "react-parallax-tilt";

export default function Landing({ data }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    // toggoling the rotation of the image after 2 seconds

    setTimeout(() => {
      setIsRotated(!isRotated);
    }
      , 1500);

  }, [isRotated]);

  return (
    <div className="">
      {/* desktop view starts */}

      <div className="primaryContainer lg:t-block t-hidden">
        <div className="t-grid lg:t-grid-cols-2 lg:t-h-[550px] t-relative">
          <div className="t-col-span-1 t-mt-10 lg:t-mt-16 t-mb-12 t-px-0 lg:t-px-0">
            <div className={``}>
              <p
                className="t-font-[700] t-text-[40px] t-text-left t-text-transparent t-bg-clip-text
                            t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]"
              >
                {data.title}
              </p>
              <div className="t-font-sans t-font-[400] t-opacity-80 t-mt-4 t-text-[19px] t-text-[#606060] t-text-justify t-leading-8">
                <p
                  className="t-text-justify"
                  dangerouslySetInnerHTML={{ __html: data.sub_title }}
                />
              </div>
            </div>
          </div>
          <div className="t-col-span-1 t-hidden lg:t-grid t-place-items-center t-justify-end">
            {/* ${styles.landingImageBg} */}
            <div
              className={``}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="t-flex t-justify-center t-mt-[-120px] t-pr-[30px]"
              >
                <div className="t-z-20">
                  <img className={`t-w-[300px] t-h-[250px] ${isRotated && "-t-rotate-[10deg]"} t-transition t-duration-300 t-ease-in-out`} src="/images/blogs/landing1.png" alt="Blogs" />
                </div>
                <div className="t-ml-[-150px] t-mt-[45px] t-z-10">
                  <img className={`t-w-[250px] t-h-[200px] ${isRotated && "t-rotate-[10deg]"} t-transition t-duration-300 t-ease-in-out`} src="/images/blogs/landing2.png" alt="Blogs" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view starts */}

      <div className="sm:t-mx-16 t-mx-4 lg:t-hidden t-block">
        <div className="t-mt-32">
          <div
            // className={`${styles.landingImageBg}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="t-flex t-justify-center t-mt-[-120px]"
            >
              <div className="t-z-20">
                <img className={`t-w-[250px] t-h-[200px] ${isRotated && "-t-rotate-[10deg]"} t-transition t-duration-300 t-ease-in-out`} src="/images/blogs/landing1.png" alt="Blogs" />
              </div>
              <div className="t-ml-[-150px] t-mt-[26px] t-z-10">
                <img className={`t-w-[250px] t-h-[160px] ${isRotated && "t-rotate-[10deg]"} t-transition t-duration-300 t-ease-in-out`} src="/images/blogs/landing2.png" alt="Blogs" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="t-grid lg:t-grid-cols-2 lg:t-h-[550px] t-relative">
          <div className="t-col-span-1 t-mt-10 t-mb-12">
            <div className={`${styles.landing}`}>
              <p className="t-font-[800] t-text-[35px] t-text-[#2B79D3] t-text-center">
                {data.title}
              </p>
              <div className="t-font-[sans-regular] t-opacity-80 t-mt-4 t-text-[16px] t-text-[#606060] t-text-justify">
                <p
                  className="t-text-justify"
                  dangerouslySetInnerHTML={{ __html: data.sub_title }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
