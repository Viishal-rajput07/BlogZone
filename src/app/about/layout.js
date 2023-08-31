import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-400">
        This is layout page of about page
      </h1>
      <div>
        <ul className="flex space-x-10">
          <li>
            <Link href="/about">Go to about</Link>
          </li>
          <li>
            <Link href="/about/aboutowner">Go to aboutowner</Link>
          </li>
          <li>
            <Link href="/about/aboutteam">Go to aboutteam</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default layout;
