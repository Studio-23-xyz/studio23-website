import React from "react";

const CareersPageOpeningSection = () => {
  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex justify-center">
          <h1 className="text-[16px] md:text-[30px] font-black">
            Here are our openings!
          </h1>
        </div>

        <div>
          <table className="w-full">
            <tr className="h-auto border-b-2">
              <th>Game Developer Trainee</th>
              <th>On Site</th>
              <th>Dhaka, Bangladesh</th>
              <th>Game Development</th>
              <th>Full Time</th>
              <th>
                <button>Submit Resume</button>
              </th>
            </tr>
            <tr className="h-auto border-b-2">
              <th>3D Animator Trainee</th>
              <th>On Site</th>
              <th>Dhaka, Bangladesh</th>
              <th>Game Development</th>
              <th>Full Time</th>
              <th>
                <button>Submit Resume</button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CareersPageOpeningSection;
