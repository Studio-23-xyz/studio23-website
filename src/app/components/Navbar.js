import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full top-0 fixed z-10">
      <div className="flex md:justify-between md:gap-32 justify-between mx-12">
        <div className="md:my-auto my-3">
          <Image
            src="/assets/studio23_logo_white.png"
            width={70}
            height={0}
            alt="Logo"
          />
        </div>
        <div>
          <nav>
            <ul className="justify-center hidden md:flex gap-4">
              <li>Home</li>
              <li>Our Titles</li>
              <li>Publish with Us</li>
              <li>About Us</li>
              <li>Community</li>
            </ul>
          </nav>
        </div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
