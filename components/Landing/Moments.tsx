import React, { lazy } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion';


const variantsForMobile: any = {
    initial: (mobileDirection: any) => {
        return {
            x: mobileDirection === 'left' ? "5%" : "-100%",
            opacity: 0
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: 'ease-in',
        duration: 0.7

    },
    // exit: (mobileDirection: any) => {
    //     return {
    //         x: mobileDirection === 'right' ? "-100%" : "0%",
    //         opacity: 0,
    //         transition: 'ease-in'
    //     }
    // }
}

export default function Moments({ slides }: any) {
    const [current, setCurrent] = React.useState(slides[1].key);
    const [previous, setPrevious] = React.useState(slides[0].key);
    const [next, setNext] = React.useState(slides[2].key);
    const [changeSide, setChangeSide] = React.useState<string>('');
    const [mobileDirection, setMobileDirection] = React.useState('');

    const handleCurrentImage = async (index: number, type: string) => {
        setCurrent(index);

        // await wait(350);
        if (index === 1) {
            setPrevious(slides.length - 1);
            setNext(index + 1);
            return;
        } else if (index === slides.length - 1) {
            setPrevious(index - 1);
            setNext(1);
            return;
        }

        setPrevious(index - 1);
        setNext(index + 1);

        setChangeSide(type);

    };

    const handleNext = () => {
        setMobileDirection('right');
        if (current === slides.length - 1) {
            setCurrent(1);
            setPrevious(slides.length - 1);
            setNext(2);
            return;
        }

        setCurrent(current + 1);
        setPrevious(current);
        setNext(current + 2);
    };

    const handlePrevious = () => {
        setMobileDirection('left');
        if (current === 1) {
            setCurrent(slides.length - 1);
            setPrevious(slides.length - 2);
            setNext(1);
            return;
        }

        setCurrent(current - 1);
        setPrevious(current - 2);
        setNext(current);
    }




    return (
        <div className='t-w-full t-mx-auto'>
            <div className=''>
                <div className='t-hidden lg:t-flex t-justify-between t-relative t-mt-6'>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={previous}
                            initial={{
                                x: changeSide === 'left' ? "-20%" : "20%",
                                scale: changeSide === 'left' ? 0.8 : 1.2,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                            }}
                            className="t-z-10 t-w-[350px] t-h-[220px] t-overflow-hidden">
                            <Image onClick={() => handleCurrentImage(previous, 'left')} src={slides[previous]?.src} alt="8" width={350} height={220} loading="lazy" className='t-rounded-[10px] t-cursor-pointer' layout="responsive" />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={next}
                            initial={{
                                x: changeSide === 'right' ? "20%" : "-20%",
                                scale: changeSide === 'right' ? 0.8 : 1.2,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                            }}
                            className="t-z-10 t-w-[350px] t-h-[220px] t-overflow-hidden"
                        >
                            <Image onClick={() => handleCurrentImage(next, 'right')} src={slides[next]?.src} alt="8" width={350} height={220} loading="lazy" className='t-rounded-[10px] t-cursor-pointer' layout="responsive" />
                        </motion.div>
                    </AnimatePresence>

                    <div className="t-absolute t-top-[-35px] t-left-[65px] t-z-30">
                        <AnimatePresence mode="wait" initial={false} custom={changeSide}>
                            <motion.div
                                key={current}
                                initial={{ x: changeSide === 'left' ? "-15%" : "15%", scale: 0.8 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                // exit={{ opacity: 1, x: changeSide === 'left' ? "10%" : "-10%", scale: 0.8, }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    duration: 0.5,
                                }}
                                custom={changeSide}

                            >
                                <Image src={slides[current]?.src} alt="8" className='t-h-[240px] t-w-[380px] t-rounded-[10px]' width={410} height={240} loading="lazy" />

                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>

                <div className='t-w-[280px] t-mx-auto lg:t-hidden'>
                    <div className='t-flex t-justify-between t-relative t-mt-12'>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={previous}
                                initial={{
                                    x: changeSide === 'left' ? "-20%" : "20%",
                                    scale: changeSide === 'left' ? 0.8 : 1.2,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    duration: 0.5,
                                }}
                                className="t-z-10 t-w-[170px] t-h-[120px] t-overflow-hidden">
                                <Image onClick={() => handleCurrentImage(previous, 'left')} src={slides[previous]?.src} alt="8" width={180} height={120} loading="lazy" className='t-rounded-[10px] t-cursor-pointer' layout="responsive" />
                            </motion.div>
                        </AnimatePresence>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={next}
                                initial={{
                                    x: changeSide === 'right' ? "20%" : "-20%",
                                    scale: changeSide === 'right' ? 0.8 : 1.2,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    duration: 0.5,
                                }}
                                className="t-z-10 t-w-[170px] t-h-[120px] t-overflow-hidden"
                            >
                                <Image onClick={() => handleCurrentImage(next, 'right')} src={slides[next]?.src} alt="8" width={180} height={120} loading="lazy" className='t-rounded-[10px] t-cursor-pointer' layout="responsive" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="t-absolute t-top-[-15px] t-left-[34px] t-z-30">
                            <AnimatePresence mode="wait" initial={false} custom={changeSide}>
                                <motion.div
                                    key={current}
                                    initial={{ x: changeSide === 'left' ? "-15%" : "15%", scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    // exit={{ opacity: 1, x: changeSide === 'left' ? "10%" : "-10%", scale: 0.8, }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        duration: 0.5,
                                    }}
                                    custom={changeSide}

                                >
                                    <Image src={slides[current]?.src} alt="8" className='t-h-[130px] t-w-[220px] t-rounded-[10px]' width={220} height={130} loading="lazy" />

                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
