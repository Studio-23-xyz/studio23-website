"use client";
import Image from "next/image";
import tanimImage from "../../../../public/assets/our-team-page/tanim.png";

const OurTeamMemberSection = () => {
  return (
    <div className="w-[90%] h-auto mx-auto mt-14">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[32px] md:text-[32px] font-black my-3">
          Meet Our Team
        </h1>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-4">
        <div className="w-[356px] h-[280px] bg-red-200">
          {/* Tanimul Haque Khan */}
          <div className="">
            <Image
              src={tanimImage}
              width={400}
              height={400}
              alt="Tanimul Haque Khan"
              className="w-[144px] h-[144px] rounded-full"
            />
          </div>
          <div className="w-[356px] h-[174px] bg-yellow-200 bg-opacity-30">
            Section
          </div>
        </div>
        <div>Col 2</div>
        <div>Col 3</div>
        <div>Col 4</div>
        <div>Col 5</div>
        <div>Col 6</div>
      </div>
    </div>
  );
};

export default OurTeamMemberSection;
