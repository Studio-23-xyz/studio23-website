"use client";
import SS2ButtonSection from "@/app/components/silentscream2page/SS2ButtonSection";
import SS2CastSection from "@/app/components/silentscream2page/SS2CastSection";
import SS2DirectorSection from "@/app/components/silentscream2page/SS2DirectorSection";
import SS2PitchSection from "@/app/components/silentscream2page/SS2PitchSection";
import Image from "next/image";

const Test = () => {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Scetion */}

        <div className="-z-10 w-full">
          <Image
            src="/assets/silent-scream-2-hero.png"
            width={1440}
            height={969}
            alt="Silent Scream 2 Hero"
            className="hidden md:flex w-full md:h-screen"
          />
          <Image
            src="/assets/silent-scream-2-hero-mb.png"
            width={638}
            height={969}
            alt="Silent Scream 2 Hero"
            className="md:hidden w-full bg-cover"
          />
        </div>

        {/* Button Section */}
        <SS2ButtonSection />

        {/* Pitch Section */}
        <SS2PitchSection />

        {/* Director Section */}
        <SS2DirectorSection />

        {/* Cast Section */}
        <SS2CastSection />
      </div>
    </div>
  );
};

export default Test;
