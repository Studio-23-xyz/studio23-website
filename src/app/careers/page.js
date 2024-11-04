import CareersPageGallerySection from "../components/careerspage/CareersPageGallerySection";
import CareersPageHeroSection from "../components/careerspage/CareersPageHeroSection";
import CareersPageJoinUsSection from "../components/careerspage/CareersPageJoinUsSection";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <CareersPageHeroSection />
      <div className="2xl:mx-60">
        {/* Gallery Section */}
        <CareersPageGallerySection />

        {/* Why Join Us Section */}
        <CareersPageJoinUsSection />

        {/* Openings Section */}
        {/* <CareersPageOpeningSection /> */}
        
      </div>
    </div>
  );
};

export default page;
