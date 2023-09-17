import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CalenderComponent = ({ dateSelect }: { dateSelect: any }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs()); // The current month, initialized to the current date
  const [selectedDate, setSelectedDate] = useState<any>(dayjs().add(1, "day")); // The currently selected date, initialized to next day
  const dates = getDatesForMonth(currentMonth.year(), currentMonth.month());

  function getDatesForMonth(year: number, month: number) {
    const daysInMonth = dayjs(`${year}-${month + 1}-01`).daysInMonth(); // The number of days in the month
    const firstDayOfMonth = dayjs(`${year}-${month + 1}-01`).day(); // The day of the week of the first day of the month
    const lastDayOfPrevMonth = dayjs(`${year}-${month}-01`).endOf("month").date(); // The last day of the previous month
    const dates: any = []; // An array to store the dates

    // Add empty dates from the previous month to the array
    for (let i = firstDayOfMonth; i > 0; i--) {
      dates.push(dayjs(`${year}-${month}-${lastDayOfPrevMonth - i + 1}`));
    }

    // Add each date for the current month to the array
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(dayjs(`${year}-${month + 1}-${i}`));
    }

    // Add empty dates from the next month to the array
    for (let i = 1; dates.length % 7 !== 0; i++) {
      dates.push(dayjs(`${year}-${month + 2}-${i}`));
    }

    return dates;
  }

  const handleSelectDate = (date: any) => {
    if (date.isBefore(dayjs(), "day")) return;
    //date is today return
    if (date.isSame(dayjs(), "day")) return;
    setSelectedDate(date);
    // console.log("SELECTED DATE", selectedDate);
    // console.log("CUSTOM DATE", dayjs(new Date()));

    dateSelect(date);
  };

  return (
    <React.Fragment>
      <div className="t-flex t-flex-col t-rounded-lg t-mb-4">
        <div className="t-flex t-justify-between t-px-0.5 t-mb-2">
          <h2 className="t-text-[#277AF7] t-my-auto t-font-medium">
            {currentMonth.format("MMMM YYYY")}
          </h2>
          <div className="t-flex t-gap-x-4">
            <div
              onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
              className="t-w-8 t-h-8 t-flex t-justify-center t-items-center hover:t-cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2908 11.9997L14.8308 8.4597C15.017 8.27234 15.1216 8.01889 15.1216 7.7547C15.1216 7.49052 15.017 7.23707 14.8308 7.0497C14.7378 6.95598 14.6272 6.88158 14.5054 6.83081C14.3835 6.78004 14.2528 6.75391 14.1208 6.75391C13.9888 6.75391 13.8581 6.78004 13.7362 6.83081C13.6144 6.88158 13.5038 6.95598 13.4108 7.0497L9.1708 11.2897C9.07707 11.3827 9.00268 11.4933 8.95191 11.6151C8.90114 11.737 8.875 11.8677 8.875 11.9997C8.875 12.1317 8.90114 12.2624 8.95191 12.3843C9.00268 12.5061 9.07707 12.6167 9.1708 12.7097L13.4108 16.9997C13.5042 17.0924 13.6151 17.1657 13.7369 17.2155C13.8587 17.2652 13.9892 17.2905 14.1208 17.2897C14.2524 17.2905 14.3829 17.2652 14.5047 17.2155C14.6265 17.1657 14.7374 17.0924 14.8308 16.9997C15.017 16.8123 15.1216 16.5589 15.1216 16.2947C15.1216 16.0305 15.017 15.7771 14.8308 15.5897L11.2908 11.9997Z"
                  fill="#4F46E5"
                />
              </svg>
            </div>
            <div
              onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
              className="t-w-8 t-h-8 t-flex t-justify-center t-items-center hover:t-cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8297 11.2897L10.5897 7.0497C10.4967 6.95598 10.3861 6.88158 10.2643 6.83081C10.1424 6.78004 10.0117 6.75391 9.8797 6.75391C9.74769 6.75391 9.61698 6.78004 9.49512 6.83081C9.37326 6.88158 9.26266 6.95598 9.1697 7.0497C8.98345 7.23707 8.87891 7.49052 8.87891 7.7547C8.87891 8.01889 8.98345 8.27234 9.1697 8.4597L12.7097 11.9997L9.1697 15.5397C8.98345 15.7271 8.87891 15.9805 8.87891 16.2447C8.87891 16.5089 8.98345 16.7623 9.1697 16.9497C9.26314 17.0424 9.37395 17.1157 9.49579 17.1655C9.61763 17.2152 9.74809 17.2405 9.8797 17.2397C10.0113 17.2405 10.1418 17.2152 10.2636 17.1655C10.3854 17.1157 10.4963 17.0424 10.5897 16.9497L14.8297 12.7097C14.9234 12.6167 14.9978 12.5061 15.0486 12.3843C15.0994 12.2624 15.1255 12.1317 15.1255 11.9997C15.1255 11.8677 15.0994 11.737 15.0486 11.6151C14.9978 11.4933 14.9234 11.3827 14.8297 11.2897Z"
                  fill="#4F46E5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="t-rounded-md t-py-1 t-min-h-[240px]">
          <div className="t-grid t-grid-cols-7 t-pb-0 t-px-0">
            <div className="t-text-center t-font-medium t-p-3">S</div>
            <div className="t-text-center t-font-medium t-p-3">M</div>
            <div className="t-text-center t-font-medium t-p-3">T</div>
            <div className="t-text-center t-font-medium t-p-3">W</div>
            <div className="t-text-center t-font-medium t-p-3">T</div>
            <div className="t-text-center t-font-medium t-p-3">F</div>
            <div className="t-text-center t-font-medium t-p-3">S</div>

            {dates?.map((date: any, index: any) => {
              return (
                <div key={index} className={`${!date ? "t-text-gray-400" : ""}`}>
                  {date && (
                    <div
                      className={`t-text-sm t-font-medium t-p-3 ${
                        dayjs(date).format("DD-MM-YYYY") ===
                          dayjs(selectedDate).format("DD-MM-YYYY") &&
                        "t-bg-[#2B79D3] t-rounded-[4px] t-text-[#ffffff]"
                      }`}
                    >
                      <div
                        onClick={() => handleSelectDate(date)}
                        className={`
                                    t-text-sm t-font-medium t-text-center 
                                    ${date.month() !== currentMonth.month() && "t-text-gray-400"}
                                    ${
                                      dayjs(date).format("DD-MM-YYYY") ===
                                        dayjs(selectedDate).format("DD-MM-YYYY") &&
                                      "t-text-[#ffffff]"
                                    }
                                    ${
                                      dayjs(date, "DD-MM-YYYY").toDate() > new Date()
                                        ? "t-cursor-pointer"
                                        : "t-cursor-not-allowed"
                                    }
                                `}
                      >
                        {date.date()}
                        {dayjs(date).format("DD-MM-YYYY") ===
                          dayjs(new Date()).format("DD-MM-YYYY") && (
                          <div className="t-mt-[-1px] t-h-[1px] t-mx-auto t-text-center t-text-black t-text-[16px] t-leading-3">
                            •
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalenderComponent;
