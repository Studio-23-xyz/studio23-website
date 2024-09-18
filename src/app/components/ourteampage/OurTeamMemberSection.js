"use client";
import Image from "next/image";
import dipokImage from "../../../../public/assets/our-team-page/dipok.png";
import enanImage from "../../../../public/assets/our-team-page/Enan.jpg";
import eptyImage from "../../../../public/assets/our-team-page/epty.png";
import evanImage from "../../../../public/assets/our-team-page/evan.png";
import fahimImage from "../../../../public/assets/our-team-page/fahim.png";
import ferdousImage from "../../../../public/assets/our-team-page/ferdous.png";
import ArtstationIcon from "../../../../public/assets/our-team-page/icons/artstation_icon.svg";
import BehanceIcon from "../../../../public/assets/our-team-page/icons/behance_icon.svg";
import GithubIcon from "../../../../public/assets/our-team-page/icons/github_icon.svg";
import LinkedinIcon from "../../../../public/assets/our-team-page/icons/linkedin_icon.svg";
import iftekharImage from "../../../../public/assets/our-team-page/ifthekhar.png";
import inamulImage from "../../../../public/assets/our-team-page/inamul.png";
import niloyImage from "../../../../public/assets/our-team-page/niloy.png";
import rasheeqImage from "../../../../public/assets/our-team-page/rasheeq.png";
import shamimImage from "../../../../public/assets/our-team-page/shamim.png";
import shusantoImage from "../../../../public/assets/our-team-page/shusanto.png";
import tanimImage from "../../../../public/assets/our-team-page/tanim.png";

const OurTeamMemberSection = () => {
  return (
    <div className="w-[90%] h-auto mx-auto mt-14">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[32px] md:text-[32px] font-black my-3">
          Meet Our Team
        </h1>
      </div>

      <div className="w-full flex flex-col gap-10 justify-center items-center mt-4 mb-10">
        <div className="w-full h-auto flex justify-center">
          {/* Tanimul Haque Khan */}
          <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
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
              className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
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
                  Studio Director
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          {/* Inamul K Tahsin */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
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
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
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
                    aria-label="Behance"
                  >
                    <BehanceIcon className="md:mt-[2px] w-[20px] md:w-[20px] h-[20px] md:h-[20px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Inamul K Tahsin
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Art Director
                  </p>
                  <span className="border-r-4 border-studio_blue"></span>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Screenplay Writer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Shahadat Hossain Shamim */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
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
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
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
                  <span className="border-r-4 border-studio_blue"></span>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Gameplay Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Mahmoda Ferdous */}
          <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={ferdousImage}
                  width={400}
                  height={400}
                  alt="Mahmoda Ferdous"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/mahmoda-ferdous/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://mahmodaferdous.artstation.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AirStation"
                  >
                    <ArtstationIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Mahmoda Ferdous
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Lead Artist
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          {/* Nurusshafi Evan */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={evanImage}
                  width={400}
                  height={400}
                  alt="Nurusshafi Evan"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/n-evan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/n-evan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Nurusshafi Evan
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Level Designer
                  </p>
                  <span className="border-r-4 border-studio_blue"></span>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Gameplay Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Fahim Faysal */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={fahimImage}
                  width={400}
                  height={400}
                  alt="Fahim Faysal"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/fahim-faysal-211783228/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/BDeshiDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Fahim Faysal
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Level Designer
                  </p>
                  <span className="border-r-4 border-studio_blue"></span>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Gameplay Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          {/* Dipok Sarker Dipu */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={dipokImage}
                  width={400}
                  height={400}
                  alt="Dipok Sarker Dipu"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/dipok-sarker-dipu-bb522a220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/dipokDipu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Dipok Sarker Dipu
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Gameplay Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* MD Rasheeq Ishraq Kamal */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={rasheeqImage}
                  width={400}
                  height={400}
                  alt="MD Rasheeq Ishraq Kamal"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/md-rasheeq-ishraq-kamal-90b014207/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/pizzaandpineapples"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    MD Rasheeq Ishraq Kamal
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Sound Engineer
                  </p>
                  <span className="border-r-4 border-studio_blue"></span>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Gameplay Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Zubair Islam */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={eptyImage}
                  width={400}
                  height={400}
                  alt="Zubair Islam"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/zubepty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/zubEpty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Zubair Islam
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Gameplay Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          {/* Shushanto Chowdhury */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={shusantoImage}
                  width={400}
                  height={400}
                  alt="Shushanto Chowdhury"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/shushanto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://www.artstation.com/shushanto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ArtStation"
                  >
                    <ArtstationIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Shushanto Chowdhury
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Environment Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Sanim Ahmed Niloy */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={niloyImage}
                  width={400}
                  height={400}
                  alt="Sanim Ahmed Niloy"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/sanim-ahmed-niloy-4773a7235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://www.artstation.com/immature_artist"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ArtStation"
                  >
                    <ArtstationIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Sanim Ahmed Niloy
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Concept Artist
                  </p>
                  <span className="border-r-4 border-studio_blue"></span>
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Game UI Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-10">
          {/* Iftekhar Alam Khan */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={iftekharImage}
                  width={400}
                  height={400}
                  alt="Iftekhar Alam Khan"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/iftekhar47/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://ftkhr.artstation.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AirStation"
                  >
                    <ArtstationIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                    Iftekhar Alam Khan
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                    Environment Artist
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Enan Abdullah Khan */}
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[356px] h-[227px] md:h-[280px]">
              <div className="flex justify-center">
                <Image
                  src={enanImage}
                  width={400}
                  height={400}
                  alt="Iftekhar Alam Khan"
                  className="w-[118px] md:w-[144px] h-[118px] md:h-[144px] rounded-full shadow-xl"
                />
              </div>
              <div
                className="bg-white w-[300px] md:w-[356px] h-[142px] md:h-[174px] -mt-9 md:-mt-10 
                          flex flex-col justify-end gap-2 md:gap-3 pb-2 md:pb-3 rounded-3xl"
              >
                <div className="flex justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/enan-abdullah-khan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                  <a
                    href="https://www.artstation.com/enan_abdullah_khan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="AirStation"
                  >
                    <ArtstationIcon className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] text-studio_blue hover:text-black hover:scale-125 transition-transform" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-[18px] md:text-[24px] text-black font-bold flex justify-center">
                     Enan Abdullah Khan
                  </h1>
                </div>
                <div className="flex justify-center gap-2">
                  <p className="text-[14px] md:text-[15px] text-black font-medium">
                     Animator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamMemberSection;
