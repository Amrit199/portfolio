import React from "react";
import logo from "../public/assets/logo.jpg";
import { Data } from "../data";
import Socialcontacts from "./Socialcontacts";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 p-6">
        <p>@2023 Amrit Tamang. All rights reserved</p>

        <div className="flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500 hover:text-black">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black">
            Terms & Condition
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 relative">
          {Data.socialicons.map((item, index) => (
            <Socialcontacts item={item} key={index} />
          ))}
        </div>
    </footer>
  );
};

export default Footer;
