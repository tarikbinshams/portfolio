import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { fadeIn, slideIn, zoomIn } from "utils/motion";
import styles from "@styles/WhyChooseUs.module.css";
import { staggerContainer } from "../../utils/motion";
import SectionHeading from "@components/common/SectionHeading";

interface SolutionCardInterface {
  index: number;
  title: any;
  description: any;
  image: any;
  link: any;
}

const SolutionsCard = ({ index, title, description, image, link }: SolutionCardInterface) => {
  return (
    <motion.div variants={zoomIn(index * 0.25, 0.75)}>
      <div
        className={`t-w-[250px] t-h-[270px] t-grid t-place-items-center t-border-[2px] t-border-[#277AF7] t-bg-white
                        t-shadow-lg t-rounded-3xl t-px-2 lg:t-px-3 t-py-[0.9rem] lg:t-py-2  ${styles.daoServiceRadialGrad} hover:t-scale-105 t-transition-all t-duration-200 t-ease-in-out`}
      >
        <div className="t-mt-1">
          <Image src={image} alt="Offering-2" width={60} height={60}></Image>
        </div>

        <div className="t-h-[200px] t-mt-1">
          <p className="t-mt-0 t-text-[#000000] t-text-[18px] t-text-center t-font-[sans-bold]">
            {title}
          </p>
          <p className="t-mt-2 t-mx-0 t-text-[14px]  t-text-[#4D4D4E] t-text-justify t-text-[sans-regular]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs({ data }: any) {
  return (
    <div className="t-relative">
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={``}
      >
        <div className="primaryContainer t-mb-16 t-hidden lg:t-block">
          <SectionHeading title={data.title} subTitle={data.sub_title} />

          <div className="t-m-auto t-pt-8">
            <div className="t-flex t-justify-center t-flex-wrap t-gap-x-8 t-gap-y-12 t-my-8">
              {data.solutions.map((item: any, index: number) => {
                return (
                  <div key={index} className={`t-col-span-1`}>
                    <SolutionsCard
                      index={index + 1}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      link=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* mobile view starts */}
        <div className="t-mt-10 t-px-4 t-mb-4 lg:t-hidden t-block">
          <SectionHeading title={data.title} subTitle={data.sub_title} />

          <div className="t-m-auto t-pt-5">
            <div className="t-flex t-justify-center t-flex-wrap t-gap-x-8 t-gap-y-12 t-my-8">
              {data.solutions.map((item: any, index: number) => {
                return (
                  <div key={index} className={`t-col-span-1`}>
                    <SolutionsCard
                      index={index + 1}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      link=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      <div className="t-hidden lg:t-block t-absolute t-left-4 t-top-20">
        <img
          className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out"
          src="/images/vtsWatarMark.png"
          alt="about-us"
        />
      </div>
    </div>
  );
}
