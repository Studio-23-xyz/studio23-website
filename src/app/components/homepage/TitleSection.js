"use client";
import Image from "next/image";
import Link from "next/link";

const TitleSection = () => {
  return (
    <div className="pb-4 md:pb-4">
      <div className="flex justify-between items-center pb-4 md:pb-14">
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
      <div className="flex flex-col md:flex-row gap-4 pb-4 md:pb-12">
        {/* Control Override*/}
        <div className="flex flex-col w-full md:w-1/2 relative gap-4">
          <Image
            src="/nextjs-github-pages/assets/control_override.png"
            width={1712}
            height={760}
            alt="Control Override Cover"
            className="w-[289px] md:w-full h-[139px] md:h-[277px] rounded-2xl object-cover"
          />
          <h3 className="text-[12px] md:text-[24px] font-bold">
            Control Override
          </h3>
          <button
            className="w-[71px] md:w-[143px] h-[25px] md:h-[50px] bg-white flex justify-center items-center 
              gap-2 rounded-3xl absolute right-2 md:right-3 bottom-10 md:bottom-16"
            onClick={() => {
              window.open(
                "https://store.steampowered.com/app/1406090/ControlOverride/",
                "_blank"
              );
            }}
          >
            <p className="text-[8px] md:text-[16px] font-medium text-black">
              Steam
            </p>
            <Image
              src="/nextjs-github-pages/assets/steam-icon.png"
              width={500}
              height={500}
              alt="Steam Icon"
              className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
            />
          </button>
        </div>

        <div className="flex flex-row w-full md:w-1/2 gap-3 md:gap-4">
          {/* Westwood Manor */}
          <div className="w-1/2 relative flex flex-col gap-4">
            <Image
              src="/nextjs-github-pages/assets/westwood-home.png"
              width={1712}
              height={760}
              alt="Westwood Manor Cover"
              className="w-[289px] md:w-[650px] h-[139px] md:h-[277px] rounded-2xl object-cover"
            />
            <h3 className="text-[12px] md:text-[24px] font-bold">
              Westwood Manor
            </h3>
            <button
              className="w-[71px] md:w-[143px] h-[25px] md:h-[50px] bg-white flex justify-center items-center 
              gap-2 rounded-3xl absolute right-2 md:right-3 bottom-10 md:bottom-16"
              onClick={() => {
                window.open(
                  "https://brainstation23.itch.io/westwood-manor",
                  "_blank"
                );
              }}
            >
              <p className="text-[8px] md:text-[16px] font-medium text-black">
                itch.io
              </p>
              <Image
                src="/nextjs-github-pages/assets/itch-icon.png"
                width={500}
                height={500}
                alt="itch-io Icon"
                className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
              />
            </button>
          </div>
          {/* High Noon */}
          <div className="w-1/2 relative flex flex-col gap-4">
            <Image
              src="/nextjs-github-pages/assets/highnoon-home.png"
              width={1712}
              height={760}
              alt="High Noon Cover"
              className="w-[289px] md:w-[650px] h-[139px] md:h-[277px] rounded-2xl object-cover"
            />
            <h3 className="text-[12px] md:text-[24px] font-bold">High Noon</h3>
            <button
              className="w-[71px] md:w-[143px] h-[25px] md:h-[50px] bg-white flex justify-center items-center 
              gap-2 rounded-3xl absolute right-2 md:right-3 bottom-10 md:bottom-16"
              onClick={() => {
                window.open(
                  "https://brainstation23.itch.io/high-noon",
                  "_blank"
                );
              }}
            >
              <p className="text-[8px] md:text-[16px] font-medium text-black">
                itch.io
              </p>
              <Image
                src="/nextjs-github-pages/assets/itch-icon.png"
                width={500}
                height={500}
                alt="itch-io Icon"
                className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
