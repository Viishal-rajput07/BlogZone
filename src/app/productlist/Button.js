"use client";
import React from "react";

const Button = ({price}) => {
  return (
    <div>
      <button
        className="badge badge-ghost badge-outline"
        onClick={() => {
          alert("jkgsl");
        }}
      >
        Price: {price}
      </button>
    </div>
  );
};

export default Button;
