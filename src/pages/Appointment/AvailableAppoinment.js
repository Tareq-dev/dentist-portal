import React, { useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "./../../components/Loading";

const AvailableAppoinment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    isLoading,
    refetch,
    data: services,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="text-center">
      <p className="text-primary font-bold text-xl pt-14">
        Available Appoinment On {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-14">
        {services?.map((service) => (
          <Service
            service={service}
            setTreatment={setTreatment}
            key={service._id}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          refetch={refetch}
          setTreatment={setTreatment}
          treatment={treatment}
          date={date}
        />
      )}
    </div>
  );
};

export default AvailableAppoinment;
