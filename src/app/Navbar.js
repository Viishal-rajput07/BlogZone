"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();
  const navigate =(name)=>{
    router.push(name);
  }
  return (
    <div>
      <nav className="bg-blue-200 flex justify-between items-center">
        <ul className="flex items-center space-x-5 h-16 text-xl font-bold">
          <li></li>
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about">About Us</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/productlist">Product</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/study">Study</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="btn btn-sm btn-accent" onClick={()=>navigate('/login')}>
            Login
          </button>
          <button className="btn btn-sm btn-error mx-5">Sign Up</button>
        </div>
      </nav>
    </div>
  );
}
