import React from "react";
import treatment from "../../assets/images/treatment.png";

const Exceptional = () => {
  return (
    <div class="hero mb-32">
      <div class="hero-content flex-col lg:flex-row">
        <div class="flex-1">
        <img class="max-w-sm rounded-lg shadow-2xl" src={treatment} alt="" />
        </div>
        <div class='flex-1'>
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
          <button class="btn btn-primary bg-gradient-to-r from-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;