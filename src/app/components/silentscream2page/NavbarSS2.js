"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarSS2 = () => {
  return (
    <div className="flex justify-center items-center gap-6 md:gap-14 mt-2 md:mt-6">
      <div className="flex gap-14">
        <Link
          className="text-[16px] md:text-[24px] font-medium hover:text-red-400"
          href="/"
        >
          Home
        </Link>
        <a
          className="hidden md:flex text-[16px] md:text-[24px] font-medium hover:text-red-400"
          href="#screanshots"
        >
          Screanshots
        </a>
      </div>
      <div>
        <Link href="/our-titles/silent-scream-2">
          <Image
            src="/assets/silent-scram-2-logo.svg"
            width={500}
            height={200}
            alt="Logo"
            className="w-[86px] md:w-[113px] pl-2 md:pl-0 pt-2 md:pt-0"
          />
        </Link>
      </div>
      <div className="flex gap-14">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex text-[16px] md:text-[24px] font-medium hover:text-red-400"
        >
          Download
        </a>
        <Link
          className="text-[16px] md:text-[24px] font-medium hover:text-red-400"
          href="/contact-us"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default NavbarSS2;
