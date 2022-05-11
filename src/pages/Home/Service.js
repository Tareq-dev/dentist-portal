import React from "react";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <div>
      <div class="card max-w-lg bg-base-100 shadow-xl p-3">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
