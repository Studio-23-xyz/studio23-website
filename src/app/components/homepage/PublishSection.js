"use client";
import React from "react";
import Image from "next/image";
import wanttopublish from "/public/assets/home-page/wanttopublish.png";

const PublishSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-10 pb-6 md:pb-20">
      <div className="md:w-5/12">
        <Image
          src={wanttopublish}
          width={620}
          height={348}
          alt="silent-scream-logo"
          className="w-[290px] md:w-[538px] xl:w-[670px] h-[233px] md:h-[433px] rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 md:justify-around md:w-7/12">
        <h1 className="text-[16px] md:text-[30px] font-medium">
          Want to publish your game? We got you!
        </h1>
        <p className="text-[12px] md:text-[17px] md:font-normal">
          At Studio 23, we are always on the lookout for great games—nothing is
          more important to us! We love collaborating with passionate developers
          who are dedicated to bringing exceptional gaming experiences to
          players. We are genre and platform agnostic, offering our extensive
          experience and knowledge to support you through all stages of creative
          development and the publishing lifecycle.
        </p>
        <p className="text-[12px] md:text-[17px] md:font-normal">
          Fundamental to our partnerships is our commitment to helping you
          achieve long-term financial sustainability and success. If you have a
          game that you believe in, submit it to us and let's create something
          amazing together.
        </p>
        <button
          className="w-[130px] md:w-[231px] h-[30px] md:h-[50px] text-[10px] md:text-[16px] 
        font-bold md:font-black bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer"
          onClick={() => {
            window.open("", "_blank");
          }}
        >
          Submit Your Idea!
        </button>
      </div>
    </div>
  );
};

export default PublishSection;
