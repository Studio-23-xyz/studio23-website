"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ChevronDown, LucideMenu } from "lucide-react";

const Nav = () => {
  const [header, setHader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHader(true);
    } else {
      setHader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div>
      <div
        className={
          header
            ? "w-full h-20 top-0 fixed z-10 bg-black drop-shadow-2xl"
            : "h-20 top-0 fixed z-10"
        }
      >
        <div className="header flex w-full justify-between py-4 px-20 items-center">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/studio23_logo_white.png"
                width={500}
                height={200}
                alt="Logo"
                className="w-[150px] md:w-[202px] pl-2 md:pl-0 pt-2 md:pt-0"
              />
            </Link>
          </div>
          <div className="menu">
            <nav>
              <ul className="flex gap-16">
                <Link href="/">
                  <li>Home</li>
                </Link>

                <Link href="/our-titles">
                  <li>Our Titles</li>
                </Link>

                <Link href="/publishing-with-us">
                  <li>Publish with Us</li>
                </Link>

                <Link href="/about-us">
                  <li className="flex">
                    About Us <ChevronDown />
                  </li>
                </Link>

                <Link href="/community">
                  <li>Community</li>
                </Link>

                <Link href="/contact-us">
                  <div>Contact Us</div>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
