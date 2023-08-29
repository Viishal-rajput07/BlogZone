"use client";
import React from "react";

const Lectures = ({ params }) => {
  return (
    <div>
      <h1>Date: {params.lectures[0]}</h1>
      <h1>Day: {params.lectures[1]}</h1>
      <h1>Lecture No: {params.lectures[2]}</h1>
    </div>
  );
};

export default Lectures;
