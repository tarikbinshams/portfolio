import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import SectionWrapper from "@hoc/SectionWrapper";
import ABOUT_US from "@contents/LandingPage/AboutUs";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
import styles from '@styles/Landing.module.css';

const CharacteristicsCard = ({ index, title, description, icon }: any) => {
  return (
    <motion.div variants={zoomIn(index * 0.25, 0.75)}>
      <div className="t-relative t-w-[170px] t-h-[160px] t-border-2 t-border-[#277AF7] t-rounded-[11px] t-bg-[#ffffff] hover:t-scale-105 ">
        <div className="t-px-2 t-mt-10">
          <p className="t-text-[#277AF7] t-text-[18px] t-font-[sans-bold] t-text-center">{title}</p>
          <p className="t-mt-4 t-text-[#252526] t-text-[15px] t-font-[sans-regular] t-text-center t-leading-4">{description}</p>
        </div>
        <div className="t-absolute t-top-[-25px] t-left-[60px]">
          <img className="" src={icon} alt="icon" />
        </div>
      </div>
    </motion.div>
  )
}

function AboutUs() {
  return (
    <div className="t-relative">
      <div className="lg:t-max-w-[1400px] t-m-auto t-px-4 lg:t-px-16 t-mb-28">
        <div className="t-block lg:t-hidden t-mb-12">
          <div className="t-flex t-justify-center">
            <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[22px] t-text-center">Find the best service <br /> for your business</p>
          </div>
          <div className="t-flex t-justify-center">
            <svg className="t-mt-4" width="282" height="1.75" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H281" stroke="url(#paint0_linear_1_39)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="paint0_linear_1_39" x1="1" y1="1.49888" x2="283" y2="2.49887" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#277AF7" stopOpacity="0" />
                  <stop offset="0.4991" stopColor="#277AF7" />
                  <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="t-flex t-justify-center t-gap-4 lg:t-gap-0 lg:t-justify-between lg:t-px-10">
          <div className="">
            <div className={`${styles.cardBg1}`}>
              <div className={`${styles.insideBg}`}>
                <p className="t-mt-6 t-text-[#277AF7] t-text-[46px] t-font-[sans-bold] t-text-center">{ABOUT_US?.statistics[0].number}</p>
                <p className="t-px-4 t-text-[#252526] t-text-[18px] t-font-[sans-regular] t-text-center t-leading-5 t-mt-2">{ABOUT_US?.statistics[0].title}</p>
              </div>
            </div>
            <div className={`${styles.cardBg2}`}>
              <div className={`${styles.insideBg}`}>
                <p className="t-mt-6 t-text-[#277AF7] t-text-[46px] t-font-[sans-bold] t-text-center">{ABOUT_US?.statistics[1].number}</p>
                <p className="t-px-4 t-text-[#252526] t-text-[18px] t-font-[sans-regular] t-text-center t-leading-5 t-mt-2">Team <br /> Members</p>
              </div>
            </div>
          </div>
          <div className="t-mt-[-12px] t-px-10 t-hidden lg:t-block">
            <div className="t-flex t-justify-center">
              <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[28px] t-text-center">Find the best service for your business</p>
            </div>
            <div className="t-flex t-justify-center">
              <svg className="t-mt-4" width="282" height="1.75" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H281" stroke="url(#paint0_linear_1_38)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_1_38" x1="1" y1="1.49888" x2="283" y2="2.49887" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#277AF7" stopOpacity="0" />
                    <stop offset="0.4991" stopColor="#277AF7" />
                    <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="t-mt-12">
              <p className="t-text-justify t-text-[17px] t-font-[sans-regular] t-leading-9"><span className="t-text-[#277AF7]">VTS</span> is an organization that specializes in creating distinct web3, mobile, and blockchain applications explicitly designed to meet your organization&apos;s needs. With a strong emphasis on transparent communication and top-notch output, each project commences with a comprehensive assessment of the client&apos;s specifications. Having extensive experience in crafting tailor-made business software over the years, we possess a deep understanding of the challenges faced by our clients. By utilizing this expertise, we have created accurate and practical procedures for software development that significantly boost a company&apos;s value.</p>
            </div>
          </div>
          <div className="">

            <div className={`${styles.cardBg2}`}>
              <div className={`${styles.insideBg}`}>
                <p className="t-mt-6 t-text-[#277AF7] t-text-[46px] t-font-[sans-bold] t-text-center">{ABOUT_US?.statistics[2].number}</p>
                <p className="t-px-4 t-text-[#252526] t-text-[18px] t-font-[sans-regular] t-text-center t-leading-5 t-mt-2">Project <br /> Delivered</p>
              </div>
            </div>

            <div className={`${styles.cardBg1}`}>
              <div className={`${styles.insideBg}`}>
                <p className="t-mt-6 t-text-[#277AF7] t-text-[46px] t-font-[sans-bold] t-text-center">{ABOUT_US?.statistics[3].number}</p>
                <p className="t-px-4 t-text-[#252526] t-text-[18px] t-font-[sans-regular] t-text-center t-leading-5 t-mt-2">Happy <br /> Clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="t-block lg:t-hidden t-mt-12 t-px-4">
          <p className="t-text-justify t-text-[17px] t-font-[sans-regular] t-leading-7"><span className="t-text-[#277AF7]">VTS</span> is an organization that specializes in creating distinct web3, mobile, and blockchain applications explicitly designed to meet your organization&apos;s needs. With a strong emphasis on transparent communication and top-notch output, each project commences with a comprehensive assessment of the client&apos;s specifications. Having extensive experience in crafting tailor-made business software over the years, we possess a deep understanding of the challenges faced by our clients. By utilizing this expertise, we have created accurate and practical procedures for software development that significantly boost a company&apos;s value.</p>
        </div>
        <div className="t-flex t-justify-center lg:t-justify-between t-flex-wrap t-gap-x-8 lg:t-gap-x-0 t-gap-y-12 t-mt-16 lg:t-mt-20">
          {
            ABOUT_US.characteristics.map((item: any, index: number) => (
              <CharacteristicsCard key={index} index={index} title={item.title} description={item.description} icon={item.icon} />
            ))
          }
        </div>
      </div>
      <div className="t-hidden lg:t-block t-absolute t-left-4 t-top-0">
        <img className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out" src="/images/vtsWatarMark.png" alt="about-us" />
      </div>
    </div>
  );
}

export default SectionWrapper(AboutUs, "AboutUs");
