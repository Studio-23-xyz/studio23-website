import React from "react";

const RecentEventsSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 items-center w-full h-[67px] md:h-[128px] mb-4 md:mb-6">
        <h1 className="text-[16px] md:text-[30px] font-bold">
          Our Recent Community Events
        </h1>
        <p className="text-[10px] md:text-[14px] font-normal text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="md:w-3/5 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-1/2 bg-red-400"> Brain Jam 1</div>
            <div className="w-1/2 bg-blue-400"> Brain Jam 2</div>
          </div>
          <div className="flex gap-3">
            <div className="w-1/2 bg-yellow-400">Theme Calculate</div>
            <div className="w-1/2 bg-yellow-100">Hack A Jam</div>
          </div>
        </div>
        <div className="md:w-2/5 bg-purple-400">Bad is good</div>
      </div>
    </div>
  );
};

export default RecentEventsSection;
