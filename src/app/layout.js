"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import { usePathname } from "next/navigation";

const roboto = Roboto({weight:'300', subsets: ["latin-ext"] });

export const metadata = {
  title: "BlogZone - Blog It",
  description: "A place where Bloggers live",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={roboto.className}>
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
