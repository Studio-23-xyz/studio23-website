import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center gap-6">
      <div>
        <Link href="/our-titles/silent-scream-2">
          <p className="text-[20px] text-silent2_red hover:text-white">
            Silen Scream 2 Game Page
          </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
