import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import Info from "./Info";
const InfosCard = () => {
  //   const infos = [
  //     {
  //       id: 1,
  //       name: "Opening Hours",
  //       description: "Lorem Ipsum is simply dummy text of the pri",
  //       img: clock,
  //     },
  //     {
  //       id: 2,
  //       name: "Opening Marker",
  //       description: "Lorem Ipsum is simply dummy text of the pri",
  //       img: marker,
  //     },
  //     {
  //       id: 3,
  //       name: "Opening Hours",
  //       description: "Lorem Ipsum is simply dummy text of the pri",
  //       img: phone,
  //     },
  //   ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
      <Info cardTitle="Opening Hours" bgClassName="bg-primary" img={clock} />
      <Info cardTitle="Opening Hours" bgClassName="bg-accent" img={marker} />
      <Info cardTitle="Opening Hours" bgClassName="bg-secondary" img={phone} />
    </div>
  );
};

export default InfosCard;
