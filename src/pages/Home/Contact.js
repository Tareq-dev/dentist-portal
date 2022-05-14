import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <form style={{ background: `url(${appointment})` }} className="flex justify-center p-3 rounded-lg py-5">
      <div class="lg:w-1/3 md:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-primary text-lg mb-1 font-bold text-center">
          Contact Us
        </h2>
        <h2 class="leading-relaxed mb-5 text-white text-3xl text-center">
          Stay connected with us
        </h2>
        <div class="relative mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button class="text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg">
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
