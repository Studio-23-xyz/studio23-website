"use client";
import Image from "next/image";
import LinkedinIcon from "../../../../public/assets/our-team-page/icons/linkedin_icon.svg";
import GithubIcon from "../../../../public/assets/our-team-page/icons/github_icon.svg";
import BehanceIcon from "../../../../public/assets/our-team-page/icons/behance_icon.svg";
import tanimImage from "../../../../public/assets/our-team-page/tanim.png";
import inamulImage from "../../../../public/assets/our-team-page/inamul.png";
import shamimImage from "../../../../public/assets/our-team-page/shamim.png";

const OurTeamMemberSection = () => {
  return (
    <div className="w-[90%] h-auto mx-auto mt-14">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[32px] md:text-[32px] font-black my-3">
          Meet Our Team
        </h1>
      </div>

      <div className="w-full flex flex-col gap-10 justify-center items-center mt-4">
        <div className="w-full h-auto flex justify-center">
          {/* Tanimul Haque Khan */}
          <div className="w-[290px] md:w-[356px] h-[227px] md:h-[280px]">
            <div className="flex justify-center">
              <Image
                src={tanimImage}
                width={400}
                height={400}
                alt="Tanimul Haque Khan"
                className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
              />
            </div>
            <div
              className="bg-white w-[290px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
            >
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tanimulhaquekhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                </a>
                <a
                  href="https://github.com/Warhammer4000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                </a>
              </div>
              <div className="flex justify-center">
                <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                  Tanimul Haque Khan
                </h1>
              </div>
              <div className="flex justify-center">
                <p className="text-[14px] md:text-[15px] text-black font-medium">
                  Studio Directior
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          {/* Inamul K Tahsin */}
          <div className="flex justify-center">
            <div className="w-[290px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={inamulImage}
                  width={400}
                  height={400}
                  alt="Inamul K Tahsin"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[290px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/inamul-k-tahsin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://www.behance.net/tahx"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <BehanceIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Inamul K Tahsin
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Art Directior
                  </p>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Screenplay Writer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Shahadat Hossain Shamim */}
          <div className="flex justify-center">
            <div className="w-[290px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={shamimImage}
                  width={400}
                  height={400}
                  alt="Shahadat Hossain Shamim"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[290px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/shamim3929/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/shamim29"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Shahadat Hossain Shamim
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Project Manager
                  </p>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Game Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          Col 3
        </div>
        <div className="bg-green-400 w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          Col 4
        </div>
        <div className="bg-blue-400 w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          Col 5
        </div>
        <div className="bg-pink-400 w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          Col 6
        </div>
      </div>
    </div>
  );
};

export default OurTeamMemberSection;
