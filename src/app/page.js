"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className=" -z-10 w-full">
        {/* Background Image */}
        <Image
          src="/assets/SilentScreamBGLarge.png"
          width={1439}
          height={837}
          alt="Hero BG"
          className="w-full h-[303px] md:h-screen"
        />
        {/* Skull  */}
        <div className="absolute top-[119px] md:top-[-40px] left-[173px] md:left-[675px]">
          <Image
            src="/assets/silentScreamSkull.png"
            width={765}
            height={871}
            alt="Silent Scream Skull"
            className="w-[208px] md:w-[880px] h-[221px] md:h-[935px]"
          />
        </div>
        {/* Logo & others */}
        <div className="flex flex-col justify-start w-[200px] md:w-[750px] absolute gap-2 md:gap-5 top-14 md:top-48 pl-6 md:pl-32">
          <Image
            src="/assets/silentscream_logo.png"
            width={574}
            height={276}
            alt="silent-scream-logo"
            className="w-[185px] h-[89px] md:w-[574px] md:h-[276px]"
          />
          <p className="text-[10px] md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button
            className="text-start w-[132px] md:w-[264px] h-[25px] md:h-[50px] bg-studio_blue font-bold text-[8px] md:text-[16px] text-black 
          flex justify-center items-center gap-2 rounded-3xl hover:bg-white hover:cursor-pointer"
            onClick={() => {
              window.open(
                "https://store.steampowered.com/app/1955750/SILENT_SCREAM/",
                "_blank"
              );
            }}
          >
            Check out on Steam
            <Image
              src="/assets/steam-icon.png"
              width={30}
              height={30}
              alt="silent-scream-logo"
              className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
            />
          </button>
        </div>
      </div>

      {/* Body Section*/}
      <div>
        <div className="flex">
          <div>
            <h1>Some of our other titles</h1>
          </div>
          <div>Button</div>
        </div>
        <div>
          <div>High Noon</div>
          <div>
            <div>Westwood Manor</div>
            <div>Control Override</div>
          </div>
        </div>
      </div>
    </div>
  );
}
