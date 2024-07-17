import React from "react";

export const TotalPrice = ({ orderTotal }) => {
  console.log(orderTotal);
  return (
    <div className="w-full flex justify-between align-center mt-4">
      <p>Total:</p>
      <span className="font-bold">${orderTotal}</span>
    </div>
  );
};
