import React from 'react'
import SERVICES from "@contents/LandingPage/OurServices"

export default function OurServices() {
    const [active, setActive] = React.useState<any>(SERVICES?.services[0]);
    const handleActive = (item: any) => {
        setActive(item);
    }

    const handleClickNext = () => {
        const index = SERVICES?.services.findIndex((item: any) => item?.title === active?.title);
        if (index === SERVICES?.services.length - 1) {
            setActive(SERVICES?.services[0]);
        } else {
            setActive(SERVICES?.services[index + 1]);
        }
    }

    const handleClickPrevious = () => {
        const index = SERVICES?.services.findIndex((item: any) => item?.title === active?.title);
        if (index === 0) {
            setActive(SERVICES?.services[SERVICES?.services.length - 1]);
        } else {
            setActive(SERVICES?.services[index - 1]);
        }
    }

    return (
        <div id="services" className='t-relative'>
            <div className="lg:t-max-w-[1400px] t-m-auto t-px-4 lg:t-px-16 t-mb-28 ">
                <div className="t-flex t-justify-center">
                    <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[28px] t-text-center">Explore Our Services</p>
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
                <p className='t-text-center t-mt-4 t-text-[#000000] t-font-[sans-regular] t-text-[17px]'>Experience transformation firsthand through our comprehensive suite of dynamic services</p>

                <div className='t-mt-16 t-gap-10 t-hidden lg:t-flex '>
                    <div className='t-w-[340px] t-h-[480px] t-px-2 t-py-8 t-bg-[#ffffff] t-rounded-[25px] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)] '>
                        <div className='t-w-[330px] t-h-[420px] t-overflow-y-auto  t-px-4'>
                            <div className=''>
                                {
                                    SERVICES.services.map((service, index) =>
                                        <div key={index} className='t-cursor-pointer t-mb-8' onClick={() => handleActive(service)}>
                                            <div className='t-flex t-justify-between'>
                                                <div className='t-flex t-gap-4'>
                                                    <img className='t-my-auto t-w-[22px] t-h-[22px]' src={active.title === service.title ? service?.activeIcon : service?.defaultIcon} alt="" />
                                                    <p className={`${active?.title === service?.title ? "t-text-[#277AF7]" : "t-text-[#000000]"} t-my-auto t-text-[17px] t-font-[sans-regular]`}>{service?.title}</p>
                                                </div>
                                                <svg className='t-my-auto' width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L7.5 7.5L1 14" stroke={active?.title === service?.title ? "#277AF7" : "#000000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            {
                                                active?.title === service?.title ?
                                                    <svg className='t-mt-2' width="282" height="2" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1H281" stroke={`url(#service)`} strokeLinecap="round" />
                                                        <defs>
                                                            <linearGradient id={"service"} y1="1.49888" x2="283" y2="2.49887" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#277AF7" stopOpacity="0" />
                                                                <stop offset="0.4991" stopColor="#277AF7" />
                                                                <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg> :
                                                    <svg className='t-mt-2' width="282" height="2" viewBox="0 0 282 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1H281" stroke={`url(#${index.toString()})`} strokeLinecap="round" />
                                                        <defs>
                                                            <linearGradient id={index.toString()} x1="1" y1="1.49888" x2="283" y2="2.49887" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#000000" stopOpacity="0" />
                                                                <stop offset="0.4991" stopColor="#000000" />
                                                                <stop offset="1" stopColor="#000000" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='t-w-[75%] t-h-[480px] t-p-4 t-flex t-justify-between t-bg-[#ffffff] t-border-2 t-border-[#277AF7] t-rounded-[25px] t-shadow-[0px_3px_20px_1px_rgba(0,0,0,0.15)]'>
                        <div className='t-w-[50%] t-py-2 t-px-4 t-overflow-auto t-scrollbar-none'>
                            <p className='t-text-[#277AF7] t-text-[22px] t-font-[sans-regular]'>{active?.title}</p>
                            <div className='t-text-[#000000] t-text-[15px] t-font-[sans-regular] t-text-justify t-mt-4 t-leading-6 ' dangerouslySetInnerHTML={{ __html: active?.description }} />
                        </div>
                        <div className='t-w-[50%] t-flex t-justify-end'>
                            <img className='t-w-[95%] t-h-full' src={active?.image} alt="" />
                        </div>
                    </div>

                </div>
                <div className='lg:t-hidden t-mt-10 t-bg-[#ffffff] t-rounded-[25px] t-px-4 t-py-6'>
                    <div className='t-flex t-justify-center'>
                        <img className='t-w-[360px] t-h-[220px] t-rounded-[16px]' src={active?.image} alt="" />
                    </div>
                    <div className='t-flex t-gap-4 t-mt-4 t-ml-2'>
                        <img className='t-my-auto' src={active.activeIcon} alt="" />
                        <p className='t-text-[#277AF7] t-text-[22px] t-font-[sans-regular] t-text-left'>{active?.title}</p>
                    </div>
                    <div className=''>
                        <p className='t-text-[#000000] t-text-[16px] t-font-[sans-regular] t-text-justify t-mt-4 t-leading-6 '>{active?.description}</p>
                    </div>
                </div>
                <div className='t-flex t-justify-center t-mt-8 t-gap-4 lg:t-hidden'>
                    <div className='t-w-[40px] t-h-[40px] t-bg-[#ffffff] t-border t-border-[#277AF7] t-rounded-full'>
                        <svg onClick={handleClickPrevious} className='t-mx-auto t-mt-3' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.83496 12.25L1.58496 7L6.83496 1.75" stroke="#277AF7" strokeWidth="2.16562" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className='t-w-[40px] t-h-[40px] t-bg-[#ffffff] t-border t-border-[#277AF7] t-rounded-full'>
                        <svg onClick={handleClickNext} className='t-mx-auto t-mt-3' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.61816 1.75L6.86816 7L1.61816 12.25" stroke="#277AF7" strokeWidth="2.16562" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="t-hidden lg:t-block t-absolute t-right-4 t-top-0">
                <img className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out" src="/images/vtsWatarMarkReverse.png" alt="about-us" />
            </div>
        </div>
    )
}
