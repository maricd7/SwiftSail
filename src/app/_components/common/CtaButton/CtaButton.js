import React from "react";

export const CtaButton = ({ text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg w-full flex justify-center mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 hover:shadow-[0_3px_10px_rgb(253,126,20,0.2)]
    "
    >
      {text}
    </button>
  );
};
