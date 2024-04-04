"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { ChevronDown, LucideMenu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowmenu] = useState(false);

  const handleToggleMenu = () => {
    setShowmenu(!showMenu);
  };

  return (
    <div className="w-full h-16 top-0 fixed z-10">
      <div className="flex justify-between items-center md:mx-40 mx-10 mt-3">
        <div>
          <Link href="/">
            <Image
              src="/assets/studio23_logo_white.png"
              width={500}
              height={200}
              alt="Logo"
              className="w-[150px] md:w-[200px] pl-4 md:pl-0 pt-2 md:pt-0"
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <nav>
            <ul className="justify-center hidden md:flex gap-16 items-center">
              <Link href="/">
                <li
                  className={classNames(
                    "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                    pathname === "/"
                      ? "border !border-studio_blue bg-studio_blue/20"
                      : ""
                  )}
                >
                  Home
                </li>
              </Link>

              <Link href="/our-titles">
                <li
                  className={classNames(
                    "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                    pathname === "/our-titles"
                      ? "border !border-studio_blue bg-studio_blue/20"
                      : ""
                  )}
                >
                  Our Titles
                </li>
              </Link>

              <Link href="/publishing-with-us">
                <li
                  className={classNames(
                    "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                    pathname === "/publishing-with-us"
                      ? "border !border-studio_blue bg-studio_blue/20"
                      : ""
                  )}
                >
                  Publish with Us
                </li>
              </Link>

              <Link href="/about-us">
                <li
                  className={classNames(
                    "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all flex",
                    pathname === "/about-us"
                      ? "border !border-studio_blue bg-studio_blue/20"
                      : ""
                  )}
                >
                  About Us <ChevronDown />
                </li>
              </Link>

              <Link href="/community">
                <li
                  className={classNames(
                    "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                    pathname === "/community"
                      ? "border !border-studio_blue bg-studio_blue/20"
                      : ""
                  )}
                >
                  Community
                </li>
              </Link>

              <Link href="/contact-us">
                <div
                  className={classNames(
                    "bg-studio_blue px-4 py-2 rounded-md hover:bg-black hover:text-white",
                    pathname === "/contact-us" ? "bg-black text-white" : ""
                  )}
                >
                  Contact Us
                </div>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <span onClick={handleToggleMenu}>
            <LucideMenu className="w-8 h-8" />

            {showMenu && (
              <div className="w-[70%] h-screen absolute top-0 left-0 bg-fiery_black p-4 scroll-hide flex flex-col gap-8">
                <div>
                  <Link href="/">
                    <Image
                      src="/assets/studio23_logo_white.png"
                      width={150}
                      height={200}
                      alt="Logo"
                      className=""
                    />
                  </Link>
                </div>
                <div>
                  <nav>
                    <ul className="justify-center flex flex-col gap-4">
                      <Link href="/">
                        <li
                          className={classNames(
                            "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                            pathname === "/"
                              ? "border !border-studio_blue bg-studio_blue/20"
                              : ""
                          )}
                        >
                          Home
                        </li>
                      </Link>

                      <Link href="/our-titles">
                        <li
                          className={classNames(
                            "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                            pathname === "/our-titles"
                              ? "border !border-studio_blue bg-studio_blue/20"
                              : ""
                          )}
                        >
                          Our Titles
                        </li>
                      </Link>

                      <Link href="/publishing-with-us">
                        <li
                          className={classNames(
                            "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                            pathname === "/publishing-with-us"
                              ? "border !border-studio_blue bg-studio_blue/20"
                              : ""
                          )}
                        >
                          Publish with Us
                        </li>
                      </Link>

                      <Link href="/about-us">
                        <li
                          className={classNames(
                            "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all flex",
                            pathname === "/about-us"
                              ? "border !border-studio_blue bg-studio_blue/20"
                              : ""
                          )}
                        >
                          About Us <ChevronDown />
                        </li>
                      </Link>

                      <Link href="/community">
                        <li
                          className={classNames(
                            "hover:bg-studio_blue/20 hover:border hover:border-studio_blue transition-all",
                            pathname === "/community"
                              ? "border !border-studio_blue bg-studio_blue/20"
                              : ""
                          )}
                        >
                          Community
                        </li>
                      </Link>

                      <Link href="/contact-us">
                        <div
                          className={classNames(
                            "bg-studio_blue px-4 py-2 rounded-md hover:bg-black hover:text-white",
                            pathname === "/contact-us"
                              ? "bg-black text-white"
                              : ""
                          )}
                        >
                          Contact Us
                        </div>
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
