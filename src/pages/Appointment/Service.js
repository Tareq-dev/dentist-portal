import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-secondary text-xl font-bold">{name}</h2>
          <p>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div class="justify-center py-1">
            <label
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              for="booking-modal"
              class="btn btn-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
