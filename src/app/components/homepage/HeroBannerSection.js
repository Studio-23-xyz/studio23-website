"use client";
import Image from "next/image";
import herobgsilentscream from "../../../../public/assets/home-page/SilentScreamBGLarge.png";
import herobgskull from "../../../../public/assets/home-page/silentScreamSkull.png";
import silentscreamlogo from "../../../../public/assets/home-page/silentscream_logo.png";

const HeroBannerSection = () => {
  return (
    <div>
      <div className="-z-10 w-full">
        {/* Background Image */}
        <Image
          src={herobgsilentscream}
          width={1439}
          height={837}
          alt="Hero BG"
          className="w-full h-[303px] md:h-screen"
        />
        {/* Skull */}

        <div className="absolute top-[100px] md:top-0 right-0">
          <Image
            src={herobgskull}
            width={765}
            height={871}
            alt="Silent Scream Skull"
            className="w-[220px] md:w-[880px] h-[220px] md:h-[935px]"
          />
        </div>

        {/* Logo & others */}
        <div className="flex flex-col justify-start w-[200px] md:w-[750px] absolute gap-2 md:gap-5 top-14 md:top-48 pl-6 md:pl-32">
          <Image
            src={silentscreamlogo}
            width={574}
            height={276}
            alt="silent-scream-logo"
            className="w-[185px] h-[89px] md:w-[574px] md:h-[276px]"
          />
          <p className="text-[10px] md:text-[16px]">
            Silent Scream is a stealth cooking game set in a creepy restaurant
            where you must serve customers while secretly feeding some of them
            to an alien entity in your basement.
          </p>
          {/* Store Button */}
          <div className="flex gap-3 md:gap-5">
            <button
              className="text-start w-[70px] md:w-[120px] h-[25px] md:h-[50px] bg-white font-bold text-[8px] md:text-[16px] text-black 
                       flex items-center gap-2 rounded-3xl hover:bg-studio_blue hover:cursor-pointer justify-center"
              onClick={() => {
                window.open(
                  "https://store.steampowered.com/app/1955750/SILENT_SCREAM/",
                  "_blank"
                );
              }}
            >
              Steam
              <Image
                src="./assets/steam-icon.png"
                width={30}
                height={30}
                alt="silent-scream-logo"
                className="w-[15px] md:w-[25px] h-[15px] md:h-[25px]"
              />
            </button>
            <button
              className="text-start w-[80px] md:w-[140px] h-[25px] md:h-[50px] bg-white font-bold text-[8px] md:text-[16px] text-black 
              flex justify-center items-center gap-2 rounded-3xl hover:bg-studio_blue hover:cursor-pointer"
              onClick={() => {
                window.open(
                  "ms-windows-store://pdp/?productid=9PDJZK7HLHSD",
                  "_blank"
                );
              }}
            >
              Windows
              <Image
                src="./assets/windows-icon.png"
                width={30}
                height={30}
                alt="silent-scream-logo"
                className="w-[15px] md:w-[25px] h-[15px] md:h-[25px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerSection;
