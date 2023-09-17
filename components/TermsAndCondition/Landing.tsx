import React, { Suspense, useEffect } from "react";
import { TITLE, DESCRIPTION } from "@contents/landings";
import styles from "@styles/Terms.module.css";
import { motion } from "framer-motion";
import { slideIn } from "utils/motion";
import Image from "next/image";

import { useRouter } from "next/router";
import TermsAndConditons from "@contents/TermsAndConditons";
import { Sections } from "./Section";

const Landings = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const router = useRouter();

  //   useEffect(() => {
  //     router.push('/')
  //   }, []);

  return (
    <>
      <div className="t-relative">
        <div className="t-hidden lg:t-block t-absolute t-right-12 t-top-24">
          <img
            className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out"
            src="/images/vtsWatarMarkReverse.png"
            alt="about-us"
          />
        </div>
        <motion.div className=" lg:t-block lg:t-max-w-[1400px] t-mx-4 lg:t-mx-auto lg:t-px-[70px]">
          <div className=" lg:t-h-[370px]">
            <div className="lg:t-h-[250px] t-grid t-place-items-center">
              <div
                className={`t-text-[50px] t-font-[sans-bold] ${styles.textShadow}`}
              >
                {TermsAndConditons.landing.title}
              </div>
            </div>
            <div className="t-font-[sans-bold] t-text-[15px] t-font-normal t-leading-normal t-text-[#1B1617] lg-t-mt-0 t-mt-4">
              {TermsAndConditons.landing.date}
            </div>
            <div className="t-font-[sans-regular] t-text-[15px] t-font-bold t-text-justify t-leading-8 t-pt-7 ">
              {" "}
              {TermsAndConditons.landing.description}
            </div>
          </div>
          <div className="t-mt-6">
            <Sections terms={TermsAndConditons.terms} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Landings;
