import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
import SectionWrapper from "@hoc/SectionWrapper";
import Image from "next/image";
import SectionHeading from "@components/common/SectionHeading";

const SocialCard = ({
  index,
  title,
  description,
  image,
  link,
}: {
  index: number;
  title: any;
  description: any;
  image: any;
  link: any;
}) => {
  return (
    <motion.div variants={zoomIn(index * 0.25, 0.75)}>
      <div className="t-w-full t-h-[100px] lg:t-h-[150px] t-rounded-[8px] sm:t-px-4 lg:t-px-3 t-py-[0.9rem] lg:t-py-5 hover:t-scale-105 t-transition-all t-duration-300 t-ease-in-out">
        <div className="t-flex t-gap-0">
          <div className="t-w-[100px] t-h-[100px]">
            <Image src={image} alt="" width={100} height={100} />
          </div>

          <div className="t-grid t-w-full">
            <p className="sm:t-text-[22px] t-text-[16px] t-text-[#030627] t-font-[sans-bold] t-opacity-80 t-mt-1.5 lg:t-mt-0.5">
              {title}
            </p>

            <a
              className="t-mt-[-30px] t-flex t-gap-x-2 t-cursor-pointer"
              href={link}
              target="blank"
            >
              <p className="t-text-[#000000] sm:t-text-[18px] t-text-[14px] t-font-[sans-regular] t-opacity-80">
                {description}
              </p>
              <div>
                <img src="/images/rightArrow.png" alt="" className="t-mt-1.5 t-w-[16px] t-h-[16px]" width={16} height={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Social() {
  return (
    <div className="lg:t-mb-20 t-bg-[#F7F4FE] t-py-20">
      <div className="lg:t-max-w-[1400px] t-m-auto lg:t-px-16">
        <SectionHeading title={"Get Connected With Our Community"} subTitle={""} />

        <div className="t-flex t-justify-center t-flex-wrap t-gap-y-8 sm:t-gap-x-8 t-gap-x-2 t-my-8">
          <div className="sm:t-w-[300px] t-w-[170px]">
            <SocialCard
              index={1}
              title="LinkedIn"
              description="Follow us"
              image="/images/socials/linkedin.png"
              link="https://www.linkedin.com/company/v-t-solutions"
            />
          </div>
          <div className="sm:t-w-[300px] t-w-[170px] ">
            <SocialCard
              index={2}
              title="Twitter X"
              description="Follow us"
              image="/images/socials/twitter.png"
              link="https://twitter.com/VTS_Verfied"
            />
          </div>
          <div className="sm:t-w-[300px] t-w-[170px] ">
            <SocialCard
              index={3}
              title="Facebook"
              description="Like us"
              image="/images/socials/facebook.png"
              link="https://www.facebook.com/VirtualTradingSolutions"
            />
          </div>
          {/* </div>
        <div className="t-hidden lg:t-flex t-justify-center t-flex-wrap t-gap-8 t-my-8"> */}
          <div className="sm:t-w-[300px] t-w-[170px] ">
            <SocialCard
              index={4}
              title="Youtube"
              description="Subscribe"
              image="/images/socials/youtube.png"
              link="https://www.youtube.com/channel/UCCKYUDaHeXfFMNW5GAJpjOQ"
            />
          </div>
          <div className="sm:t-w-[300px] t-w-[170px] ">
            <SocialCard
              index={5}
              title="Discord"
              description="Connect"
              image="/images/socials/discord.png"
              link="https://discord.gg/23aNkjDxxK"
            />
          </div>
          <div className="sm:t-w-[300px] t-w-[170px] ">
            <SocialCard
              index={6}
              title="Instagram"
              description="Follow us"
              image="/images/socials/instagram.png"
              link="https://www.instagram.com/vts_verified"
            />
          </div>
        </div>

        {/* mobile view starts */}
        {/* <div className="lg:t-hidden t-flex t-justify-center t-flex-wrap t-gap-4 t-my-8 t-mx-4">
          <div className="t-col-span-1">
            <SocialCard
              index={1}
              title="LinkedIn"
              description="Follow us"
              image="/images/socials/linkedin.png"
              link="https://www.linkedin.com/"
            />
          </div>
          <div className="t-col-span-1">
            <SocialCard
              index={2}
              title="Twitter X"
              description="Follow us"
              image="/images/socials/twitter.png"
              link="https://www.twitter.com/"
            />
          </div>
          <div className="t-col-span-1">
            <SocialCard
              index={3}
              title="Facebook"
              description="Like us"
              image="/images/socials/facebook.png"
              link="https://www.facebook.com"
            />
          </div>
          <div className="t-col-span-1">
            <SocialCard
              index={4}
              title="Youtube"
              description="Subscribe"
              image="/images/socials/youtube.png"
              link="https://www.youtube.com"
            />
          </div>
          <div className="t-col-span-1">
            <SocialCard
              index={5}
              title="Discord"
              description="Connect"
              image="/images/socials/discord.png"
              link="https://www.discord.com"
            />
          </div>
          <div className="t-col-span-1">
            <SocialCard
              index={6}
              title="Instagram"
              description="Follow us"
              image="/images/socials/instagram.png"
              link="https://www.instagram.com"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SectionWrapper(Social, "social");
