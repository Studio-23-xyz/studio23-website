"use client";
import TitleSection from "./components/homepage/TitleSection";
import RecentEventsSection from "./components/homepage/RecentEventsSection";
import HeroBannerSection from "./components/homepage/HeroBannerSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBannerSection />

      {/* Main Body*/}

      <div className="mt-12 md:mt-16 mx-6 md:mx-32 2xl:mx-60">
        {/* Titles Section*/}
        <TitleSection />

        {/* Recent Event Section*/}
        <RecentEventsSection />
      </div>
    </div>
  );
}
