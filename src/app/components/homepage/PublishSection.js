import React from "react";
import Image from "next/image";
import wanttopublish from "../../../../public/assets/home-page/wanttopublish.png";

const PublishSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-10 pb-6 md:pb-20">
      <div className="md:w-5/12">
        <Image
          src={wanttopublish}
          width={620}
          height={348}
          alt="silent-scream-logo"
          className="w-[290px] md:w-[538px] xl:w-[670px] h-[233px] md:h-[433px] rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-16 md:justify-around md:w-7/12">
        <h1 className="text-[16px] md:text-[30px] font-medium">
          Want to publish your game? We got you!
        </h1>
        <p className="text-[10px] md:text-[17px] md:font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <p className="text-[10px] md:text-[17px] md:font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button
          className="w-[115px] md:w-[231px] h-[25px] md:h-[50px] text-[8px] md:text-[16px] 
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
