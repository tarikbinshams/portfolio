import React from 'react'
import TESTIMONIAL from '@contents/LandingPage/Testimonial'
export default function Testimonial() {
    const [activeReview, setActiveReview] = React.useState(TESTIMONIAL?.reviews[0]);

    const handleClickNext = () => {
        const currentIndex = TESTIMONIAL?.reviews.findIndex((review) => review.id === activeReview?.id);
        if (currentIndex === TESTIMONIAL?.reviews.length - 1) {
            setActiveReview(TESTIMONIAL?.reviews[0]);
        } else {
            setActiveReview(TESTIMONIAL?.reviews[currentIndex! + 1]);
        }
    };
    const handleClickPrevious = () => {
        const currentIndex = TESTIMONIAL?.reviews.findIndex((review) => review.id === activeReview?.id);
        if (currentIndex === 0) {
            setActiveReview(TESTIMONIAL?.reviews[TESTIMONIAL?.reviews.length - 1]);
        } else {
            setActiveReview(TESTIMONIAL?.reviews[currentIndex! - 1]);
        }
    };
    return (
        <div id="testimonials">
            <div className='t-bg-[#ffffff] t-h-[740px] lg:t-h-[380px] t-w-full t-mb-16 lg:t-mb-24 t-relative'>
                <div className='lg:t-max-w-[1400px] t-m-auto t-px-4 lg:t-px-16'>
                    <div className='t-grid t-grid-cols-1 lg:t-grid-cols-3'>
                        <div className='t-col-span-1 t-mt-10'>
                            <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[24px] t-text-center lg:t-text-left">{TESTIMONIAL?.title}</p>
                            <div className="t-flex t-justify-start">
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
                            <p className='t-text-center lg:t-text-left t-mt-4 t-text-[#1B1617] t-font-[sans-regular] t-text-[17px]'>{TESTIMONIAL?.description}</p>

                            <div className='t-flex t-justify-center lg:t-justify-start t-gap-4 t-mt-10 lg:t-mt-20'>
                                <img className='t-w-[160px] t-h-[60px] t-rounded-full' src='/images/reviewers.PNG' alt="" />
                                <p className='t-mt-2.5 t-text-[#1B1617] t-text-[18px] t-font-[sans-regular]'>10k+ Reviews</p>
                            </div>
                        </div>
                        <div className='t-col-span-2 t-mt-10 lg:t-ml-40 t-relative'>
                            <div className='t-h-[200px] lg:t-h-[160px]'>
                                <p className='t-text-[#252526] t-text-[17px] t-font-[sans-regular] t-text-justify'>&ldquo; {activeReview?.review} &rdquo;</p>
                            </div>
                            <div className=''>
                                <div className='t-flex t-justify-between t-mt-8 lg:t-mt-0'>
                                    <div className='t-flex t-gap-4'>
                                        <img className='t-w-[55px] t-h-[55px] t-rounded-full t-mt-2.5' src={activeReview?.image} alt="" />
                                        <div className='t-mt-2'>
                                            <p className='t-text-[#1B1617] t-text-[20px] t-font-[sans-bold]'>{activeReview?.name}</p>
                                            <p className='t-text-[#1B1617] t-text-[16px] t-font-[sans-regular]'>{activeReview?.designation}</p>
                                        </div>
                                    </div>
                                    <div className='t-flex t-gap-2 t-mt-4'>
                                        <p className='t-text-[#1B1617] t-text-[18px] t-font-[sans-regular]'>{activeReview?.rating}</p>
                                        <svg className='t-mt-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.2" d="M11.5079 9.23126C11.4394 9.29146 11.3884 9.36909 11.3605 9.45591C11.3325 9.54274 11.3286 9.63552 11.3492 9.72439L12.1942 13.3831C12.2165 13.4787 12.2102 13.5787 12.1761 13.6707C12.142 13.7627 12.0815 13.8427 12.0023 13.9006C11.9231 13.9585 11.8286 13.9918 11.7305 13.9964C11.6325 14.0009 11.5353 13.9766 11.451 13.9263L8.25729 11.9888C8.17968 11.9416 8.09061 11.9166 7.99979 11.9166C7.90896 11.9166 7.81989 11.9416 7.74229 11.9888L4.54853 13.9263C4.46427 13.9766 4.36706 14.0009 4.26903 13.9964C4.17101 13.9918 4.07649 13.9585 3.99726 13.9006C3.91803 13.8427 3.85759 13.7627 3.82348 13.6707C3.78936 13.5787 3.78308 13.4787 3.80541 13.3831L4.65041 9.72439C4.67095 9.63552 4.66704 9.54274 4.63908 9.45591C4.61113 9.36909 4.56019 9.29146 4.49166 9.23126L1.67228 6.77188C1.59691 6.70782 1.54223 6.62284 1.51517 6.52769C1.48811 6.43254 1.48988 6.3315 1.52025 6.23736C1.55063 6.14322 1.60825 6.0602 1.68582 5.99882C1.76339 5.93743 1.85743 5.90043 1.95603 5.89251L5.67229 5.57126C5.76295 5.56318 5.84969 5.53051 5.92316 5.47676C5.99662 5.42301 6.05402 5.35023 6.08916 5.26626L7.54104 1.80626C7.57981 1.7168 7.6439 1.64064 7.72541 1.58714C7.80692 1.53363 7.90229 1.50513 7.99979 1.50513C8.09728 1.50513 8.19266 1.53363 8.27416 1.58714C8.35567 1.64064 8.41976 1.7168 8.45854 1.80626L9.91041 5.26626C9.94555 5.35023 10.0029 5.42301 10.0764 5.47676C10.1499 5.53051 10.2366 5.56318 10.3273 5.57126L14.0435 5.89251C14.1421 5.90043 14.2362 5.93743 14.3137 5.99882C14.3913 6.0602 14.4489 6.14322 14.4793 6.23736C14.5097 6.3315 14.5115 6.43254 14.4844 6.52769C14.4573 6.62284 14.4027 6.70782 14.3273 6.77188L11.5079 9.23126Z" fill="#277AF7" />
                                            <path d="M14.9502 6.08074C14.8897 5.89411 14.7755 5.72941 14.6221 5.60717C14.4686 5.48492 14.2825 5.41052 14.0871 5.39324L10.3752 5.07324L8.92021 1.61324C8.84446 1.43169 8.71668 1.27661 8.55297 1.16753C8.38926 1.05845 8.19693 1.00024 8.00021 1.00024C7.80349 1.00024 7.61116 1.05845 7.44745 1.16753C7.28374 1.27661 7.15596 1.43169 7.08021 1.61324L5.62958 5.07324L1.91333 5.39512C1.71711 5.41161 1.53011 5.48567 1.37581 5.608C1.2215 5.73034 1.10675 5.89552 1.04594 6.08281C0.985134 6.27011 0.980978 6.47119 1.03399 6.66084C1.08701 6.85048 1.19484 7.02026 1.34396 7.14887L4.16333 9.61262L3.31833 13.2714C3.27365 13.4628 3.2864 13.6632 3.35499 13.8475C3.42358 14.0317 3.54496 14.1917 3.70396 14.3073C3.86296 14.423 4.05252 14.4892 4.24894 14.4977C4.44537 14.5062 4.63994 14.4566 4.80833 14.3551L7.99584 12.4176L11.1902 14.3551C11.3586 14.4566 11.5532 14.5062 11.7496 14.4977C11.946 14.4892 12.1356 14.423 12.2946 14.3073C12.4536 14.1917 12.575 14.0317 12.6436 13.8475C12.7121 13.6632 12.7249 13.4628 12.6802 13.2714L11.8358 9.60887L14.6546 7.14887C14.8037 7.01981 14.9113 6.84956 14.9639 6.65951C15.0165 6.46946 15.0117 6.2681 14.9502 6.08074ZM13.999 6.39324L11.1802 8.85324C11.043 8.97258 10.941 9.12706 10.885 9.30006C10.8291 9.47307 10.8214 9.65806 10.8627 9.83512L11.7096 13.5001L8.51771 11.5626C8.36198 11.4678 8.18317 11.4176 8.00083 11.4176C7.8185 11.4176 7.63969 11.4678 7.48396 11.5626L4.29646 13.5001L5.13771 9.83762C5.17905 9.66055 5.17134 9.47557 5.1154 9.30256C5.05945 9.12956 4.9574 8.97508 4.82021 8.85574L2.00021 6.39699C1.99998 6.39513 1.99998 6.39324 2.00021 6.39137L5.71521 6.07012C5.89659 6.05413 6.07016 5.98893 6.21719 5.88154C6.36423 5.77415 6.47916 5.62865 6.54958 5.46074L8.00021 2.00512L9.45021 5.46074C9.52063 5.62865 9.63556 5.77415 9.7826 5.88154C9.92964 5.98893 10.1032 6.05413 10.2846 6.07012L14.0002 6.39137V6.39574L13.999 6.39324Z" fill="#277AF7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='t-flex t-justify-center sm:t-justify-start lg:t-ml-4 t-mt-6 t-gap-4'>
                                    <div onClick={handleClickPrevious} className='t-w-[36px] t-h-[36px] t-bg-[#ffffff] t-border t-border-[#277AF7] t-rounded-full t-cursor-pointer'>
                                        <svg className='t-mx-auto t-mt-2.5' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.83496 12.25L1.58496 7L6.83496 1.75" stroke="#277AF7" strokeWidth="2.16562" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div onClick={handleClickNext} className='t-w-[36px] t-h-[36px] t-bg-[#ffffff] t-border t-border-[#277AF7] t-rounded-full t-cursor-pointer'>
                                        <svg className='t-mx-auto t-mt-2.5' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.61816 1.75L6.86816 7L1.61816 12.25" stroke="#277AF7" strokeWidth="2.16562" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="t-hidden lg:t-block t-absolute t-left-4 t-top-20">
                    <img className="t-w-[190px] t-h-[190px] hover:t-scale-110 t-transition t-duration-300 t-ease-in-out" src="/images/vtsWatarMark.png" alt="about-us" />
                </div>
            </div>
        </div>
    )
}
