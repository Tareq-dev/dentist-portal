import React from "react";
import chair from "../../assets/images/chair.png";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const appointment = () => {
    navigate("appoinment");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-14 md:py-24">
      <div class="max-w-sm">
        <h1 class="text-4xl font-bold">Your New Smile Starts Here</h1>
        <p class="py-6 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <button
          onClick={appointment}
          class="btn btn-primary bg-gradient-to-r from-secondary"
        >
          Get Started
        </button>
      </div>
      <img class="rounded-lg shadow-2xl" src={chair} alt="chair" />
    </div>
  );
};

export default Banner;
