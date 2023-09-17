import React, { useEffect, useRef, useState } from "react";
import styles from "@styles/Common.module.css";
import dayjs from "dayjs";
import { SERVICES } from "@contents/appointment";
import { AppointmentServiceInstance } from "@app/appointment/services/AppointmentService";
import { useMutation } from "react-query";

interface ModalProps {
  onClose: any;
  date: any;
  // time: any;
  // timeType: any;
}

export const BookAppointmentModal: React.FC<ModalProps> = ({ onClose, date }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [pageNo, setPageNo] = useState<number>(1);
  const [showServices, setShowServices] = useState<boolean>(true);
  const serviceDropDownRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [timeOpen, setTimeOpen] = React.useState(false);
  const [timeTypeOpen, setTimeTypeOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState("10:00");
  const [selectedTimeType, setSelectedTimeType] = React.useState("AM");

  const [hour, setHour] = useState<string>("10");
  const [hourError, sethourError] = useState<string>("");
  const [minute, setMinute] = useState<string>("00");
  const [minuteError, setminuteError] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedServiceError, setSelectedServiceError] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");

  const handleHourChange = (h: any) => {
    setHour(h);
    if (h < 1 || h > 12) {
      sethourError("Hour must be between 1-12");
    } else {
      sethourError("");
    }
  };

  const handleMinuteChange = (m: any) => {
    setMinute(m);
    if (m < 0 || m > 59) {
      setminuteError("Minute must be between 0-59");
    } else {
      setminuteError("");
    }
  };

  const handleNameChange = (e: any) => {
    setName(e);
    if (e.length < 3) {
      setNameError("Name must be at least 3 characters long!");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e: any) => {
    setEmail(e);
    if (!pattern.test(e)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e);
    if (e.length < 10) {
      setDescriptionError("Description must be at least 10 characters long!");
    } else {
      setDescriptionError("");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        serviceDropDownRef.current &&
        !serviceDropDownRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [serviceDropDownRef]);

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        handleNext();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo, name, email, selectedService, description, date]);

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setShowServices(false);
    setSelectedServiceError("");
  };

  const handleNext = () => {
    if (pageNo === 1) {
      if (hour === "" || hourError) {
        sethourError("Hour must be between 0-23");
        return;
      }
    }
    if (pageNo === 1) {
      if (minute === "" || minuteError) {
        setminuteError("Minute must be between 0-59");
        return;
      }
    }

    if (pageNo === 2 && name === "") {
      setNameError("Please enter your name!");
      return;
    }
    if (pageNo === 2 && email === "") {
      setEmailError("Please enter your email!");
      return;
    }
    if (pageNo === 2 && email && !pattern.test(email)) {
      setEmailError("Please enter a valid email address!");
      return;
    }

    if (pageNo === 3 && selectedService === "") {
      setSelectedServiceError("Please select a service!");
      return;
    }

    if (pageNo === 4 && description === "") {
      setDescriptionError("Please enter a description!");
      return;
    }

    if (pageNo === 5) {
      onClose(false);
    } else {
      if (pageNo !== 4) {
        setPageNo((prevPageNo) => prevPageNo + 1);
      }
    }

    if (
      name !== "" &&
      email !== "" &&
      selectedService !== "" &&
      description !== "" &&
      pageNo === 4
    ) {
      const data = {
        name,
        email,
        service_type: selectedService,
        description,
        appointment_date: dayjs(date).format("MM/DD/YYYY"),
        // appointment_time: selectedTime + " " + selectedTimeType,
        appointment_time: hour + ":" + minute + " " + selectedTimeType,
        status: "pending",
      };
      mutation.mutate(data);
    }
  };

  const handleBack = () => {
    setPageNo((prevPageNo) => prevPageNo - 1);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const mutation = useMutation({
    mutationFn: async (data: any) => await AppointmentServiceInstance.createNewAppointment(data),
    onMutate: (variables) => {
      setIsLoading(true);
    },
    onError: (error, variables, context) => {
      console.log(error);
      setIsLoading(false);
    },
    onSuccess: async (data) => {
      setPageNo(5);
      setIsLoading(false);
    },
  });

  return (
    <div>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="t-fixed t-top-0 t-left-0 t-right-0 t-z-50 t-p-4 lg:t-p-48 t-overflow-y-auto md:t-inset-0 t-h-[calc(100%-0rem)] t-max-h-full "
        style={{
          // backdropFilter: "blur(1px)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div ref={modalRef} className="t-flex t-justify-center t-mt-48 lg:t-mt-0">
          <div className="t-relative t-max-w-[400px] lg:t-max-w-[650px] lg:t-w-full sm:t-w-[390px] t-w-[350px]">
            <div
              className={`t-relative t-border t-border-[#c2c2c2] t-rounded-lg t-shadow t-py-2`}
              style={{
                backdropFilter: "blur(8px)",
                backgroundColor: "#F7F4FE",
              }}
            >
              {/* controlling right arrow or left arrow */}
              {pageNo !== 5 && (
                <>
                  {pageNo !== 1 && (
                    <div className="t-absolute t-top-10 t-left-8">
                      <img
                        onClick={handleBack}
                        src="/images/appointmentLeftArrow.png"
                        alt="arrow"
                        className="t-w-[26px] t-h-[26px] t-cursor-pointer"
                      />
                    </div>
                  )}
                  <div className="t-absolute t-top-10 t-right-8">
                    <img
                      onClick={handleNext}
                      src="/images/appointmentRightArrow.png"
                      alt="arrow"
                      className="t-w-[26px] t-h-[26px] t-cursor-pointer"
                    />
                  </div>
                </>
              )}

              {/* modal close icon  */}
              <div className="t-absolute t-top-4 t-right-4 lg:t-top-4">
                <img
                  onClick={() => onClose(false)}
                  src="/images/appointmentClose.png"
                  alt="arrow"
                  className="t-w-[25px] t-h-[25px] t-cursor-pointer"
                />
              </div>

              {/* body*/}
              <div className={`t-h-[220px] ${pageNo == 5 && "sm:t-h-[240px] t-h-[300px]"}`}>
                <div className="">
                  {pageNo === 1 && (
                    <div>
                      <div className="t-flex t-justify-center">
                        <p className="lg:t-w-[41%] t-w-[65%] t-pt-10 t-text-left t-text-[#277AF7] t-text-[18px] t-font-[600]">
                          Enter Appointment Time
                        </p>
                      </div>

                      <div className="t-flex sm:t-gap-6 t-gap-4 t-px-16 lg:t-px-48">
                        <div className="">
                          <input
                            className={`t-w-[100px] t-h-[80px] t-mt-3 t-py-2 t-px-1 t-rounded-[5px] t-border 
                                      sm:t-text-[50px] t-text-[40px] t-text-center focus:t-bg-[#dbecff83] t-bg-[#E6E0E9] 
                          ${
                            hourError
                              ? "t-border-red-500 focus:t-outline-none focus:t-ring-red-500 focus:t-border-red-500"
                              : "t-border-[#807f7f] focus:t-outline-none focus:t-ring-blue-500 focus:t-border-blue-500"
                          }`}
                            type="number"
                            min={1}
                            max={12}
                            placeholder=""
                            value={hour}
                            onChange={(e) => handleHourChange(e.target.value)}
                          />
                          <div className="t-mt-2 t-text-center t-text-[#277AF7]">Hour</div>
                          <div className="t-h-[5px]">
                            <p className="t-text-red-500 t-text-[12px] t-mt-1 t-leading-3">
                              {hourError && hourError}
                            </p>
                          </div>
                        </div>

                        <div className="t-text-[50px] t-text-center">:</div>

                        <div className="">
                          <input
                            className={`t-w-[100px] t-h-[80px] t-mt-3 t-py-2 t-px-1 t-rounded-[5px] t-border 
                                      sm:t-text-[50px] t-text-[40px] t-text-center focus:t-bg-[#dbecff83] t-bg-[#E6E0E9] 
                          ${
                            minuteError
                              ? "t-border-red-500 focus:t-outline-none focus:t-ring-red-500 focus:t-border-red-500"
                              : "t-border-[#807f7f] focus:t-outline-none focus:t-ring-blue-500 focus:t-border-blue-500"
                          }`}
                            type="number"
                            min={0}
                            max={59}
                            placeholder=""
                            value={minute}
                            onChange={(e) => handleMinuteChange(e.target.value)}
                          />
                          <div className="t-mt-2 t-text-center t-text-[#277AF7]">Minute</div>
                          <div className="t-h-[5px]">
                            <p className="t-text-red-500 t-text-[12px] t-mt-1 t-leading-3">
                              {minuteError && minuteError}
                            </p>
                          </div>
                        </div>

                        <div
                          className={`t-h-[80px] t-mt-3 t-rounded-2xl t-border t-border-[#277AF7] lg:t-grid
                                      t-hidden`}
                        >
                          <div
                            className={`t-rounded-t-2xl t-cursor-pointer t-px-4 t-py-1 ${
                              selectedTimeType == "AM" && "t-bg-[#277AF7] t-text-white"
                            }`}
                            onClick={() => setSelectedTimeType("AM")}
                          >
                            <p className="t-text-[20px] t-text-center">AM</p>
                          </div>

                          <div
                            className={`t-rounded-b-2xl t-cursor-pointer t-px-4 t-py-1 ${
                              selectedTimeType == "PM" && "t-bg-[#277AF7] t-text-white"
                            }`}
                            onClick={() => setSelectedTimeType("PM")}
                          >
                            <p className="t-text-[20px] t-text-center">PM</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:t-hidden t-flex t-justify-center">
                        <div
                          className={`t-h-[80px] t-w-[50%] t-mt-3 t-rounded-2xl t-border t-border-[#277AF7] t-grid`}
                        >
                          <div
                            className={`t-rounded-t-2xl t-cursor-pointer t-px-4 t-py-1 ${
                              selectedTimeType == "AM" && "t-bg-[#277AF7] t-text-white"
                            }`}
                            onClick={() => setSelectedTimeType("AM")}
                          >
                            <p className="t-text-[20px] t-text-center">AM</p>
                          </div>

                          <div
                            className={`t-rounded-b-2xl t-cursor-pointer t-px-4 t-py-1 ${
                              selectedTimeType == "PM" && "t-bg-[#277AF7] t-text-white"
                            }`}
                            onClick={() => setSelectedTimeType("PM")}
                          >
                            <p className="t-text-[20px] t-text-center">PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {pageNo === 2 && (
                    <div className="t-px-16 lg:t-px-48 lg:t-pt-10 t-pt-20">
                      <div className="">
                        <div>Your Name</div>
                        <input
                          className={`t-bg-[#dbecff83] t-mt-3 t-w-[260px] t-py-2 t-px-1 t-rounded-[5px] t-border ${
                            nameError
                              ? "t-border-red-500 focus:t-outline-none focus:t-ring-red-500 focus:t-border-red-500"
                              : "t-border-[#807f7f] focus:t-outline-none focus:t-ring-blue-500 focus:t-border-blue-500"
                          }`}
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => handleNameChange(e.target.value)}
                        />
                        <div className="t-h-[5px]">
                          <p className="t-text-red-500 t-text-[12px] t-mt-1 t-leading-3">
                            {nameError && nameError}
                          </p>
                        </div>
                      </div>
                      <div className="t-mt-5">
                        <div>Your Email</div>
                        <input
                          className={`t-bg-[#dbecff83] t-mt-3 t-w-[260px] t-py-2 t-px-1 t-rounded-[5px] t-border ${
                            emailError
                              ? "t-border-red-500 focus:t-outline-none focus:t-ring-red-500 focus:t-border-red-500"
                              : "t-border-[#807f7f] focus:t-outline-none focus:t-ring-blue-500 focus:t-border-blue-500"
                          }`}
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => handleEmailChange(e.target.value)}
                        />
                        <div className="t-h-[5px]">
                          <p className="t-text-red-500 t-text-[13px] t-mt-1 t-leading-3">
                            {emailError && emailError}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {pageNo === 3 && (
                    <div className="t-px-16 lg:t-px-48 t-pt-10 lg:t-mt-0 t-mt-12">
                      <div className="t-relative">
                        <p>Choose Service</p>
                        <div
                          onClick={() => setShowServices(!showServices)}
                          className={`sm:t-w-[280px] lg:t-w-[290px] t-w-[250px] t-cursor-pointer t-mt-2 t-border ${
                            selectedServiceError ? "t-border-red-500" : "t-border-[#A79A9F]"
                          } t-px-4 t-py-2 t-rounded-[7px] t-flex t-justify-between`}
                        >
                          <span>{selectedService ? selectedService : "Service"}</span>
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
                        </div>
                        {showServices && (
                          <div
                            ref={serviceDropDownRef}
                            className="t-absolute t-top-[5rem] t-border t-border-[#A79A9F] t-rounded-[7px] t-pl-4 t-pr-2 t-py-1"
                          >
                            <div className="t-h-[110px] t-w-[255px] lg:t-w-[265px] t-overflow-y-auto t-scrollbar-thumb-rounded-xl t-scrollbar-track-rounded-xl t-scrollbar-h-auto t-scrollbar-thin t-scrollbar-thumb-custom t-scrollbar-track-[#DBECFF] t-scrollbar-thumb-[#2B79D3]">
                              {SERVICES.map((service, index) => (
                                <div key={index} className="t-pb-2">
                                  <span className="t-text-[15px]">{service.name}</span>
                                  <ul className="t-list-disc t-pl-5 t-text-[14px]">
                                    {service?.types?.map((type, index) => (
                                      <li
                                        key={index}
                                        onClick={() => handleSelectService(type.name)}
                                        className={`t-cursor-pointer t-py-0.5 ${
                                          selectedService === type?.name && "t-text-[#2B79D3]"
                                        }`}
                                      >
                                        {type?.name}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        <div
                          className={`t-absolute t-h-[5px] ${showServices ? "t-top-[198px]" : ""}`}
                        >
                          <p className="t-text-red-500 t-text-[13px] t-mt-1 t-leading-3">
                            {selectedServiceError && selectedServiceError}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {pageNo === 4 && (
                    <div className="t-px-16 lg:t-px-48 lg:t-pt-10 t-pt-20">
                      <div className="">
                        <p>Service Description</p>
                        <textarea
                          rows={5}
                          className={`t-bg-[#dbecff83] t-mt-4 sm:t-w-[290px] t-w-[250px] t-py-2 t-px-1 t-rounded-[5px] t-border ${
                            descriptionError
                              ? "t-border-red-500 t-outline-none"
                              : "t-border-[#807f7f] focus:t-outline-none focus:t-ring-blue-500 focus:t-border-blue-500"
                          }`}
                          value={description}
                          onChange={(e) => handleDescriptionChange(e.target.value)}
                        ></textarea>
                        <div className="t-h-[5px]">
                          <p className="t-text-red-500 t-text-[13px] t-mt-1 t-leading-3">
                            {descriptionError && descriptionError}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {pageNo === 5 && (
                    <div className="t-px-8 lg:t-px-12 t-pt-8 ">
                      <div className="t-flex t-justify-between">
                        <div className="t-w-[20px]" />
                        <div className="t-text-[16px] t-w-[340px]">
                          <p className="t-text-center t-font-[500]">Dear {name}</p>
                          <p className="t-text-center">
                            We have received a request, and a meeting has been set for{" "}
                            {dayjs(date).format("MM/DD/YYYY")}, {hour + ":" + minute + " "}
                            {selectedTimeType}
                          </p>
                          <p className="t-text-center">Thank you for choosing VTS</p>
                        </div>
                        <div className=""></div>
                      </div>
                      <div className="t-mt-3">
                        <div className="t-flex">
                          <p className="t-font-[400]">What happens next</p>
                          <img
                            src="/images/lightIcon.png"
                            alt=""
                            className="t-w-[13px] t-h-[20px] t-ml-4 t-my-auto"
                          />
                        </div>
                        <p className="t-py-2 t-text-[16px]">
                          1. Our sales manager will reach out within few days after analyzing your
                          business requirements.
                        </p>
                        <p className="t-text-[16px]">
                          2. Our business analyst will provide project estimates and approximate
                          timeline.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* <!-- Modal footer --> */}
              <div
                className={`t-flex ${
                  pageNo === 4 ? "t-justify-center t-pt-[77px] lg:t-pt-[40px]" : "t-justify-start"
                } t-pt-6 t-pb-8 ${
                  pageNo !== 4
                    ? "t-pl-16 lg:t-pl-48 t-pr-16 lg:t-pr-28 t-mt-1 t-flex t-justify-center lg:t-justify-start"
                    : "t-mt-4"
                }`}
              >
                <div className="t-flex t-gap-2 t-place-items-center t-mt-16">
                  <button
                    disabled={isLoading}
                    onClick={handleNext}
                    className={`t-font-[sans-regular] t-border-[0.15rem] t-border-[#ffffff] t-text-center ${
                      pageNo === 5 && "lg:t-ml-20 t-ml-4"
                    }
                    hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  
                     hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[40px] t-pb-[8px] t-pt-[6px]
                     t-rounded-[26px] t-text-[18px]`}
                  >
                    {pageNo === 4 && !isLoading
                      ? "Submit"
                      : pageNo === 4 && isLoading
                      ? "Submitting..."
                      : pageNo === 5
                      ? "Close"
                      : "Next"}
                  </button>
                  <div className="t-hidden lg:t-block">
                    {pageNo !== 5 && (
                      <div className="t-flex">
                        <p className="t-text-[20px] t-font-[300] t-my-auto t-ml-1">Or</p>
                        <p className="t-text-[20px] t-font-[300] t-my-auto t-ml-2 lg:t-ml-3">
                          Press Enter
                        </p>
                        <img
                          src="/images/pressEnterIcon.png"
                          alt=""
                          className="t-w-[28px] t-h-[28px] t-ml-2 t-my-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
