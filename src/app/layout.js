"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlogZone - Blog It",
  description: "A place where Bloggers live",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* {
        pathname !== '/'?
        <Footer />:
        ""      } */}
      </body>
    </html>
  );
}
