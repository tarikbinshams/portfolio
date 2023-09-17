import React, { useEffect } from 'react'
import Carousal from './Carousal'
import Moments from './Moments'
import PORTFOLIO from '@contents/LandingPage/Portfolio';
import Link from 'next/link';

export default function Portfolio() {
    const [activeProject, setActiveProject] = React.useState(PORTFOLIO.projects[0]);
    useEffect(() => {
        console.log(activeProject);
    }, [activeProject]);
    return (
        <div id="portfolio" className='t-relative'>
            <div className="lg:t-max-w-[1400px] t-m-auto t-px-4 lg:t-px-16 t-my-12 lg:t-my-28">
                <div className=''>
                    <div className="t-flex t-justify-center">
                        <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[28px] t-text-center">Portfolio</p>
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
                    <p className='t-text-center t-mt-4 t-text-[#000000] t-font-[sans-regular] t-text-[18px]'>From accomplishments to legacy, explore our journey through remarkable projects</p>
                    <div className='t-mt-6 lg:t-w-[650px] t-mx-auto'>
                        <p className='t-text-center t-text-[#1B1617] t-opacity-80 t-font-[sans-regular] t-text-[17px]'>Our portfolio showcases a diverse collection of our past projects. Each image represents our commitment to creativity, precision, and client satisfaction, reflecting our expertise in turning ideas into remarkable realities.</p>
                    </div>
                </div>

                <div className='t-mt-16 t-bg-[#ffffff] t-py-8 t-px-3 md:t-px-10 t-mx-auto t-w-[95%] t-h-[1000px] lg:t-h-[550px] t-rounded-[25px] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)]'>
                    <div className='t-grid t-grid-cols-1 lg:t-grid-cols-2 lg:t-gap-20 t-h-[700px] lg:t-h-[300px]'>
                        <div className='t-col-span-1'>
                            <p className='t-text-[30px] t-text-[#277AF7] t-font-[sans-bold]'>{activeProject.title}</p>
                            <div className='t-mt-1 t-text-[18px] lg:t-text-[16px] t-text-[#1B1617] t-font-[sans-regular] t-text-justify' dangerouslySetInnerHTML={{ __html: activeProject.description }} />
                            <div className='t-mt-6 t-hidden lg:t-block'>
                                <Link href={activeProject?.url}>
                                    <a target='_blank'>
                                        <span className="t-font-[sans-regular] hover:t-border-2 hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[40px] t-pb-[10px] t-pt-[7px] t-rounded-[26px] t-text-[18px] t-cursor-pointer">
                                            Visit
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className='t-col-span-1'>
                            <Moments slides={activeProject?.images} />
                        </div>
                    </div>
                    <div className='t-mt-0 lg:t-hidden t-flex t-justify-center'>
                        <Link href={activeProject?.url}>
                            <a target='_blank'>
                                <span className="t-font-[sans-regular] hover:t-border-2 hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[40px] t-pb-[10px] t-pt-[7px] t-rounded-[26px] t-text-[18px] t-cursor-pointer">
                                    Visit
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className='t-mt-8 lg:t-mt-6'>
                        <Carousal active={activeProject} setActive={setActiveProject} />
                    </div>
                </div>


            </div>

            <div className="t-hidden lg:t-block t-absolute t-right-4 t-top-0">
                <img className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out" src="/images/vtsWatarMarkReverse.png" alt="about-us" />
            </div>
        </div>
    )
}
