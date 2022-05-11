import React from "react";
import doctorSmall from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div
      style={{ background: `url(${appointment})` }}
      class="flex justify-center items-center"
    >
      <div class="flex-1 hidden lg:block">
        <img src={doctorSmall} class="mt-[-110px]" alt="" />
      </div>
      <div class="flex-1 px-5 py-1">
        <p className="text-primary text-xl font-bold">Appointment</p>
        <h1 class="text-3xl font-bold text-white">Make an appointment Today</h1>
        <p class="py-6 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button class="btn btn-primary bg-gradient-to-r from-secondary text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MakeAppointment;
