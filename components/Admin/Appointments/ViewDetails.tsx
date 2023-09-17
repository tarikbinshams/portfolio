import React, { useEffect, useRef, useState } from "react";
import { set } from "zod";
import { useMutation } from "react-query";
import { AppointmentServiceInstance } from "@app/appointment/services/AppointmentService";

export default function ViewDetails({ data, show, setIsUpdated }: any) {
  const modalRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(data?.status);
  const [initialStatus, setInitialStatus] = useState(data?.status);
  const [statusOpen, setStatusOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //outside click modal ref close modal
    const handleOutsideClick = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        show(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    //outside click modal ref close modal
    const handleOutsideClick = (event: any) => {
      if (!dropDownRef.current?.contains(event.target)) {
        setStatusOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function handleUpdateButton() {
    if (isLoading) return;
    mutation.mutate({ id: data?.id, updatedStatus: status });
  }

  const mutation = useMutation({
    mutationFn: async (dto: any) => await AppointmentServiceInstance.updateAppointmentStatus(dto),
    onMutate: (variables) => {
      setIsLoading(true);
    },
    onError: (error, variables, context) => {
      console.log(error);
      setIsLoading(false);
    },
    onSuccess: async (dto) => {
      setInitialStatus(dto.status);
      setIsUpdated((isUpdated: Boolean) => !isUpdated);
      setIsLoading(false);
    },
  });

  return (
    <div>
      <div className="t-bg-[#0e0e0e79] t-fixed t-top-0 t-left-0 t-right-0 t-bottom-0 t-z-50 t-w-full t-overflow-x-hidden t-overflow-y-auto t-inset-0 t-h-[calc(100%)] t-max-h-full">
        <div className="lg:t-h-[100vh] t-grid t-place-items-center t-py-10 lg:t-py-0">
          <div
            ref={modalRef}
            className="t-min-h-[400px] t-w-[350px] lg:t-min-h-[350px] lg:t-w-[800px] t-bg-[#ffffff] t-rounded-[7px]"
          >
            <div className="t-flex t-justify-between t-mt-4 t-px-4 sm:t-px-8">
              <p className="t-text-[#2B79D3] t-text-[20px] t-font-[sans-regular]">
                Appointment Details
              </p>
              <svg
                onClick={() => show(null)}
                className="t-mt-2 t-cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B79D3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <div className="t-px-4 sm:t-px-8 t-py-6">
              <div className="t-flex t-justify-between t-font-[sans-regular]">
                <p>
                  <span className="t-opacity-80">Type:</span> <span className="t-opacity-100">{data?.service_type}</span>
                </p>
                {/* <span className={`${data?.status === 'pending' && "t-bg-blue-100 t-text-blue-800"} ${data?.status === 'accepted' && "t-bg-green-100 t-text-green-800"} ${data?.status === 'rejected' && "t-bg-red-100 t-text-red-800"} t-text-sm t-font-[sans-regular] t-mr-2 t-px-2.5 t-pb-0.5 t-rounded t-capitalize`}>
                                    {data?.status}
                                </span> */}
                <div className="t-w-[120px]" ref={dropDownRef}>
                  <div
                    onClick={() => setStatusOpen(!statusOpen)}
                    className="t-bg-[#F1F5F9] hover:t-bg-[#dcecfb] t-w-full t-py-1.5 t-rounded-[5px] t-text-center t-cursor-pointer t-relative"
                  >
                    <span className="t-font-[600] t-flex t-justify-center t-ml-2">
                      <span className="t-mr-2 t-capitalize">{status}</span>
                      <svg
                        className="t-mt-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0013 12.4788C9.89019 12.4788 9.78241 12.458 9.67797 12.4163C9.57352 12.3747 9.48686 12.3191 9.41797 12.2497L5.58464 8.41634C5.43186 8.26356 5.35547 8.06912 5.35547 7.83301C5.35547 7.5969 5.43186 7.40245 5.58464 7.24967C5.73741 7.0969 5.93186 7.02051 6.16797 7.02051C6.40408 7.02051 6.59852 7.0969 6.7513 7.24967L10.0013 10.4997L13.2513 7.24967C13.4041 7.0969 13.5985 7.02051 13.8346 7.02051C14.0707 7.02051 14.2652 7.0969 14.418 7.24967C14.5707 7.40245 14.6471 7.5969 14.6471 7.83301C14.6471 8.06912 14.5707 8.26356 14.418 8.41634L10.5846 12.2497C10.5013 12.333 10.411 12.3922 10.3138 12.4272C10.2166 12.4622 10.1124 12.4794 10.0013 12.4788Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    {statusOpen && (
                      <div className="t-absolute t-top-10 t-w-full t-font-[sans-regular]">
                        <div className="t-h-[100px] t-bg-[#F1F5F9] t-rounded-[5px] t-overflow-y-auto t-scrollbar-thumb-rounded-xl t-scrollbar-track-rounded-xl t-scrollbar-h-auto t-scrollbar-thin t-scrollbar-thumb-custom t-scrollbar-track-[#DBECFF] t-scrollbar-thumb-[#2B79D3]">
                          <div
                            onClick={() => setStatus("pending")}
                            className="t-py-1 hover:t-bg-[#dcecfb]"
                          >
                            Pending
                          </div>
                          <div
                            onClick={() => setStatus("accepted")}
                            className="t-py-1 hover:t-bg-[#dcecfb]"
                          >
                            Accepted
                          </div>
                          <div
                            onClick={() => setStatus("rejected")}
                            className="t-py-1 hover:t-bg-[#dcecfb]"
                          >
                            Rejected
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="t-mt-2">
                <p className="t-font-[sans-regular] t-opacity-80">Details:</p>
                <div className="t-mt-2 t-h-[140px] t-overflow-y-auto t-font-[sans-regular] t-opacity-100">
                  {data?.description}
                </div>
              </div>

              <div
                className={`t-mt-4 t-mb-2 t-flex t-justify-center ${
                  status == initialStatus && "t-hidden"
                }
                `}
                onClick={handleUpdateButton}
              >
                <button
                  className={`t-font-[sans-regular] t-border-[0.15rem] t-border-[#ffffff] hover:t-border-[#479DFF] 
                        t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] 
                          t-px-[40px] t-pb-[8px] t-pt-[6px] t-rounded-[26px] t-text-[18px] ${
                            isLoading ? "t-cursor-not-allowed" : "t-cursor-pointer"
                          }`}
                >
                  {isLoading ? "Updating..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
