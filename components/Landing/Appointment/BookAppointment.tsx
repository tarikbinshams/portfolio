import React, { useEffect } from "react";
import CalenderComponent from "./Calender";
import { BookAppointmentModal } from "./AppointmentModal";
import dayjs from "dayjs";

export default function BookAppointment() {
  const [appointmentOpen, setAppointmentOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<any>();
  const [formattedSelectedDate, setFormattedSelectedDate] = React.useState<any>();
  const [disabled, setDisabled] = React.useState(true);

  const handleAppointmentModal = (state: boolean) => {
    if (disabled) return;
    setAppointmentOpen(state);
  };

  useEffect(() => {
    setSelectedDate(dayjs().add(1, "day").toDate());
  }, []);

  useEffect(() => {
    // check selectedDate is after today
    if (selectedDate) {
      const today = dayjs();
      const selected = dayjs(selectedDate);
      if (selected.isAfter(today)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
      setFormattedSelectedDate(selected.format("ddd, MMM D"));
      // console.log("SELECTED", formattedDate);
    }
  }, [selectedDate]);

  return (
    <div id="contact-us">
      <div className="t-mb-12 t-h-[900px] lg:t-h-[650px] t-relative">
        <div className="t-bg-[#FFFFFF] t-h-[550px] lg:t-h-[400px] t-w-full t-absolute t-top-16 lg:t-top-36 t-z-10"></div>
        <div className="lg:t-max-w-[1400px] t-m-auto lg:t-px-16">
          <div className="t-grid t-place-items-center lg:t-flex lg:t-justify-between t-z-20">
            {/* mobile view of text starts */}
            <div className="lg:t-hidden t-block t-mt-24 t-w-full t-z-20">
              <p className="t-text-[20px] t-opacity-90 t-leading-6 t-text-center t-font-[sans-bold]">
                Have a Project In Mind?
              </p>
              <p className="t-mt-6 t-text-[16px] t-opacity-90 t-text-justify t-leading-6 t-px-8 t-font-[sans-regular]">
                Pick a date & time at your convenience, and our dedicated team will be at your
                service. We will work together to turn your vision into a physical reality using our
                knowledge in a variety of sectors, bringing innovation and accuracy to each stage of
                the process.
              </p>
            </div>
            {/* mobile view of text ends */}

            {/* Calender starts */}
            <div className="t-mt-10 lg:t-mt-12 t-min-h-[540px] t-w-[300px] lg:t-w-[370px] t-rounded-3xl t-bg-[#F7F4FE] t-shadow-xl t-border t-border-[#277AF7] t-px-6 t-z-20">
              <div className="t-flex t-justify-center t-py-2">
                <div className="t-w-10 t-h-[3px] t-bg-slate-200 t-rounded-[100px]" />
              </div>
              <div className="t-my-2 t-text-black t-text-[16px] t-font-[500] t-leading-snug">
                Select date
              </div>
              <div className="t-mb-4 t-h-[60px] t-border-b-2 t-border-[#277AF7]  t-text-black t-text-[26px] t-font-[500] t-leading-loose t-text-left">
                {formattedSelectedDate}
              </div>

              <CalenderComponent dateSelect={setSelectedDate} />

              <div className="t-w-full t-py-5 t-flex-col t-justify-start t-items-start t-gap-[10px] t-inline-flex">
                <div className="t-self-stretch t-h-[2px] t-bg-slate-200" />
              </div>

              <div
                className={`t-font-[sans-regular] t-border-[0.15rem] t-border-[#ffffff] t-text-center
                hover:t-border-[#479DFF] t-text-[#ffffff] hover:t-text-[#479DFF] t-bg-gradient-to-b t-from-[#479DFF] t-to-[#0A4EFE]  
                 hover:t-bg-gradient-to-b hover:t-from-[#ffffff] hover:t-to-[#ffffff] t-px-[40px] t-pb-[8px] t-pt-[6px]
                 t-rounded-[26px] t-text-[18px] ${
                   disabled ? "t-cursor-not-allowed" : "t-cursor-pointer"
                 }`}
                onClick={() => handleAppointmentModal(true)}
              >
                Set Appointment
              </div>

              <div className="t-flex t-justify-center">
                <div className="t-w-[134px] t-h-[5px] t-bg-black t-bg-opacity-30 t-rounded-[100px] t-my-4" />
              </div>
            </div>
            {/* Calendar ends */}

            {/* desktop view of text starts */}
            <div className="t-hidden lg:t-block t-mt-0 t-w-[620px] t-z-20">
              <p className="t-text-[30px] t-opacity-90 t-leading-7 t-font-[sans-bold] t-text-right">
                Have a Project In Mind?
              </p>
              <p className="t-mt-8 t-opacity-80 lg:t-text-[17px] t-text-justify t-font-[sans-regular] t-leading-6">
                Pick a date & time at your convenience, and our dedicated team will be at your
                service. We will work together to turn your vision into a physical reality using our
                knowledge in a variety of sectors, bringing innovation and accuracy to each stage of
                the process.
              </p>
            </div>
            {/* desktop view of text ends */}
          </div>
        </div>
      </div>
      {appointmentOpen && <BookAppointmentModal onClose={setAppointmentOpen} date={selectedDate} />}
    </div>
  );
}
