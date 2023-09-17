export default function SectionHeading({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div>
      <div className="t-flex t-justify-center">
        <p className="t-uppercase t-text-[#1B1617] t-font-[sans-bold] t-text-[28px] t-text-center">
          {title}
        </p>
      </div>
      <div className="t-flex t-justify-center">
        <svg
          className="t-mt-3"
          width="282"
          height="1.75"
          viewBox="0 0 282 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1H281" stroke="url(#line_1)" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient
              id="line_1"
              x1="1"
              y1="1.49888"
              x2="283"
              y2="2.49887"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#277AF7" stopOpacity="0" />
              <stop offset="0.4991" stopColor="#277AF7" />
              <stop offset="1" stopColor="#277AF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="t-text-center t-mt-4 t-text-[#000000] t-font-[sans-regular] t-text-[17px]">
        {subTitle}
      </p>
    </div>
  );
}
