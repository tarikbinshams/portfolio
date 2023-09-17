import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import PORTFOLIO from "@contents/LandingPage/Portfolio";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
];

function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts?.PREV ? <img src={'/images/left.svg'} /> : <img src={'/images/right.svg'} />
    return (
        <button onClick={onClick} disabled={isEdge}>
            {pointer}
        </button>
    )
}

const Carousal = ({ active, setActive }) => {
    return (
        <>
            <div className="">
                <Carousel renderArrow={myArrow} breakPoints={breakPoints} pagination={false}>
                    <CarousalItem1 content={PORTFOLIO?.projects[0]} set={setActive} />
                    <CarousalItem2 content={PORTFOLIO?.projects[1]} set={setActive} />
                    <CarousalItem3 content={PORTFOLIO?.projects[2]} set={setActive} />
                    <CarousalItem4 content={PORTFOLIO?.projects[3]} set={setActive} />
                    <CarousalItem5 content={PORTFOLIO?.projects[4]} set={setActive} />
                </Carousel>
            </div>
        </>
    );
};



const CarousalItem1 = ({ content, set }) => {
    return (
        <div className={`carouselItem1`}>
            <div className="itemText">
                <p className="t-text-[#FFFFFF] t-text-[24px] t-font-[sans-regular] t-text-center">{content?.title}</p>
                <div className="t-flex t-justify-center t-mt-6">
                    <span onClick={() => set(content)} style={{ border: "2px solid #ffffff", borderRadius: "22px" }} className="t-text-[#FFFFFF] t-cursor-pointer t-text-[14px] t-font-[sans-regular] t-px-4 t-py-1">Learn More</span>
                </div>
            </div>
        </div>
    )
}

const CarousalItem2 = ({ content, set }) => {
    return (
        <div className={`carouselItem2`}>
            <div className="itemText">
                <p className="t-text-[#FFFFFF] t-text-[24px] t-font-[sans-regular] t-text-center">{content?.title}</p>
                <div className="t-flex t-justify-center t-mt-6">
                    <span onClick={() => set(content)} style={{ border: "2px solid #ffffff", borderRadius: "22px" }} className="t-text-[#FFFFFF] t-cursor-pointer t-text-[14px] t-font-[sans-regular] t-px-4 t-py-1">Learn More</span>
                </div>
            </div>
        </div>
    )
}

const CarousalItem3 = ({ content, set }) => {
    return (
        <div className={`carouselItem3`}>
            <div className="itemText">
                <p className="t-text-[#FFFFFF] t-text-[24px] t-font-[sans-regular] t-text-center">{content?.title}</p>
                <div className="t-flex t-justify-center t-mt-6">
                    <span onClick={() => set(content)} style={{ border: "2px solid #ffffff", borderRadius: "22px" }} className="t-text-[#FFFFFF] t-cursor-pointer t-text-[14px] t-font-[sans-regular] t-px-4 t-py-1">Learn More</span>
                </div>
            </div>
        </div>
    )
}

const CarousalItem4 = ({ content, set }) => {
    return (
        <div className={`carouselItem4`}>
            <div className="itemText">
                <p className="t-text-[#FFFFFF] t-text-[24px] t-font-[sans-regular] t-text-center">{content?.title}</p>
                <div className="t-flex t-justify-center t-mt-6">
                    <span onClick={() => set(content)} style={{ border: "2px solid #ffffff", borderRadius: "22px" }} className="t-text-[#FFFFFF] t-cursor-pointer t-text-[14px] t-font-[sans-regular] t-px-4 t-py-1">Learn More</span>
                </div>
            </div>
        </div>
    )
}

const CarousalItem5 = ({ content, set }) => {
    return (
        <div className={`carouselItem5`}>
            <div className="itemText">
                <p className="t-text-[#FFFFFF] t-text-[24px] t-font-[sans-regular] t-text-center">{content?.title}</p>
                <div className="t-flex t-justify-center t-mt-6">
                    <span onClick={() => set(content)} style={{ border: "2px solid #ffffff", borderRadius: "22px" }} className="t-text-[#FFFFFF] t-cursor-pointer t-text-[14px] t-font-[sans-regular] t-px-4 t-py-1">Learn More</span>
                </div>
            </div>
        </div>
    )
}

export default Carousal;
