import React from "react";

const CommunityPageLinkupSection = () => {
  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center my-5 gap-4">
          <p>Join with Game Dev Community</p>
          <a
            href="https://discord.gg/fMHWxpv4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-[12px] md:text-[16px] px-6 py-3 rounded-lg shadow-md hover:bg-studio_blue transition duration-300"
          >
            Discord Server
          </a>
        </div>

        <div>Github Section</div>
      </div>
    </div>
  );
};

export default CommunityPageLinkupSection;
