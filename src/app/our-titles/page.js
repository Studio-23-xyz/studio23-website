"use client";
import Titlesherosection from "../components/titlespage/Titlesherosection";
import Gamecardssection from "../components/titlespage/Gamecardssection";

const page = () => {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Section */}
        <Titlesherosection />
        <div className="mt-12 md:mt-16 mx-6 2xl:mx-60">
          {/* Games Cards Section */}
          <Gamecardssection />
        </div>
      </div>
    </div>
  );
};

export default page;
