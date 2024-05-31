"use client";
import Image from "next/image";
import Titlesherosection from "../components/titlespage/Titlesherosection";
import silentscreamlogo from "../../../public/assets/home-page/silentscream_logo.png";

const page = () => {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Section */}
        <Titlesherosection />

        {/* Games List Section */}

        <div className="w-full h-auto pt-7 md:pt-14 flex flex-col gap-4 md:gap-10 px-5 md:px-12">
          {/* Games Card 1 */}
          <div className="h-[290px] md:h-[425px] flex flex-col md:flex-row">
            <div className="md:w-3/5 w-full h-[410px] md:h-full bg-ss1-banner-1 bg-cover bg-center rounded-2xl">
              <div className="h-full flex flex-col justify-center items-center pt-8 md:pt-0">
                <Image
                  src={silentscreamlogo}
                  width={1439}
                  height={837}
                  alt="Hero BG"
                  className="w-[187px] md:w-[337px] h-[90px] md:h-[162px]"
                />
                <div className="h-full flex flex-col mx-3 pb-3 justify-end gap-2 md:hidden">
                  <h1 className="text-[12px] font-bold">Silent Scream</h1>
                  <h6 className="text-[10px] font-medium">
                    Action, Horror-Adventure
                  </h6>
                  <button
                    className="w-[250px] h-[50px] text-[16px] font-bold md:font-black bg-studio_blue text-black rounded-2xl
                   hover:bg-white hover:cursor-pointer"
                    onClick={() => {
                      window.open("", "_blank");
                    }}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 h-full hidden md:flex md:flex-col justify-start gap-3 pl-5 pt-2">
              <h6 className="text-[10px] md:text-[16px] font-medium">
                Action, Horror-Adventure
              </h6>
              <h1 className="text-[12px] md:text-[52px] font-bold">
                Silent Scream
              </h1>
              <p className="text-[16px] font-medium pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="flex flex-row gap-3 pb-5">
                <p className="text-[16px] font-bold">Available on</p>
                <div>icons</div>
              </div>
              <button
                className=" h-[25px] md:h-[50px] text-[8px] md:text-[16px] 
                    font-bold md:font-black bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer"
                onClick={() => {
                  window.open("", "_blank");
                }}
              >
                More Details
              </button>
            </div>
          </div>

          {/* Games Card 2 */}
          <div className="h-[290px] md:h-[425px] flex flex-col md:flex-row">
            <div className="md:w-2/5 h-full hidden md:flex md:flex-col justify-start gap-3 pr-5 pt-2">
              <h6 className="text-[10px] md:text-[16px] font-medium">
                Action, Horror-Adventure
              </h6>
              <h1 className="text-[12px] md:text-[52px] font-bold">
                Silent Scream
              </h1>
              <p className="text-[16px] font-medium pb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="flex flex-row gap-3 pb-5">
                <p className="text-[16px] font-bold">Available on</p>
                <div>icons</div>
              </div>
              <button
                className=" h-[25px] md:h-[50px] text-[8px] md:text-[16px] 
                    font-bold md:font-black bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer"
                onClick={() => {
                  window.open("", "_blank");
                }}
              >
                More Details
              </button>
            </div>
            <div className="md:w-3/5 w-full h-[410px] md:h-full bg-ss1-banner-1 bg-cover bg-center rounded-2xl">
              <div className="h-full flex flex-col justify-center items-center pt-8 md:pt-0">
                <Image
                  src={silentscreamlogo}
                  width={1439}
                  height={837}
                  alt="Hero BG"
                  className="w-[187px] md:w-[337px] h-[90px] md:h-[162px]"
                />
                <div className="h-full flex flex-col mx-3 pb-3 justify-end gap-2 md:hidden">
                  <h1 className="text-[12px] font-bold">Silent Scream</h1>
                  <h6 className="text-[10px] font-medium">
                    Action, Horror-Adventure
                  </h6>
                  <button
                    className="w-[250px] h-[50px] text-[16px] font-bold md:font-black bg-studio_blue text-black rounded-2xl
                   hover:bg-white hover:cursor-pointer"
                    onClick={() => {
                      window.open("", "_blank");
                    }}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
