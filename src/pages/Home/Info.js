import React from "react";

const Info = ({ img, cardTitle, bgClassName }) => {
  return (
    <div class={`card lg:card-side p-3 shadow-xl ${bgClassName}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title text-center">{cardTitle}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Info;
