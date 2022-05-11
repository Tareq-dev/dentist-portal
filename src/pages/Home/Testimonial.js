import React from "react";
import quote from "../../assets/icons/quote.svg";
import people2 from "../../assets/images/people2.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people2,
    },
    {
      id: 2,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people2,
    },
    {
      id: 3,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people2,
    },
  ];
  return (
    <div class="py-20">
      <div class="flex justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary">Testimonial</h2>
          <h1 className="text-4xl"> What Our Patients Says</h1>
        </div>
        <img class="w-24 lg:w-48" src={quote} alt="" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
