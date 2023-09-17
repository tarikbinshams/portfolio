import React from 'react'
import TOOLS from '@contents/LandingPage/Tools'
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
import SectionWrapper from "@hoc/SectionWrapper";

function Tools() {
    const [activeTool, setActiveTool] = React.useState(TOOLS.tools[0]);
    const handleTechSelect = (e: any) => {
        setActiveTool(e);
    }


    const handleNext = () => {
        const index = TOOLS.tools.findIndex((tool) => tool.title === activeTool?.title);
        if (index < TOOLS.tools.length - 1) {
            setActiveTool(TOOLS.tools[index + 1]);
        } else {
            setActiveTool(TOOLS.tools[0]);
        }
    }


    return (
        <div id="technology-stack" className='t-relative'>
            <div className="lg:t-max-w-[1400px] t-m-auto t-px-4 lg:t-px-16 lg:t-my-28">
                <div className=''>
                    <div className="t-flex t-justify-center">
                        <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[28px] t-text-center">Technology Stack</p>
                    </div>
                    <div className="t-flex t-justify-center">
                        <svg className="t-mt-3" width="282" height="1.75" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H281" stroke="url(#tools)" strokeWidth="2" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="tools" x1="1" y1="1.49888" x2="283" y2="2.49887" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#277AF7" stopOpacity="0" />
                                    <stop offset="0.4991" stopColor="#277AF7" />
                                    <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className='t-text-center t-mt-4 t-text-[#000000] t-font-[sans-regular] t-text-[17px]'>Our foundation for innovation lies in a versatile technology stack that navigates the digital frontier.</p>
                </div>
                <div className='t-mt-16 lg:t-flex t-justify-between t-hidden'>
                    {
                        TOOLS.tools.map((tool, index) =>
                            <div onClick={() => handleTechSelect(tool)} key={index} className={`${activeTool.title === tool?.title ? "t-bg-[#277AF7]" : "t-bg-[#ffffff]"} t-px-4 t-cursor-pointer t-w-[152px] t-h-[150px] t-rounded-[25px] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)]`}>
                                <img className='t-mx-auto t-mt-6' src={activeTool.title === tool?.title ? tool.defaultIcon : tool.activeIcon} alt="" />
                                <p className={`t-mt-4 t-text-center t-text-[17px] t-font-[sans-regular] ${activeTool.title === tool?.title ? "t-text-[#ffffff]" : "t-text-[#277AF7]"}`}>{tool.title}</p>
                            </div>
                        )
                    }
                </div>
                <div className='t-mt-16 lg:t-flex t-justify-between t-flex-wrap t-gap-8 t-hidden'>
                    {
                        activeTool?.technologies.map((tool, index) =>
                            <div key={index} className={`t-mb-4 t-grid t-place-items-center t-w-[185px] t-h-[65px] t-rounded-[10px] t-bg-[#ffffff] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)] ${!tool && 't-invisible'} hover:t-scale-105 t-transition-all t-duration-300 t-ease-in-out`}>
                                <img className='' src={tool} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='lg:t-hidden t-mt-10 t-px-4'>
                <div className='t-flex t-justify-between'>
                    <div className={`t-bg-[#ffffff] t-px-4 t-grid t-place-items-center t-cursor-pointer t-w-[152px] t-h-[150px] t-rounded-[25px] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)]`}>
                        <div className=''>
                            <img className='t-mx-auto t-mt-0' src={activeTool?.activeIcon} alt="" />
                            <p className={`t-mt-4 t-text-center t-text-[17px] t-font-[sans-regular] t-text-[#277AF7]`}>{activeTool?.title}</p>
                        </div>
                    </div>
                    <img onClick={handleNext} className='t-my-auto' src='/images/right.svg' alt='' />
                </div>

                <div className='t-mt-10 t-flex t-justify-between t-flex-wrap'>
                    {
                        activeTool?.technologies.map((tool, index) =>
                            <div key={index} className={`t-mb-4 t-grid t-place-items-center t-w-[160px] t-h-[60px] t-rounded-[10px] t-bg-[#ffffff] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)] ${!tool && 't-invisible'}`}>
                                <img className='' src={tool} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>


            <div className="t-hidden lg:t-block t-absolute t-left-4 t-top-0">
                <img className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out" src="/images/vtsWatarMark.png" alt="about-us" />
            </div>
        </div>
    )
}

export default SectionWrapper(Tools, "TechnologyStack");
