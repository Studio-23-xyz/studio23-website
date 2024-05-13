"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarSS2 = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/our-titles/silent-scream-2">
          <Image
            src="/assets/silent-scram-logo.svg"
            width={500}
            height={200}
            alt="Logo"
            className="w-[150px] md:w-[113px] pl-2 md:pl-0 pt-2 md:pt-0"
          />
        </Link>
      </div>
      <div>Download Contact us</div>
    </div>
  );
};

export default NavbarSS2;
