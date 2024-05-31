"use client";
import Titlesherosection from "../components/titlespage/Titlesherosection";
import Gamecardssection from "../components/titlespage/Gamecardssection";

const page = () => {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Section */}
        <Titlesherosection />

        {/* Games Cards Section */}
        <Gamecardssection />
      </div>
    </div>
  );
};

export default page;
