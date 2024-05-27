"use client";

const SS2ButtonSection = () => {
  return (
    <div>
      <div className="w-full h-[50px] md:h-[100px] flex gap-6 md:gap-12 justify-center items-center">
        <button
          className="bg-ss2-button-bg w-[133px] md:w-[277px] md:h-[94px] h-[46px] bg-cover text-[17px] md:text-[35px] text-silent2_button_text font-bold pb-1 md:pb-2 transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
          onClick={() => {
            window.open("", "_blank");
          }}
        >
          BUY NOW
        </button>
        <button
          className="bg-ss2-button-bg w-[133px] md:w-[277px] md:h-[94px] h-[46px] bg-cover text-[17px] md:text-[35px] text-silent2_button_text font-bold pb-1 md:pb-2 transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
          onClick={() => {
            window.open("", "_blank");
          }}
        >
          TRAILER
        </button>
      </div>
    </div>
  );
};

export default SS2ButtonSection;
