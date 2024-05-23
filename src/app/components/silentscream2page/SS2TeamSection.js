import React from "react";
import Image from "next/image";
import Quill from "../../../../public/assets/ss2-game-page/ss2-quill.png";

const SS2TeamSection = () => {
  return (
    <div>
      {/*Heading */}
      <div className="w-full flex flex-col justify-center items-center mt-12 mb-2 gap-6">
        <Image
          src={Quill}
          width={64}
          height={100}
          alt="Silent Scream 2 Icon"
          className="w-[64px] h-[100px]"
        />
        <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_red">
          TEAM MEMBERS
        </h1>
      </div>
      {/*Names Section */}

      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center mt-5 mx-4 md:mx-10 md:h-[670px]">
        <div className=" w-full grid md:grid-cols-4 gap-5">
          <div className="">
            <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Game Director:</h1>
              <p className="text-[20px] text-white">Tanimul Haque Khan</p>
            </div>
            <div className="h-[80px] md:h-[200px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Lead Artist:</h1>
              <p className="text-[20px] text-white">Mahmoda Ferdous</p>
            </div>
            <div className="h-[270px] md:h-[300px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">
                Game Programmers:
              </h1>
              <p className="text-[20px] text-white">Zubair Islam</p>
              <p className="text-[20px] text-white">Dipok Sarker Dipu</p>
              <p className="text-[20px] text-white">Tanimul Haque Khan</p>
              <p className="text-[20px] text-white">Fahim Faisal</p>
              <p className="text-[20px] text-white">Nurusshafi Evan</p>
              <p className="text-[20px] text-white">Md. Maruf Howlader</p>
              <p className="text-[20px] text-white">MD Rasheeq Ishraq Kamal</p>
              <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
            </div>
          </div>
          <div className="">
            <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Art Director:</h1>
              <p className="text-[20px] text-white">Inamul Tahsin</p>
            </div>
            <div className="h-[150px] md:h-[200px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Art Team:</h1>
              <p className="text-[20px] text-white">Sanim Ahmed Niloy</p>
              <p className="text-[20px] text-white">Iftekhar Alan Khan</p>
              <p className="text-[20px] text-white">Shushanto Chowdhury</p>
            </div>
            <div className="h-[80px] md:h-[300px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">
                Quality Assurance:
              </h1>
              <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
            </div>
          </div>
          <div className="">
            <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Music Director:</h1>
              <p className="text-[20px] text-white">MD Rasheeq Ishraq Kamal</p>
            </div>
            <div className="h-[80px] md:h-[200px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">
                Narrative Design:
              </h1>
              <p className="text-[20px] text-white">Inamul Tahsin</p>
            </div>
            <div className="md:h-[300px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Special Thanks:</h1>
              <p className="text-[20px] text-white">Generative AI</p>
            </div>
          </div>
          <div className="">
            <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Project Manager:</h1>
              <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
            </div>
            <div className="h-[150px] md:h-[200px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] text-silent2_red">Level Designers:</h1>
              <p className="text-[20px] text-white">Fahim Faisal</p>
              <p className="text-[20px] text-white">Nurusshafi Evan</p>
              <p className="text-[20px] text-white">Md. Maruf Howlader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS2TeamSection;
