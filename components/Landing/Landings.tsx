import React, { Suspense, useEffect, useState } from "react";
import { TITLE, DESCRIPTION } from "@contents/landings";
import styles from "@styles/Home.module.css";
import { slideIn } from "utils/motion";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from "next/router";

const Landings = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const router = useRouter();

  useEffect(() => {
    router.push('/')
  }, []);

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, []);

  const handleSetAppointment = () => {
    router.push('#contact-us')
  }

  const [position, setPosition] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (position === 3) {
        setPosition(1);
      } else {
        setPosition(position + 1);
      }
    }
      , 2000);

  }, [position]);

  return (
    <>
      <motion.div className="t-hidden lg:t-block lg:t-max-w-[1400px] t-m-auto lg:t-px-16">
        <div className="t-grid lg:t-grid-cols-2 lg:t-h-[650px] t-relative">
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
                <span onClick={handleSetAppointment} className="t-font-[sans-regular] hover:t-border-2 hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[16px] t-pb-[10px] t-pt-[7px] t-rounded-[26px] t-text-[18px] t-cursor-pointer">
                  Set Appointment
                </span>
              </div>
            </div>
          </div>
          <div className="t-col-span-1 t-hidden lg:t-grid t-place-items-center">
            <div className="t-relative t-w-[400px] t-h-[350px] t-mt-[-70px]">
              {
                position === 1 && (
                  <>
                    <motion.div
                      className="t-absolute"
                      initial={{ opacity: 1, scale: 1, x: 50, y: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: -50, y: 50 }}
                      transition={{ duration: 0.75 }}
                    >
                      <img className="t-w-[180px] t-h-[180px] t-scale-[160%]" src="/images/land1.png" alt="" />
                    </motion.div>

                    <motion.div
                      className="t-absolute t-top-8 t-right-0"
                      initial={{ opacity: 1, scale: 1, x: 50, y: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: -50, y: -50 }}
                      transition={{ duration: 0.75 }}
                    >
                      <img className="t-w-[180px] t-h-[180px] t-scale-[120%]" src="/images/land2.png" alt="" />
                    </motion.div>

                    <motion.div
                      className="t-absolute t-left-32 t-bottom-12"
                      initial={{ opacity: 1, scale: 1, x: -50, y: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: -100, y: -100 }}
                      transition={{ duration: 0.75 }}
                    >
                      <img className="t-w-[42%] t-h-[42%] t-scale-[100%]" src="/images/land3.png" alt="" />
                    </motion.div>
                  </>
                )
              }

              {
                position === 2 && (
                  <>
                    <motion.div
                      initial={{ y: -100, x: 50, opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 100, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-24 t-left-2"
                    >
                      <img className={`t-w-[180px] t-h-[180px] t-scale-[100%]`} src="/images/land1.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: -50, x: -50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 100, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-0 t-right-16"
                    >
                      <img className="t-w-[180px] t-h-[180px] t-scale-[160%]" src="/images/land2.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, x: -50, y: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: 50, y: 50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-left-44 t-bottom-8">
                      <img className="t-w-[47%] t-h-[47%] t-scale-[100%]" src="/images/land3.png" alt="" />
                    </motion.div>
                  </>
                )
              }

              {
                position === 3 && (
                  <>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: 100, x: -50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: -100, x: 50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-[-10px] t-right-[140px]"
                    >
                      <img className={`t-w-[180px] t-h-[180px] t-scale-[100%]`} src="/images/land1.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: -50, x: -50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 100, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-8 t-right-0"
                    >
                      <img className="t-w-[180px] t-h-[180px] t-scale-[100%]" src="/images/land2.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: 10, x: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 150, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-left-28 t-bottom-4"
                    >
                      <img className="t-w-[50%] t-h-[50%] t-scale-[120%]" src="/images/land3.png" alt="" />
                    </motion.div>
                  </>
                )
              }

            </div>
          </div>
          <div className="t-hidden lg:t-block t-absolute t-top-[380px] t-left-[500px]">
            <svg width="252" height="72" viewBox="0 0 252 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.36631 20.8716C4.01922 19.823 2.88778 19.2543 1.83916 19.6014C0.790537 19.9485 0.221828 21.0799 0.568911 22.1285L4.36631 20.8716ZM144.433 32.3347L146.433 32.3546L144.433 32.3347ZM251.269 30.0301L228.355 32.9069L242.303 51.3127L251.269 30.0301ZM0.568911 22.1285C3.10151 29.7801 7.4859 34.521 13.33 36.8361C19.06 39.1059 25.9052 38.9266 33.2028 37.417C47.7524 34.4073 65.2587 25.8286 81.7337 18.3203C90.0345 14.5374 98.1038 11.0071 105.546 8.48602C113.014 5.95613 119.676 4.50484 125.196 4.7489C130.63 4.98918 134.829 6.85552 137.73 10.9077C140.712 15.0719 142.537 21.8346 142.434 32.3149L146.433 32.3546C146.541 21.5152 144.683 13.7465 140.983 8.57896C137.202 3.29931 131.721 1.03353 125.372 0.752807C119.109 0.47587 111.886 2.1147 104.262 4.69751C96.6123 7.28911 88.3832 10.8942 80.0749 14.6805C63.3318 22.3109 46.3777 30.607 32.3925 33.5C25.4227 34.9417 19.4819 34.9707 14.8032 33.1172C10.2386 31.309 6.59168 27.595 4.36631 20.8716L0.568911 22.1285ZM142.434 32.3149C142.283 47.559 145.67 57.9051 151.908 64.1524C158.189 70.4425 166.936 72.1644 176.51 71.1173C195.532 69.0369 219.163 55.906 238.073 42.5381L235.764 39.2718C216.914 52.5971 194.005 65.1802 176.076 67.141C167.175 68.1144 159.843 66.4387 154.739 61.3262C149.591 56.1709 146.287 47.1096 146.433 32.3546L142.434 32.3149Z" fill="#277AF7" />
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div className="lg:t-hidden t-block t-px-4 t-mb-20">
        <div className="">
          <div className="t-grid t-place-items-center t-relative">
            <div className="t-relative t-w-[350px] t-h-[360px] t-mt-[0px]">
              {
                position === 1 && (
                  <>
                    <motion.div
                      className="t-absolute t-left-4"
                      initial={{ opacity: 1, scale: 1, x: 50, y: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: -100, y: 10 }}
                      transition={{ duration: 0.75 }}
                    >
                      <img className="t-w-[160px] t-h-[180px] t-scale-[140%]" src="/images/land1.png" alt="" />
                    </motion.div>

                    <motion.div
                      className="t-absolute t-top-8 t-right-7"
                      initial={{ opacity: 1, scale: 1, x: 10, y: 50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: -50, y: 0 }}
                      transition={{ duration: 0.75 }}
                    >
                      <img className="t-w-[160px] t-h-[180px] t-scale-[120%]" src="/images/land2.png" alt="" />
                    </motion.div>

                    <motion.div
                      className="t-absolute t-left-28 t-bottom-0"
                      initial={{ opacity: 1, scale: 1, x: -50, y: -50 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={{ opacity: 1, scale: 1, x: 50, y: 50 }}
                      transition={{ duration: 0.75 }}
                    >
                      <img className="t-w-[160px] t-h-[180px] t-scale-[100%]" src="/images/land3.png" alt="" />
                    </motion.div>
                  </>
                )
              }

              {
                position === 2 && (
                  <>
                    <motion.div
                      initial={{ y: -100, x: 50, opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 50, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-24 t-left-2"
                    >
                      <img className={`t-w-[160px] t-h-[180px] t-scale-[100%]`} src="/images/land1.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: -50, x: -50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 50, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-0 t-right-16"
                    >
                      <img className="t-w-[160px] t-h-[180px] t-scale-[140%]" src="/images/land2.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-left-28 t-bottom-0">
                      <img className="t-w-[160px] t-h-[180px] t-scale-[100%]" src="/images/land3.png" alt="" />
                    </motion.div>
                  </>
                )
              }

              {
                position === 3 && (
                  <>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: 50, x: -50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: -50, x: 50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-[-10px] t-right-[140px]"
                    >
                      <img className={`t-w-[160px] t-h-[180px] t-scale-[100%]`} src="/images/land1.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: -50, x: -50 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: 50, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-top-8 t-right-0"
                    >
                      <img className="t-w-[160px] t-h-[180px] t-scale-[100%]" src="/images/land2.png" alt="" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 1, scale: 1, y: 10, x: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      exit={{ opacity: 1, scale: 1, y: -50, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="t-absolute t-left-28 t-bottom-4"
                    >
                      <img className="t-w-[160px] t-h-[180px] t-scale-[160%]" src="/images/land3.png" alt="" />
                    </motion.div>
                  </>
                )
              }

            </div>

            <svg className="t-absolute t-top-[270px] t-right-0 t-rotate-6" width="43" height="110" viewBox="0 0 43 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.71209 2.86381C1.14254 2.3702 1.0843 1.50702 1.58201 0.935835C2.07972 0.364651 2.94491 0.301763 3.51447 0.79537L1.71209 2.86381ZM22.6229 63.2717L22.1004 64.538L22.6229 63.2717ZM7.44241 108.666L15.7516 95.1909L23.2496 109.046L7.44241 108.666ZM3.51447 0.79537C10.6963 7.01948 12.6378 13.0512 12.0173 18.9211C11.7142 21.788 10.8078 24.5441 9.72679 27.168C8.66525 29.7447 7.34694 32.3876 6.28284 34.7786C4.07233 39.7455 2.74383 44.0868 4.46991 48.3124C6.21355 52.5811 11.2621 57.1756 23.1454 62.0053L22.1004 64.538C10.0723 59.6495 4.11292 54.6939 1.93269 49.3564C-0.265103 43.976 1.56654 38.6552 3.78058 33.6803C4.92876 31.1004 6.13881 28.7024 7.1943 26.1403C8.23034 23.6255 9.02953 21.1448 9.29334 18.6491C9.80659 13.7936 8.32663 8.59632 1.71209 2.86381L3.51447 0.79537ZM23.1454 62.0053C31.3929 65.3573 36.7674 68.8458 39.7408 72.5019C42.7952 76.2577 43.2875 80.1681 41.8293 83.9978C40.4211 87.6959 37.2425 91.2011 33.2441 94.4762C29.2193 97.7728 24.2202 100.95 18.9747 103.956L17.6208 101.587C22.814 98.6114 27.6616 95.5217 31.5134 92.3668C35.3915 89.1902 38.1194 86.0595 39.2695 83.0389C40.3696 80.1499 40.072 77.2588 37.6103 74.2318C35.0676 71.1052 30.1997 67.8297 22.1004 64.538L23.1454 62.0053Z" fill="#277AF7" />
            </svg>

          </div>
          <div className="">
            <div className={``}>
              <p className="t-font-[sans-bold] t-text-[40px] lg:t-text-[44px] t-leading-tight t-text-center lg:t-text-left">
                <span className="t-text-[#277AF7]">VTS</span><br />
                <span className="t-text-[#1B1617]">BLOCKCHAIN</span><br />
                <span className="t-text-[#1B1617]">ENGINEERS</span>
              </p>
              <p className="t-font-[sans-regular] t-mt-6 t-text-[20px] t-text-[#848488] t-text-center">
                Envision, Empower, Evolve Leading the Revolution through Strategic Web3, Mobile and Blockchain Engineering
              </p>

              <div className="t-mb-4 t-mt-12 lg:t-mt-20 t-text-center lg:t-text-left">
                <span onClick={handleSetAppointment} className="t-font-[sans-regular] hover:t-border-2 hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[16px] t-pb-[10px] t-pt-[7px] t-rounded-[26px] t-text-[18px] t-cursor-pointer">
                  Set Appointment
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Landings;
