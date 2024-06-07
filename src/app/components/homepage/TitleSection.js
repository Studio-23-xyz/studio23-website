"use client";
import Image from "next/image";
import Link from "next/link";
import covercontroloverride from "/public/assets/home-page/control_override.png";
import coverwestwoodmanor from "/public/assets/home-page/westwood-home.png";
import coverhighnoon from "/public/assets/home-page/highnoon-home.png";

const TitleSection = () => {
  return (
    <div className="pb-4 md:pb-4">
      {/* Title & Button Section */}
      <div className="flex justify-between items-center pb-4 md:pb-14">
        <div>
          <h1 className="text-[14px] md:text-[32px] font-bold">
            Some of our other titles
          </h1>
        </div>
        <div className="z-10">
          <Link href="/our-titles">
            <button
              className="w-[80px] h-[25px] md:w-[160px] md:h-[50px] rounded-md md:rounded-lg bg-studio_blue text-[10px] md:text-[20px]
             text-black font-extrabold hover:bg-white hover:text-studio_blue"
            >
              See All
            </button>
          </Link>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-3">
          <div
            className="bg-titles-hero bg-cover bg-center rounded-2xl h-[139px] md:h-[277px] pb-2 md:pb-3 pr-2 md:pr-3
            flex justify-end items-end gap-3"
          >
            <button
              className="w-[80px] md:w-[140px] h-[25px] md:h-[50px] rounded-3xl bg-white flex justify-center items-center
              gap-2 hover:bg-studio_blue text-[8px] md:text-[16px] font-medium text-black"
              onClick={() => {
                window.open(
                  "https://store.steampowered.com/app/1406090/ControlOverride/",
                  "_blank"
                );
              }}
            >
              XBOX
              <Image
                src="./assets/xbox-icon.png"
                width={500}
                height={500}
                alt="Xbox Icon"
                className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
              />
            </button>
            <button
              className="w-[80px] md:w-[140px] h-[25px] md:h-[50px] rounded-3xl bg-white flex justify-center items-center
              gap-2 hover:bg-studio_blue text-[8px] md:text-[16px] font-medium text-black"
              onClick={() => {
                window.open(
                  "ms-windows-store://pdp/?productid=9N73W1728BG8",
                  "_blank"
                );
              }}
            >
              Windows
              <Image
                src="./assets/windows-icon.png"
                width={512}
                height={512}
                alt="Windows Icon"
                className="w-[15px] md:w-[25px] h-[15px] md:h-[25px]"
              />
            </button>
            <button
              className="w-[80px] md:w-[140px] h-[25px] md:h-[50px] rounded-3xl bg-white flex justify-center items-center
              gap-2 hover:bg-studio_blue text-[8px] md:text-[16px] font-medium text-black"
              onClick={() => {
                window.open(
                  "ms-windows-store://pdp/?productid=9N73W1728BG8",
                  "_blank"
                );
              }}
            >
              Steam
              <Image
                src="./assets/steam-icon.png"
                width={500}
                height={500}
                alt="Steam Icon"
                className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
              />
            </button>
          </div>
          <div>
            <h3 className="text-[12px] md:text-[24px] font-bold">
              Control Override
            </h3>
          </div>
        </div>

        <div className="flex gap-4 md:w-1/2">
          <div className="flex flex-col gap-2 w-1/2">
            <div
              className="bg-home-titles-wm bg-cover bg-center rounded-2xl h-[139px] md:h-[277px] pb-2 md:pb-3 pr-2 md:pr-3
            flex justify-end items-end gap-3"
            >
              <button
                className="w-[80px] md:w-[140px] h-[25px] md:h-[50px] rounded-3xl bg-white flex justify-center items-center
              gap-2 hover:bg-studio_blue text-[8px] md:text-[16px] font-medium text-black"
                onClick={() => {
                  window.open(
                    "https://brainstation23.itch.io/westwood-manor",
                    "_blank"
                  );
                }}
              >
                itch.io
                <Image
                  src="./assets/itch-icon.png"
                  width={500}
                  height={500}
                  alt="itch-io Icon"
                  className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
                />
              </button>
            </div>
            <div>
              <h3 className="text-[12px] md:text-[24px] font-bold">
                Westwood Manor
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <div
              className="bg-home-titles-hn bg-cover bg-center rounded-2xl h-[139px] md:h-[277px] pb-2 md:pb-3 pr-2 md:pr-3
              flex justify-end items-end gap-3"
            >
              <button
                className="w-[80px] md:w-[140px] h-[25px] md:h-[50px] rounded-3xl bg-white flex justify-center items-center
                gap-2 hover:bg-studio_blue text-[8px] md:text-[16px] font-medium text-black"
                onClick={() => {
                  window.open(
                    "https://brainstation23.itch.io/high-noon",
                    "_blank"
                  );
                }}
              >
                itch.io
                <Image
                  src="./assets/itch-icon.png"
                  width={500}
                  height={500}
                  alt="itch-io Icon"
                  className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"
                />
              </button>
            </div>
            <div>
              <h3 className="text-[12px] md:text-[24px] font-bold">
                High Noon
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
