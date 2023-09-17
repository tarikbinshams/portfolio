import { AppointmentServiceInstance } from "@app/appointment/services/AppointmentService";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ViewDetails from "./ViewDetails";
import SortIcon from "@components/common/SortIcon";

const AppointmentRow = ({ idx, data, details }: any) => {
  return (
    <div
      className={`t-h-[60px] t-font-[sans-regular] t-mt-2 t-rounded-[5px] t-border-t t-border-gray-200 t-shadow-md
                    ${idx % 2 == 0 ? "t-bg-[#F7F4FE]" : "t-bg-white"}`}
    >
      <div className="t-w-full t-grid t-grid-cols-8 t-pt-4 t-px-4">
        <span className="t-col-span-1">{data?.id}</span>
        <span className="t-col-span-1">{data?.name}</span>
        <span className="t-col-span-2">{data?.email}</span>
        <span className="t-col-span-1">{data?.appointment_date}</span>
        <span className="t-col-span-1">{data?.appointment_time}</span>
        <span className="t-col-span-1">
          <span
            className={`${data?.status === "pending" && "t-bg-blue-100 t-text-blue-800"} ${data?.status === "accepted" && "t-bg-green-100 t-text-green-800"
              } ${data?.status === "rejected" && "t-bg-red-100 t-text-red-800"
              } t-text-sm t-font-[plain-light] t-mr-2 t-px-2.5 t-pb-0.5 t-rounded t-capitalize`}
          >
            {data?.status}
          </span>
        </span>
        <span className="t-col-span-1">
          <svg
            onClick={() => details(data)}
            className="t-cursor-pointer t-ml-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4a90e2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </span>
      </div>
    </div>
  );
};

const AppointmentCard = ({ data, details }: any) => {
  return (
    <div className="t-h-[180px] t-bg-[#EDF5FD] t-rounded-[12px] t-p-4 t-my-4">
      <div className="t-flex t-justify-between t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">Serial:</span> <span className="t-opacity-100">{data?.id}</span>
        </p>
        <span
          className={`${data?.status === "pending" && "t-bg-blue-100 t-text-blue-800"} ${data?.status === "accepted" && "t-bg-green-100 t-text-green-800"
            } ${data?.status === "rejected" && "t-bg-red-100 t-text-red-800"
            } t-text-[16px] t-font-[sans-regular] t-mr-2 t-px-2.5 t-pb-0.5 t-rounded t-capitalize`}
        >
          {data?.status}
        </span>
      </div>
      <div className="t-my-2 t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">Name:</span> <span className="t-opacity-100">{data?.name}</span>
        </p>
      </div>
      <div className="t-my-2 t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">email:</span> <span className="t-opacity-100">{data?.email}</span>
        </p>
      </div>
      <div className="t-flex t-justify-between t-my-2 t-font-[sans-regular]">
        <p>
          <span className="t-opacity-80">Date:</span> <span className="t-opacity-100">{data?.appointment_date}</span>
        </p>
        <p className="t-font-[sans-regular]">
          <span className="t-opacity-80">Time:</span> <span className="t-opacity-100">{data?.appointment_time}</span>
        </p>
      </div>
      <div className="t-my-2 t-flex t-justify-center">
        <svg
          onClick={() => details(data)}
          className="t-cursor-pointer t-ml-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4a90e2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
    </div>
  );
};

export default function AppointmentList() {
  const [page, setPage] = useState(1);
  const [isUpdated, setIsUpdated] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [details, setDetails] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const categoryRefDesktop = React.useRef<any>();
  const [typeSelected, setTypeSelected] = useState("");
  const [sort, setSort] = useState("");

  const {
    data: appointmentData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["blogs", dataPerPage, page, isUpdated, searchValue, typeSelected, sort], async () => {
    const data: any = await AppointmentServiceInstance.getAppointments({
      page: page,
      limit: dataPerPage,
      search: searchValue,
      status: typeSelected === 'all' ? '' : typeSelected,
      sort: sort
    });
    return data;
  });

  const handleSort = (data: string) => {
    if (sort !== data) {
      setSort(data);
    } else {
      setSort('');
    }
  }

  return (
    <>
      <div className="t-flex t-justify-between">
        <div className="t-flex t-gap-8">
          <div className="t-relative t-my-auto">
            <div className="t-absolute t-pb-0 t-inset-y-0 t-left-0 t-flex t-items-center t-pl-3 t-pointer-events-none">
              <svg
                aria-hidden="true"
                className="t-w-4 t-h-4 t-text-[#0306275e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className={`t-pl-10 t-rounded-[7px] t-border-[2px] t-bg-transparent t-border-[#2b79d386] t-py-1 t-w-[180px] t-text-[#000000] t-text-left t-text-[16px] t-font-[sans-regular] placeholder:t-text-[#030627] t-outline-none focus:t-border-[#2B79D3]`}
              placeholder="Search by name"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>

          <div className="t-relative t-flex t-justify-start">
            <div>
              <select
                ref={categoryRefDesktop}
                id="category"
                onChange={() =>
                  categoryRefDesktop.current &&
                  setTypeSelected(categoryRefDesktop.current.value)
                }
                className="t-w-full t-py-1 t-px-6 t-font-[sans-regular] t-border-2 t-border-[#2b79d386] t-bg-inherit t-rounded-md t-shadow-sm 
                                  focus:t-outline-none focus:t-ring focus:t-border-blue-300"
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="t-hidden lg:t-block t-my-6 t-border t-border-[#2B79D3] t-rounded-[7px] t-h-[calc(100vh-10rem)] t-overflow-y-auto t-p-1">
        <div className="t-h-[60px] t-bg-[#EDF5FD] t-rounded-t-[7px] ">
          <div className="t-w-full t-grid t-grid-cols-8 t-pt-4 t-px-4 t-font-[sans-regular]">
            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Serial</span>
              <div onClick={() => handleSort('id')}><SortIcon active={sort === 'id' ? true : false} /></div>
            </div>

            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Name</span>
              <div onClick={() => handleSort('name')}><SortIcon active={sort === 'name' ? true : false} /></div>
            </div>

            <div className="t-col-span-2 t-flex t-gap-2">
              <span className="">Email</span>
              <div onClick={() => handleSort('email')}><SortIcon active={sort === 'email' ? true : false} /></div>
            </div>

            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Date</span>
              <div onClick={() => handleSort('date')}><SortIcon active={sort === 'date' ? true : false} /></div>
            </div>

            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Time</span>
              <div onClick={() => handleSort('time')}><SortIcon active={sort === 'time' ? true : false} /></div>
            </div>

            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Status</span>
              <div onClick={() => handleSort('status')}><SortIcon active={sort === 'status' ? true : false} /></div>
            </div>

            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Details</span>
            </div>
          </div>
        </div>

        {appointmentData?.map((data: any, index: number) => (
          <AppointmentRow key={index} idx={index} data={data} details={setDetails} />
        ))}
      </div>
      <div className="lg:t-hidden t-px-4 t-mt-4">
        {appointmentData?.map((data: any, index: number) => (
          <AppointmentCard key={index} data={data} details={setDetails} />
        ))}
      </div>
      {details && <ViewDetails data={details} show={setDetails} setIsUpdated={setIsUpdated} />}
    </>
  );
}
