import React from "react";
import Image from "next/image";

const SS2TeamSection = () => {
  return (
    <div>
      {/*Heading */}
      <div className="w-full flex flex-col justify-center items-center mt-12 mb-2 gap-6">
        <Image
          src="./assets/ss2-icon1.png"
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
      <div
        className="flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center mt-5 mx-4 md:mx-10
        md:h-[670px]"
      >
        <div className="w-full md:w-1/4 flex flex-col gap-5 justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Game Director:</h1>
            <p className="text-[20px] text-white">Tanimul Haque Khan</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Lead Artist:</h1>
            <p className="text-[20px] text-white">Mahmoda Ferdous</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Level Designers:</h1>
            <p className="text-[20px] text-white">Fahim Faisal</p>
            <p className="text-[20px] text-white">Nurusshafi Evan</p>
            <p className="text-[20px] text-white">Md. Maruf Howlader</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Art Director:</h1>
            <p className="text-[20px] text-white">Inamul Tahsin</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Art Team:</h1>
            <p className="text-[20px] text-white">Sanim Ahmed Niloy</p>
            <p className="text-[20px] text-white">Iftekhar Alan Khan</p>
            <p className="text-[20px] text-white">Shushanto</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Game Programmers:</h1>
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
        <div className="w-full md:w-1/4 flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Music Director:</h1>
            <p className="text-[20px] text-white">MD Rasheeq Ishraq Kamal</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Narrative Design:</h1>
            <p className="text-[20px] text-white">Inamul Tahsin</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Special Thanks:</h1>
            <p className="text-[20px] text-white">Generative AI</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Project Manager:</h1>
            <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[22px] text-silent2_red">Quality Assurance:</h1>
            <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS2TeamSection;
