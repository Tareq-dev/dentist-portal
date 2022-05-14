import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import "react-day-picker/dist/style.css";

const AppoinmentBanner = ({date,setDate}) => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-14">
        <div className="flex justify-center">
          <DayPicker className="shadow-lg rounded-3xl p-3" mode="single" selected={date} onSelect={setDate} />
        </div>
        <div>
          <img src={chair} alt="" />
        </div>
      </div>
     
    </div>
  );
};

export default AppoinmentBanner;
