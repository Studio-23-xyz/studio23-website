import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Studio23LogoWhite from "/public/assets/studio23_logo_white.png";

const Footer = () => {
  return (
    <div className="w-full md:h-[376px] flex md:flex-col md:pt-10">
      {/* Laptop View */}
      <div className="hidden md:flex flex-col">
        <div className="flex md:px-32">
          <div className="w-1/4 flex flex-col gap-10">
            <div>
              <Link href="/">
                <Image
                  src={Studio23LogoWhite}
                  width={500}
                  height={200}
                  alt="Logo"
                  className="w-[150px] md:w-[165px] pl-2 md:pl-0 pt-2 md:pt-0"
                />
              </Link>
            </div>
            <div>
              <p>
                Studio 23 is the dedicated in-house game studio of BrainStation
                23. We are passionate gamers and developers committed to
                creating high-quality, enjoyable games.
              </p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
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
                <Link href="/">
                  <span className="">Careers</span>
                </Link>
                <Link href="/contact-us">
                  <span className="">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5 2xl:gap-8">
              <div>
                <p className="font-semibold text-[17px]">Contact Us</p>
              </div>
              <p>
                8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A,
                Dhaka-1212, Bangladesh
              </p>
              <p className="md:text-[15px] 2xl:text-[16px]">
                contact@studio-23.xyz
              </p>
            </div>
          </div>
          <div className="w-1/4 flex flex-row gap-4 justify-end items-end pb-12">
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a
                href="https://www.facebook.com/Studio23.BS23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a
                href="https://www.instagram.com/studio23xyz/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a
                href="https://twitter.com/Studio23xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
            <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
              <a
                href="https://www.linkedin.com/company/studio-23-bs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex border-t-2 mt-8  justify-center">
        <p className="text-[14px] mt-8">
          Copyright ® Studio23 2024 All rights Rcerved
        </p>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-5 mx-4 my-4">
        <div>
          <Link href="/">
            <Image
              src={Studio23LogoWhite}
              width={500}
              height={200}
              alt="Logo"
              className="w-[138px]"
            />
          </Link>
        </div>
        <div>
          <p className="text-[16px]">
            Studio 23 is the dedicated in-house game studio of BrainStation 23.
            We are passionate gamers and developers committed to creating
            high-quality, enjoyable games.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <Link href="/about-us">
                <span className="font-semibold text-[17px]">About Us</span>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/our-team">
                <span className="">Our Team</span>
              </Link>
              <Link href="/our-titles">
                <span className="">Titles</span>
              </Link>
              <Link href="/careers">
                <span className="">Careers</span>
              </Link>

              <p className="">Contact Us</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <p className="font-semibold text-[17px]">Contact Us</p>
            </div>
            <p>
              8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A,
              Dhaka-1212, Bangladesh
            </p>
            <p className="text-[14px]">
              studio23contact@<br></br>brainstation-23.com
            </p>
          </div>
        </div>
        <div className="flex gap-5 mb-3">
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a
              href="https://www.facebook.com/Studio23.BS23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a
              href="https://www.instagram.com/studio23xyz/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a
              href="https://twitter.com/Studio23xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
          <div className="bg-white  w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-studio_blue">
            <a
              href="https://www.linkedin.com/company/studio-23-bs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="stroke-black w-[20px] h-[20px] hover:stroke-white" />
            </a>
          </div>
        </div>

        <div className="border-t-2">
          <div className="mt-4 flex justify-center">
            <p className=" text-[13px]">
              Copyright ® Studio23 2024 All rights Rcerved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
