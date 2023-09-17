import { AppointmentServiceInstance } from "@app/appointment/services/AppointmentService";
import SortIcon from "@components/common/SortIcon";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const SubscriptionRow = ({ idx, data }: any) => {
  return (
    <div
      className={`t-h-[60px] t-font-[sans-regular] t-mt-2 t-rounded-[5px] t-border-t t-border-gray-200 t-shadow-md
                    ${idx % 2 == 0 ? "t-bg-[#F7F4FE]" : "t-bg-white"}`}
    >
      <div className="t-w-full t-grid t-grid-cols-5 t-pt-4 t-px-4">
        <span className="t-col-span-1">{data?.id}</span>
        <span className="t-col-span-3">{data?.email}</span>
        <span className="t-col-span-1">{dayjs(data?.created_at).format("MM/DD/YYYY")}</span>
      </div>
    </div>
  );
};

export default function SubscriptionList() {
  const [page, setPage] = useState(1);
  const [isUpdated, setIsUpdated] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [details, setDetails] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("");

  const {
    data: subscriptionData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["subscriptions", searchValue, sort], async () => {
    const subsData: any = await AppointmentServiceInstance.allSubscription({
      search: searchValue,
      sort: sort
    });
    return subsData;
  });

  const handleSort = (data: string) => {
    if(sort !== data){
      setSort(data);
    }else{
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
              placeholder="Search by email"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
        </div>
      </div>
      <div className="t-block t-my-6 t-border t-border-[#2B79D3] t-rounded-[7px] t-h-[calc(100vh-10rem)] t-overflow-y-auto t-p-1">
        <div className="t-h-[60px] t-bg-[#EDF5FD] t-rounded-t-[7px] ">
          <div className="t-w-full t-grid t-grid-cols-5 t-pt-4 t-px-4 t-font-[sans-regular]">
            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Serial</span>
              <div onClick={() => handleSort('id')}><SortIcon active={sort === 'id' ? true : false} /></div>
            </div>
            <div className="t-col-span-3 t-flex t-gap-2">
              <span >Email</span>
              <div onClick={() => handleSort('email')}><SortIcon active={sort === 'email' ? true : false} /></div>
            </div>
            <div className="t-col-span-1 t-flex t-gap-2">
              <span className="">Created Date</span>
              <div onClick={() => handleSort('created_at')}><SortIcon active={sort === 'created_at' ? true : false} /></div>
            </div>
          </div>
        </div>

        {subscriptionData?.map((data: any, index: number) => (
          <SubscriptionRow key={index} idx={index} data={data} />
        ))}
      </div>
    </>
  );
}
