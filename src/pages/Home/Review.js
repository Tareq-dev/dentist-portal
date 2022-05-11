import React from "react";

const Review = ({ review }) => {
  const { comment, name, img, address } = review;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{comment}</p>
        <div class="flex items-center py-2">
        <div class="avatar">
        <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt=""/>
        </div>
      </div>
          <div class="px-4">
            <h2 class="card-title">{name}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
