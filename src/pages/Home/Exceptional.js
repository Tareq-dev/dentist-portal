import React from "react";
import { useNavigate } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";

const Exceptional = () => {
  const navigate = useNavigate();
  const appointment = () => {
    navigate("appoinment");
  };
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-32">
      <div class="">
        <img class="rounded-lg shadow-2xl" src={treatment} alt="" />
      </div>
      <div class="flex items-center">
        <div>
          <h1 class="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p class="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button
            onClick={appointment}
            class="btn btn-primary bg-gradient-to-r from-secondary"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
