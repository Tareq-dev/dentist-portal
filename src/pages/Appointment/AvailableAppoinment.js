import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";

const AvailableAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/treatment")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center">
      <p className="text-primary font-bold text-xl pt-14">
        Available Appoinment On {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-14">
        {services.map((service) => (
          <Service
            service={service}
            setTreatment={setTreatment}
            key={service._id}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          setTreatment={setTreatment}
          treatment={treatment}
          date={date}
        />
      )}
    </div>
  );
};

export default AvailableAppoinment;
