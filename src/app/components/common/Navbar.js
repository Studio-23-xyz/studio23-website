"use client";
import classNames from "classnames";
import { ChevronDown, Menu } from "lucide-react"; // Ensure 'Menu' icon is correctly imported from lucide-react
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Studio23LogoWhite from "/public/assets/studio23_logo_white.png";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowmenu] = useState(false);
  const [header, setHeader] = useState(false);

  const handleToggleMenu = () => {
    setShowmenu(!showMenu);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader); // Properly remove event listener
    };
  }, []);

  return (
    <div
      className={
        header
          ? "w-full md:h-20 h-16 top-0 fixed z-10 bg-black"
          : "w-full md:h-20 h-16 top-0 fixed z-10 justify-between"
      }
    >
      <div className="flex justify-between items-center md:mx-32 mt-5">
        {/* Laptop View */}
        <div className="hidden md:flex">
          <Link href="/">
            <Image
              src={Studio23LogoWhite}
              width={500}
              height={200}
              alt="Logo"
              className="w-[150px] md:w-[150px] pl-2 md:pl-0 pt-2 md:pt-0"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <nav>
            <ul className="justify-center hidden md:flex gap-12 items-center">
              <Link href="/">
                <li
                  className={classNames(
                    "hover:font-bold transition-all",
                    pathname === "/" ? "font-bold" : ""
                  )}
                >
                  Home
                </li>
              </Link>

              <Link href="/our-titles">
                <li
                  className={classNames(
                    "hover:font-bold transition-all",
                    pathname === "/our-titles" ? "font-bold" : ""
                  )}
                >
                  Our Titles
                </li>
              </Link>

              <Link href="https://impress.games/press-kit/studio-23/silent-scream-2">
                <li
                  className="bg-button_presskit_color px-3 py-2 rounded-md hover:font-bold transition-all "
                >
                  Press Kit
                </li>
              </Link>

              <Link href="/our-team" className="group transition-all">
                <li className="hover:font-bold transition-all flex gap-2">
                  About Us{" "}
                  <ChevronDown className="group-hover:rotate-180 transition-all" />
                </li>
                {/* Drop Down */}
                <div
                  className="absolute hidden w-auto flex-col rounded-lg bg-transparent transition-all 
                             group-hover:flex pb-5"
                >
                  <div
                    className={
                      header
                        ? "flex flex-col gap-3 bg-black rounded-lg px-5 py-5"
                        : "flex flex-col gap-3 bg-black bg-opacity-40 rounded-lg px-5 py-5"
                    }
                  >
                    <Link
                      href="/our-team"
                      className="flex cursor-pointer items-center hover:font-bold"
                    >
                      <li>Our Team</li>
                    </Link>

                    <Link
                      href="/careers"
                      className="flex cursor-pointer items-center hover:font-bold"
                    >
                      <li>Careers</li>
                    </Link>

                  </div>
                </div>
              </Link>

              <Link href="/community">
                <li
                  className={classNames(
                    "hover:font-bold transition-all",
                    pathname === "/community" ? "font-bold" : ""
                  )}
                >
                  Community
                </li>
              </Link>

              <Link href="/contact-us">
                <div
                  className={classNames(
                    "bg-studio_blue px-4 py-2 rounded-md hover:bg-white hover:text-black hover:font-bold",
                    pathname === "/contact-us"
                      ? "font-bold bg-white text-black"
                      : ""
                  )}
                >
                  Contact Us
                </div>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full mx-5 flex items-center justify-between">
          <span onClick={handleToggleMenu}>
            <div className="flex justify-between items-center">
              <Menu className="w-[25px] h-[25px] stroke-studio_blue hover:stroke-white" />
            </div>

            {showMenu && (
              <div className="w-[70%] h-screen absolute top-0 left-0 bg-fiery_black pt-6 pl-4 scroll-hide flex flex-col gap-8">
                <div>
                  <Link href="/">
                    <Image
                      src={Studio23LogoWhite}
                      width={150}
                      height={200}
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div>
                  <nav>
                    <ul className="justify-center flex flex-col gap-4">
                      <Link href="/">
                        <li
                          className={classNames(
                            "hover:font-bold transition-all",
                            pathname === "/" ? "font-bold" : ""
                          )}
                        >
                          Home
                        </li>
                      </Link>

                      <Link href="/our-titles">
                        <li
                          className={classNames(
                            "hover:font-bold transition-all",
                            pathname === "/our-titles" ? "font-bold" : ""
                          )}
                        >
                          Our Titles
                        </li>
                      </Link>

                      <Link href="/our-team">
                        <li
                          className={classNames(
                            "hover:font-bold flex gap-2 transition-all",
                            pathname === "/our-team" ? "font-bold" : ""
                          )}
                        >
                          Our Team
                        </li>
                      </Link>


                      <Link href="/careers">
                        <li
                          className={classNames(
                            "hover:font-bold flex gap-2 transition-all",
                            pathname === "/careers" ? "font-bold" : ""
                          )}
                        >
                          Careers
                        </li>
                      </Link>
                 
                      <Link href="/community">
                        <li
                          className={classNames(
                            "hover:font-bold transition-all",
                            pathname === "/community" ? "font-bold" : ""
                          )}
                        >
                          Community
                        </li>
                      </Link>

                      <Link href="/contact-us">
                        <div
                          className={classNames(
                            "w-[60%] flex justify-center bg-studio_blue px-4 py-2 rounded-md hover:bg-white hover:text-black hover:font-bold",
                            pathname === "/contact-us"
                              ? "font-bold bg-white text-black"
                              : ""
                          )}
                        >
                          Contact Us
                        </div>
                      </Link>

                      <Link href="https://impress.games/press-kit/studio-23/silent-scream-2">
                        <div className="w-[60%] flex justify-center bg-button_presskit_color px-4 py-2 rounded-md hover:bg-white hover:text-black hover:font-bold"
                        >
                          Press Kit
                        </div>
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </span>

          <div>
            <Link href="/">
              <Image
                src={Studio23LogoWhite}
                width={150}
                height={200}
                alt="Logo"
                className="w-[100px] h-[20px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
