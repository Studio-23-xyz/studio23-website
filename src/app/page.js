"use client";
import TitleSection from "./components/homepage/TitleSection";
import PublishSection from "./components/homepage/PublishSection";
import RecentEventsSection from "./components/homepage/RecentEventsSection";
import HeroBannerSection from "./components/homepage/HeroBannerSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBannerSection />

      {/* Main Body*/}
      <div className="mt-12 md:mt-16 mx-6 md:mx-32">
        {/* Titles Section*/}
        <TitleSection />

        {/* Publish Section*/}
        <PublishSection />

        {/* Recent Event Section*/}
        <RecentEventsSection />
      </div>
    </div>
  );
}
