// create a component for Tours, which I think is the entire page, which Tour is a card component that will present itself in this component

import { useState } from "react";
import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <div className="title">
      <h2>Our tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
        ;
      </div>
    </div>
  );
};
