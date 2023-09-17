import React from 'react'
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "../../utils/motion";
import SectionWrapper from "@hoc/SectionWrapper";

function DevelopmentProcess() {
    return (
        <div>
            <div className='t-mb-28 t-relative'>
                <div className='t-px-4'>
                    <div className="t-flex t-justify-center">
                        <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[28px] t-text-center">Our Approach to Development</p>
                    </div>
                    <div className="t-flex t-justify-center">
                        <svg className="t-mt-3" width="282" height="1.75" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H281" stroke="url(#line_1)" strokeWidth="2" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="line_1" x1="1" y1="1.49888" x2="283" y2="2.49887" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#277AF7" stopOpacity="0" />
                                    <stop offset="0.4991" stopColor="#277AF7" />
                                    <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <p className='t-text-center t-mt-4 t-text-[#000000] t-font-[sans-regular] t-text-[17px]'>Discover a pathway where vision becomes reality, guided by our dynamic approach to development.</p>

                </div>
                <div className='t-flex t-justify-center t-flex-wrap t-gap-8 t-mt-20'>
                    <div className='t-w-[160px] hover:t-scale-105 t-transition-all t-duration-100 t-ease-in-out'>
                        <img className='t-w-[150px] t-h-[210px]' src="/images/development/dev1.png" alt="about-us" />
                        <div className='t-grid t-justify-center t-mt-[-7px]'>
                            <p className='t-text-[#277AF7] t-text-[20px] t-font-[sans-bold] t-text-center t-leading-6'>Assessment and Strategy</p>
                            <p className='t-mt-2 t-text-[#000000] t-text-[14px] t-font-[500] t-opacity-90 t-text-center t-leading-5'>Identify client needs, scope and project plan.</p>
                        </div>
                    </div>
                    <div className='t-w-[160px] hover:t-scale-105 t-transition-all t-duration-100 t-ease-in-out'>
                        <img className='t-w-[150px] t-h-[210px]' src="/images/development/dev2.png" alt="about-us" />
                        <div className='t-grid t-justify-center t-mt-[10px]'>
                            <p className='t-ml-[-8px] t-text-[#277AF7] t-text-[20px] t-font-[sans-bold] t-text-center t-leading-6'>Design</p>
                            <p className='t-mt-4 t-text-[#000000] t-text-[14px] t-font-[500] t-opacity-90 t-text-center t-leading-5'>Draft UI/UX, architectural diagrams.</p>
                        </div>
                    </div>
                    <div className='t-w-[160px] hover:t-scale-105 t-transition-all t-duration-100 t-ease-in-out'>
                        <img className='t-w-[150px] t-h-[210px]' src="/images/development/dev3.png" alt="about-us" />
                        <div className='t-grid t-justify-center t-mt-[10px]'>
                            <p className='t-ml-[-4px] t-text-[#277AF7] t-text-[20px] t-font-[sans-bold] t-text-center t-leading-6'>Development</p>
                            <p className='t-mt-4 t-text-[#000000] t-text-[14px] t-font-[500] t-opacity-90 t-text-center t-leading-5'>Write code, build features.</p>
                        </div>
                    </div>
                    <div className='t-w-[160px] hover:t-scale-105 t-transition-all t-duration-100 t-ease-in-out'>
                        <img className='t-w-[150px] t-h-[210px]' src="/images/development/dev4.png" alt="about-us" />
                        <div className='t-grid t-justify-center t-mt-[-5px]'>
                            <p className='t-text-[#277AF7] t-text-[20px] t-font-[sans-bold] t-text-center t-leading-6'>Quality Assurance</p>
                            <p className='t-mt-2 t-text-[#000000] t-text-[14px] t-font-[500] t-opacity-90 t-text-center t-leading-5'>Test, debug, ensure reliability.</p>
                        </div>
                    </div>
                    <div className='t-w-[160px] hover:t-scale-105 t-transition-all t-duration-100 t-ease-in-out'>
                        <img className='t-w-[150px] t-h-[210px]' src="/images/development/dev5.png" alt="about-us" />
                        <div className='t-grid t-justify-center t-mt-[10px]'>
                            <p className='t-ml-[-4px] t-text-[#277AF7] t-text-[20px] t-font-[sans-bold] t-text-center t-leading-6'>Deployment</p>
                            <p className='t-mt-4 t-text-[#000000] t-text-[14px] t-font-[500] t-opacity-90 t-text-center t-leading-5'>Implement and launch in live environment.</p>
                        </div>
                    </div>
                    <div className='t-w-[160px] hover:t-scale-105 t-transition-all t-duration-100 t-ease-in-out'>
                        <img className='t-w-[150px] t-h-[210px]' src="/images/development/dev6.png" alt="about-us" />
                        <div className='t-grid t-justify-center t-mt-[-7px]'>
                            <p className='t-text-[#277AF7] t-text-[20px] t-font-[sans-bold] t-text-center t-leading-6'>Support and Maintenance</p>
                            <p className='t-mt-2 t-text-[#000000] t-text-[14px] t-font-[500] t-opacity-90 t-text-center t-leading-5'>Provide user assistance, update, troubleshoot.</p>
                        </div>
                    </div>
                </div>

                <div className="t-hidden lg:t-block t-absolute t-right-4 t-top-0">
                    <img className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out" src="/images/vtsWatarMarkReverse.png" alt="about-us" />
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(DevelopmentProcess, "DevelopmentProcess");
