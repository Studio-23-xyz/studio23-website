import React from "react";
import Image from "next/image";
import GdcbdLogo from "../../../../public/assets/community-page/gdcbd_logo.png";
import Studio23Logo from "../../../../public/assets/community-page/studio23white2.png";
import DiscordLogo from "../../../../public/assets/community-page/discord_1.png";
import InviteForm from "./InviteForm";

const CommunityPageJoinOurSection = () => {
  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div className="flex flex-col gap-3 items-center w-full mb-10 md:mb-20">
        <h1 className="text-[16px] md:text-[30px] font-bold">
          Join our community
        </h1>
        <p className="text-[12px] md:text-[14px] font-normal text-center">
          At Studio 23, we believe in the power of community and collaboration.
          Whether you’re a gamer, a developer, or someone who loves both, we
          have the perfect platforms for you to connect, learn, and grow with
          us. Join our Discord server for lively discussions, exclusive events,
          and the latest updates. Dive into our GitHub repository to access
          source codes, contribute to projects, and collaborate with fellow
          developers. Let’s build something amazing together!
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="bg-mordern_black w-full md:w-1/2 px-5 py-5 flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-2/5 flex justify-center">
            <Image
              src={GdcbdLogo}
              width={1366}
              height={768}
              alt="GDCBD Logo"
              className="w-[105px] md:w-[210px] h-[105px] md:h-[210px] rounded-2xl object-cover object-center"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-4 justify-between">
            <p className="text-[16px] font-medium leading-8">
              Join our vibrant Discord community! Share your gaming experiences,
              participate in exclusive events, and stay updated with the latest
              from Studio 23.
            </p>
            <div
              className="bg-studio_blue text-black text-[16px] font-bold px-6 py-3 rounded-lg shadow-md hover:bg-white transition duration-300
            flex gap-3 items-center justify-center"
            >
              <Image
                src={DiscordLogo}
                width={21}
                height={16}
                alt="Discord Logo"
                className="w-[21px] h-[16px] object-cover object-center"
              />
              <a
                href="https://discord.gg/fMHWxpv4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black text-[16px] font-bold"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
        <div className="bg-mordern_black w-full md:w-1/2 px-5 py-5 flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-2/5 flex justify-center">
            <Image
              src={Studio23Logo}
              width={1366}
              height={768}
              alt="GDCBD Logo"
              className="w-[105px] md:w-[210px] h-[105px] md:h-[210px] rounded-2xl object-cover object-center"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-4 justify-between">
            <p className="text-[16px] font-medium leading-8">
              Join our GitHub organization & collaborate with other developers.
            </p>
            <div className="">
              <InviteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPageJoinOurSection;
