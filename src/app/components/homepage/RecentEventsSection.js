import React from "react";
import Image from "next/image";
import coverdevmeetup from "/public/assets/home-page/dev-meetup-24.png";
import covergamejam from "/public/assets/home-page/game-jam-home.png";
import covercalculatejam from "/public/assets/home-page/calculate_jam.png";
import coverhackjam from "/public/assets/home-page/hack-jam.jpg";
import covergoodbadjam from "/public/assets/home-page/goodbad_jam.jpg";

const RecentEventsSection = () => {
  return (
    <div className="mb-8 md:mb-16">
      <div className="flex flex-col gap-3 items-center w-full h-[67px] mb-10 md:mb-16">
        <h1 className="text-[16px] md:text-[30px] font-bold">
          Our Recent Community Events
        </h1>
        <p className="text-[12px] md:text-[14px] font-normal text-center">
          Check out the highlights from our latest community events, where
          gamers and developers connect and share their passion!
        </p>
      </div>
      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-1/2 md:w-3/5">
              <a
                href="http://localhost:3000/community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={coverdevmeetup}
                  width={1395}
                  height={1286}
                  alt="Dev Meetup"
                  className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
                />
              </a>
            </div>
            <div className="w-1/2 md:w-2/5">
              <a
                href="http://localhost:3000/community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={covergamejam}
                  width={1342}
                  height={399}
                  alt="Game Jam Cover"
                  className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
                />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 md:w-2/5">
              <a
                href="https://itch.io/jam/brain-jam/entries"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={covercalculatejam}
                  width={720}
                  height={960}
                  alt="Calculate Theme"
                  className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
                />
              </a>
            </div>
            <div className="w-1/2 md:w-3/5">
              <a
                href="http://localhost:3000/community"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={coverhackjam}
                  width={1920}
                  height={1005}
                  alt="Hack A Jam"
                  className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <a
            href="https://itch.io/jam/iutcs-hack-a-jam-2021/entries"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={covergoodbadjam}
              width={1000}
              height={1000}
              alt="Bad is Good"
              className="h-full 2xl:h-[460px] rounded-2xl object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentEventsSection;
