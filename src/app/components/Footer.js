import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-footer_black flex md:px-32 md:pt-10">
      <div className="w-1/4 flex flex-col gap-14">
        <div>
          <Link href="/">
            <Image
              src="/assets/studio23_logo_white.png"
              width={500}
              height={200}
              alt="Logo"
              className="w-[150px] md:w-[165px] pl-2 md:pl-0 pt-2 md:pt-0"
            />
          </Link>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div>
          <p>@Lorem</p>
        </div>
      </div>
      <div className="flex flex-col w-1/4 gap-4">
        <div>
          <Link href="/about-us">
            <span className="font-semibold">About Us</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/our-team">
            <span className="">Our Team</span>
          </Link>
          <Link href="/our-titles">
            <span className="">Titles</span>
          </Link>
          <Link href="/careers">
            <span className="">Careers</span>
          </Link>
          <Link href="/contact-us">
            <span className="">Contact Us</span>
          </Link>
        </div>
      </div>
      <div className="w-1/4">contact us</div>
      <div className="w-1/4">Social Links</div>
    </div>
  );
};

export default Footer;
