"use client";
import { useEffect, useState } from "react";
import TitleSection from "./components/homepage/TitleSection";
import RecentEventsSection from "./components/homepage/RecentEventsSection";
import HeroBannerSection from "./components/homepage/HeroBannerSection";
import Newslatter from "./components/common/Newslatter";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // You can show a loader or a placeholder while waiting for the client-side to be fully mounted
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBannerSection />

      {/* Main Body */}
      <div className="mt-12 md:mt-16 mx-6 md:mx-32 2xl:mx-60">
        {/* Titles Section */}
        <TitleSection />

        {/* Recent Event Section */}
        <RecentEventsSection />

        {/* Newsletter Section */}
        <Newslatter />
      </div>
    </div>
  );
}
