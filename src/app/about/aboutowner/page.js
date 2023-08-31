'use client'
import React from "react";
import Script from "next/script";

const Page = () => {
  return (
    <div className="text-center text-4xl text-red-400">
      <h1>GET USER GETLOCATION</h1>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
    </div>
  );
};

export default Page;
