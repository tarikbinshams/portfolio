import React, { Suspense, useEffect } from "react";
import { TITLE, DESCRIPTION } from "@contents/landings";
import styles from "@styles/Terms.module.css";
import { motion } from "framer-motion";
import { slideIn } from "utils/motion";
import Image from "next/image";

import { useRouter } from "next/router";
import TermsAndConditons from "@contents/TermsAndConditons";
import { Sections } from "./Section";
import PrivacyPolicyContents from "@contents/PrivacyPolicy";

const PrivacyPolicy = () => {
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
        <motion.div className=" lg:t-max-w-[1400px] lg:t-mx-auto lg:t-px-[70px] t-mx-4">
          {/* <div className="t-grid lg:t-grid-cols-2 lg:t-h-[650px] t-relative">
          <div className="t-col-span-1 t-mt-28 t-mb-16 t-px-8 lg:t-px-0">
            <div className={` t-z-50`}>
              <p className="t-font-[sans-bold] t-text-[46px] t-leading-tight t-text-center lg:t-text-left">
                <span className="t-text-[#277AF7]">VTS</span><br />
                <span className="t-text-[#1B1617]">BLOCKCHAIN</span><br />
                <span className="t-text-[#1B1617]">ENGINEERS</span>
              </p>
              <p className="t-font-[sans-regular] t-mt-6 t-text-[22px] t-w-[430px] t-text-[#848488] t-text-center lg:t-text-left">
                Envision, Empower, Evolve Leading the
                Revolution through Strategic Web3, Mobile
                and Blockchain Engineering
              </p>

              <div className="t-mt-6 lg:t-mt-12 t-text-center lg:t-text-left">
                <span className="t-font-[sans-regular] t-border-[0.15rem] t-border-[#ffffff] hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[16px] t-pb-[10px] t-pt-[7px] t-rounded-[26px] t-text-[18px] t-cursor-pointer">
                  Get a quote
                </span>
              </div>
            </div>
          </div>
          <div className="t-col-span-1 t-hidden lg:t-grid t-place-items-center">
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="t-h-[450px] t-pl-32  t-mt-[-20px]"
            >
              <img src="/images/1_1.gif" alt="" className="t-w-[500px] t-h-[400px]" />
            </motion.div>
          </div>
          <div className="t-hidden lg:t-block t-absolute t-top-[380px] t-left-[500px]">
            <svg width="252" height="72" viewBox="0 0 252 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.36631 20.8716C4.01922 19.823 2.88778 19.2543 1.83916 19.6014C0.790537 19.9485 0.221828 21.0799 0.568911 22.1285L4.36631 20.8716ZM144.433 32.3347L146.433 32.3546L144.433 32.3347ZM251.269 30.0301L228.355 32.9069L242.303 51.3127L251.269 30.0301ZM0.568911 22.1285C3.10151 29.7801 7.4859 34.521 13.33 36.8361C19.06 39.1059 25.9052 38.9266 33.2028 37.417C47.7524 34.4073 65.2587 25.8286 81.7337 18.3203C90.0345 14.5374 98.1038 11.0071 105.546 8.48602C113.014 5.95613 119.676 4.50484 125.196 4.7489C130.63 4.98918 134.829 6.85552 137.73 10.9077C140.712 15.0719 142.537 21.8346 142.434 32.3149L146.433 32.3546C146.541 21.5152 144.683 13.7465 140.983 8.57896C137.202 3.29931 131.721 1.03353 125.372 0.752807C119.109 0.47587 111.886 2.1147 104.262 4.69751C96.6123 7.28911 88.3832 10.8942 80.0749 14.6805C63.3318 22.3109 46.3777 30.607 32.3925 33.5C25.4227 34.9417 19.4819 34.9707 14.8032 33.1172C10.2386 31.309 6.59168 27.595 4.36631 20.8716L0.568911 22.1285ZM142.434 32.3149C142.283 47.559 145.67 57.9051 151.908 64.1524C158.189 70.4425 166.936 72.1644 176.51 71.1173C195.532 69.0369 219.163 55.906 238.073 42.5381L235.764 39.2718C216.914 52.5971 194.005 65.1802 176.076 67.141C167.175 68.1144 159.843 66.4387 154.739 61.3262C149.591 56.1709 146.287 47.1096 146.433 32.3546L142.434 32.3149Z" fill="#277AF7" />
            </svg>
          </div>
        </div> */}
          <div className="">
            <div className="lg:t-h-[250px] t-grid lg:t-place-items-center">
              <div
                className={`lg:t-text-[50px] t-text-[36px] t-font-[sans-regular] ${styles.textShadow}`}
              >
                {PrivacyPolicyContents.landing.title}
              </div>
            </div>
            <div className="t-font-[sans-bold] t-text-[15px] t-font-normal t-leading-normal t-text-[#1B1617] lg-t-mt-0 t-mt-4">
              {PrivacyPolicyContents.landing.date}
            </div>
          </div>
          <div className="t-mt-8">
            <Sections terms={PrivacyPolicyContents.terms} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
