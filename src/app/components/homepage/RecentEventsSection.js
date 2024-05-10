import React from "react";
import Image from "next/image";

const RecentEventsSection = () => {
  return (
    <div className="mb-8 md:mb-16">
      <div className="flex flex-col gap-3 items-center w-full h-[67px] mb-4 md:mb-16">
        <h1 className="text-[16px] md:text-[30px] font-bold">
          Our Recent Community Events
        </h1>
        <p className="text-[10px] md:text-[14px] font-normal text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-1/2 md:w-3/5">
              <Image
                src="/assets/dev-meetup-24.png"
                width={1395}
                height={1286}
                alt="Dev Meetup"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
              />
            </div>
            <div className="w-1/2 md:w-2/5">
              <Image
                src="/assets/game-jam-home.png"
                width={1342}
                height={399}
                alt="Game Jam Cover"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 md:w-2/5">
              <Image
                src="/assets/calculate.png"
                width={720}
                height={960}
                alt="Calculate Theme"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
              />
            </div>
            <div className="w-1/2 md:w-3/5">
              <Image
                src="/assets/hack-jam.jpg"
                width={1920}
                height={1005}
                alt="Hack A Jam"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/assets/good-bad.jpg"
            width={1000}
            height={1000}
            alt="Bad is Good"
            className="h-full 2xl:h-[460px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentEventsSection;
