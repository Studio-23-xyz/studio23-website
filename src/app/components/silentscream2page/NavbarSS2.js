"use client";
import Image from "next/image";
import Link from "next/link";
import SilentScream2Logo from "/public/assets/ss2-game-page/silent-scram-2-logo.svg";

const NavbarSS2 = () => {
  return (
    <div className="w-full absolute flex justify-center items-center gap-6 md:gap-14 mt-2 md:mt-6 z-40">
      <div className="flex gap-14">
        <Link
          className="text-[16px] md:text-[24px] font-medium hover:text-silent2_red"
          href="/"
        >
          Home
        </Link>
        <a
          className="hidden md:flex text-[16px] md:text-[24px] font-medium hover:text-silent2_red"
          href="#screenshots"
        >
          Screenshot
        </a>
      </div>
      <div>
        <Link href="/our-titles/silent-scream-2">
          <Image
            src={SilentScream2Logo}
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
          className="hidden md:flex text-[16px] md:text-[24px] font-medium hover:text-silent2_red"
        >
          Download
        </a>
        <Link
          className="text-[16px] md:text-[24px] font-medium hover:text-silent2_red"
          href="/contact-us"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default NavbarSS2;
