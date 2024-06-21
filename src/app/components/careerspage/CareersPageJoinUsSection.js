import React from "react";
import Image from "next/image";
import teambs23 from "../../../../public/assets/careers-page/bsteam.jpg";

const CareersPageJoinUsSection = () => {
  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div className="flex flex-col md:flex-row gap-5 md:gap-3">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={teambs23}
            width={1376}
            height={952}
            alt="Game Team BS23"
            className="md:w-full h-[233px] md:h-[507px] rounded-3xl object-cover object-center"
          />
        </div>
        <div className="md:w-1/2 flex flex-col md:gap-3 md:pl-8">
          <h2 className="text-[16px] md:text-[30px] font-bold mb-4">
            Why Join Us?
          </h2>
          <ul className="space-y-5 list-disc pl-6">
            <li>
              <p className="text-[12px] md:text-[17px]">
                <span className="font-bold">Creative Freedom: </span>
                Work on exciting projects with a team that encourages creativity
                and out-of-the-box thinking.
              </p>
            </li>
            <li>
              <p className="text-[12px] md:text-[17px]">
                <span className="font-bold">Collaborative Culture: </span>
                Be part of a supportive, dynamic team that values open
                communication and collaboration.
              </p>
            </li>
            <li>
              <p className="text-[12px] md:text-[17px]">
                <span className="font-bold">Growth Opportunities: </span>
                We invest in your professional development, offering
                opportunities for training, mentorship, and career advancement.
              </p>
            </li>
            <li>
              <p className="text-[12px] md:text-[17px]">
                <span className="font-bold">Work-Life Balance: </span>
                We believe in a healthy work-life balance, providing flexible
                work hours and a supportive environment.
              </p>
            </li>
            <li>
              <p className="text-[12px] md:text-[17px]">
                <span className="font-bold">Passion for Games: </span>
                Join a team of avid gamers and developers who are dedicated to
                creating fun, high-quality games.
              </p>
            </li>
          </ul>
          <div className="mt-5 flex justify-end">
            <button
              className="w-full md:w-[248px] h-auto md:h-[50px] bg-white text-black text-[12px] md:text-[16px] font-black rounded py-2 px-4 
                         hover:bg-studio_blue transition duration-200 "
            >
              Submit Your Resume!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPageJoinUsSection;
