"use client";
import Image from "next/image";
import LinkedinIcon from "../../../../public/assets/our-team-page/icons/linkedin_icon.svg";
import GithubIcon from "../../../../public/assets/our-team-page/icons/github_icon.svg";
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
        <div className="w-[356px] h-[280px]">
          {/* Tanimul Haque Khan */}
          <div className="relative mx-24">
            <Image
              src={tanimImage}
              width={400}
              height={400}
              alt="Tanimul Haque Khan"
              className="w-[144px] h-[144px] rounded-full absolute shadow-lg"
            />
          </div>
          <div className="w-[356px] h-[174px] rounded-3xl bg-white mt-[106px] flex flex-col justify-end gap-3 pb-3">
            <div className="flex justify-center gap-3">
              <LinkedinIcon className="w-[24px] h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
              <GithubIcon className="w-[24px] h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-[24px] text-black font-bold">
                TANIMUL HAUQE KHAN
              </h1>
            </div>
            <div className="flex justify-center">
              <p className="text-[14px] text-black font-medium">
                Studio Directior
              </p>
            </div>
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
