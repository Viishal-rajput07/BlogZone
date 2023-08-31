import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-400">About page</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="C:\Users\VISHAL\.vscode\nextjs-course\blogzone\src\app\img.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "BlogZone - About",
    description: "A place where Bloggers live",
  };
}
