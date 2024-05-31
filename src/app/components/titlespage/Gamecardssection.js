"use client";
import Link from "next/link";
import Image from "next/image";
import silentscreamlogo from "../../../../public/assets/home-page/silentscream_logo.png";
import silentscream2logo from "../../../../public/assets/ss2-game-page/silent-scram-2-logo.svg";
import silentscream2hero from "../../../../public/assets/ss2-game-page/silent-scream-2-hero.png";
import controloverridehero from "../../../../public/assets/home-page/control_override.png";
import steamicon from "../../../../public/assets/titles-page/steam-icon.svg";
import windowsicon from "../../../../public/assets/windows-icon.png";
import xboxicon from "../../../../public/assets/xbox-icon.png";

const Gamecardssection = () => {
  return (
    <div>
      <div className="w-full h-auto py-7 md:py-14 flex flex-col gap-4 md:gap-10 px-5 md:px-12">
        {/* Games Card 1 */}
        <div className="h-[290px] md:h-[425px] flex flex-col md:flex-row">
          <div
            className="md:w-3/5 2xl:w-7/12 w-full h-[410px] md:h-full bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${silentscream2hero.src})` }}
          >
            <div className="h-full flex flex-col justify-center items-center pt-8 md:pt-0">
              <Image
                src={silentscream2logo}
                width={1439}
                height={837}
                alt="Hero BG"
                className="w-[200px] md:w-[400px] h-[100px] md:h-[200px]"
              />
              <div className="h-full flex flex-col mx-3 pb-3 justify-end gap-2 md:hidden">
                <h1 className="text-[12px] font-bold">Silent Scream 2</h1>
                <h6 className="text-[10px] font-medium">
                  Psychological-Puzzle-Horror
                </h6>
                <Link href="/our-titles/silent-scream-2">
                  <p
                    className="flex justify-center items-center w-[250px] h-[50px] text-[16px] font-bold md:font-black
                       bg-studio_blue text-black rounded-2xl hover:bg-white hover:cursor-pointer"
                  >
                    More Details
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 2xl:w-5/12 h-full hidden md:flex md:flex-col justify-start gap-3 pl-5 pt-2">
            <h6 className="text-[10px] md:text-[16px] font-medium">
              Psychological-Puzzle-Horror
            </h6>
            <h1 className="text-[12px] md:text-[52px] font-bold">
              Silent Scream 2
            </h1>
            <p className="text-[16px] font-medium pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="flex flex-row gap-3 pb-5">
              <p className="text-[16px] font-bold">Coming Soon</p>
              <div></div>
            </div>
            <Link href="/our-titles/silent-scream-2">
              <p
                className="flex justify-center items-center h-[25px] md:h-[50px] text-[8px] md:text-[16px] font-bold md:font-black 
                  bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer"
              >
                More Details
              </p>
            </Link>
          </div>
        </div>

        {/* Games Card 2 */}

        <div className="h-[290px] md:h-[425px] flex flex-col md:flex-row">
          <div className="md:w-2/5 2xl:w-5/12 h-full hidden md:flex md:flex-col justify-start gap-3 pr-5 pt-2">
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
              <div className="flex gap-2">
                <div className="md:w-[25px] md:h-[25px] bg-white flex items-center rounded-full justify-center">
                  <Image
                    src={steamicon}
                    width={30}
                    height={30}
                    alt="silent-scream-logo"
                    className="md:w-[20px] md:h-[20px]"
                  />
                </div>
                <div className="md:w-[25px] md:h-[25px] bg-white flex items-center rounded-full justify-center">
                  <Image
                    src={windowsicon}
                    width={30}
                    height={30}
                    alt="silent-scream-logo"
                    className="md:w-[15px] md:h-[15px]"
                  />
                </div>
              </div>
            </div>
            <Link href="/our-titles/silent-scream">
              <p
                className="flex justify-center items-center h-[25px] md:h-[50px] text-[8px] md:text-[16px] font-bold md:font-black 
                  bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer"
              >
                More Details
              </p>
            </Link>
          </div>
          <div className="md:w-3/5 2xl:w-7/12 w-full h-[410px] md:h-full bg-ss1-banner-1 bg-cover bg-center rounded-2xl">
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
                <Link href="/our-titles/silent-scream">
                  <p
                    className="flex justify-center items-center w-[250px] h-[50px] text-[16px] font-bold md:font-black
                       bg-studio_blue text-black rounded-2xl hover:bg-white hover:cursor-pointer"
                  >
                    More Details
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Games Card 3 */}
        <div className="h-[290px] md:h-[425px] flex flex-col md:flex-row">
          <div
            className="md:w-3/5 2xl:w-7/12 w-full h-[410px] md:h-full bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${controloverridehero.src})` }}
          >
            <div className="h-full flex flex-col justify-center items-center pt-8 md:pt-0">
              <div className="h-full flex flex-col mx-3 pb-3 justify-end gap-2 md:hidden">
                <h1 className="text-[12px] font-bold">Control Override</h1>
                <h6 className="text-[10px] font-medium">Arcade, Puzzle</h6>
                <Link href="/our-titles/control-override">
                  <p
                    className="flex justify-center items-center w-[250px] h-[50px] text-[16px] font-bold md:font-black
                       bg-studio_blue text-black rounded-2xl hover:bg-white hover:cursor-pointer"
                  >
                    More Details
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 2xl:w-5/12 h-full hidden md:flex md:flex-col justify-start gap-3 pl-5 pt-2">
            <h6 className="text-[10px] md:text-[16px] font-medium">
              Arcade, Puzzle
            </h6>
            <h1 className="text-[12px] md:text-[52px] font-bold">
              Control Override
            </h1>
            <p className="text-[16px] font-medium pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="flex flex-row gap-3 pb-5">
              <p className="text-[16px] font-bold">Available on</p>
              <div className="flex gap-2">
                <div className="md:w-[25px] md:h-[25px] bg-white flex items-center rounded-full justify-center">
                  <Image
                    src={steamicon}
                    width={30}
                    height={30}
                    alt="silent-scream-logo"
                    className="md:w-[20px] md:h-[20px]"
                  />
                </div>
                <div className="md:w-[25px] md:h-[25px] bg-white flex items-center rounded-full justify-center">
                  <Image
                    src={windowsicon}
                    width={30}
                    height={30}
                    alt="silent-scream-logo"
                    className="md:w-[15px] md:h-[15px]"
                  />
                </div>
                <div className="md:w-[25px] md:h-[25px] bg-white flex items-center rounded-full justify-center">
                  <Image
                    src={xboxicon}
                    width={30}
                    height={30}
                    alt="silent-scream-logo"
                    className="md:w-[15px] md:h-[15px]"
                  />
                </div>
              </div>
            </div>
            <Link href="/our-titles/control-override">
              <p
                className="flex justify-center items-center h-[25px] md:h-[50px] text-[8px] md:text-[16px] font-bold md:font-black 
                  bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer"
              >
                More Details
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamecardssection;
