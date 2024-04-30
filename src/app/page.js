"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="-z-10 w-full">
        {/* Background Image */}
        <Image
          src="/assets/SilentScreamBGLarge.png"
          width={1439}
          height={837}
          alt="Hero BG"
          className="w-full h-[303px] md:h-screen"
        />
        {/* Skull */}

        <div className="absolute top-[100px] md:top-0 right-0">
          <Image
            src="/assets/silentScreamSkull.png"
            width={765}
            height={871}
            alt="Silent Scream Skull"
            className="w-[220px] md:w-[880px] h-[220px] md:h-[935px]"
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
              className="w-[15px] md:w-[25px] h-[15px] md:h-[25px]"
            />
          </button>
        </div>
      </div>

      {/* Main Body*/}
      <div className="mt-12 md:mt-16 mx-6 md:mx-32">
        {/* Titles Section*/}
        <div className="flex justify-between items-center pb-4 md:pb-12">
          <div>
            <h1 className="text-[14px] md:text-[32px] font-bold">
              Some of our other titles
            </h1>
          </div>
          <div>
            <Link href="/our-titles">
              <button
                className="w-[80px] h-[25px] md:w-[160px] md:h-[50px] rounded-md md:rounded-lg bg-studio_blue text-[10px] md:text-[20px]
             text-black font-extrabold hover:text-white hover:bg-black"
              >
                See All
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 flex flex-col gap-4">
            <Image
              src="/assets/highnoon-home.png"
              width={1712}
              height={760}
              alt="silent-scream-logo"
              className="w-[289px] md:w-[650px] h-[139px] md:h-[277px] rounded-2xl"
            />
            <h3 className="text-[12px] md:text-[24px] font-bold">High Noon</h3>
            <div
              className="w-[71px] md:w-[143px] h-[25px] md:h-[50px] bg-white flex justify-center items-center 
              gap-2 rounded-3xl relative left-[195px] md:left-[430px] bottom-[82px] md:bottom-[130px]"
            >
              <p className="text-[8px] md:text-[16px] font-medium text-black">
                itch.io
              </p>
              <Image
                src="/assets/itch-icon.png"
                width={500}
                height={500}
                alt="itch-io Icon"
                className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
              />
            </div>
          </div>

          <div className="flex flex-row md:w-1/2 gap-3 md:gap-4">
            <div className="w-1/2 bg-red-200">Westwood Manor</div>
            <div className="w-1/2 bg-blue-300">Control Override</div>
          </div>
        </div>
        {/* Publish Section*/}
        <div>
          <div>Image</div>
          <h1>Want to</h1>
          <p>Lorem</p>
          <p>Lorem</p>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
