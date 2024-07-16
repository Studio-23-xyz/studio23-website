import React from "react";
import Image from "next/image";
import PlayingVR from "../../../../public/assets/careers-page/playingvr.jpg";
import Studio23Team from "../../../../public/assets/careers-page/teamstudio23.jpg";
import WorkingVR from "../../../../public/assets/careers-page/workingwithvr.jpg";
import PlayingArcade from "../../../../public/assets/careers-page/playingArcade.jpg";

const CommunityPageGallerySection = () => {
  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div className="flex flex-col gap-3 items-center w-full mb-10 md:mb-10">
        <h1 className="text-[16px] md:text-[30px] font-bold">Event Gallery</h1>
        <p className="text-[12px] md:text-[14px] font-normal text-center">
          Welcome to our Event Gallery, where we celebrate the memorable moments
          that bring our community together. Here, you can explore a collection
          of images showcasing our recent events, game launches, and community
          gatherings. From behind-the-scenes glimpses to epic celebrations, our
          gallery captures the essence of what makes Studio 23 special. Dive in
          and relive the excitement, creativity, and camaraderie that define our
          community.
        </p>
      </div>

      {/* Grid Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-1/2 md:w-3/5">
              <Image
                src={PlayingVR}
                width={3065}
                height={1286}
                alt="VR Playing 1"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover object-center"
              />
            </div>
            <div className="w-1/2 md:w-2/5">
              <Image
                src={Studio23Team}
                width={3628}
                height={2365}
                alt="Studio 23 Team"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover object-center"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 md:w-2/5">
              <Image
                src={WorkingVR}
                width={720}
                height={960}
                alt="VR Playing 2"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
              />
            </div>
            <div className="w-1/2 md:w-3/5">
              <Image
                src={PlayingVR}
                width={1920}
                height={1005}
                alt="Playing"
                className="w-[289px] md:w-full h-[139px] md:h-[223px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <Image
            src={PlayingArcade}
            width={1000}
            height={1000}
            alt="Arcade Playing"
            className="h-full md:h-[460px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityPageGallerySection;
