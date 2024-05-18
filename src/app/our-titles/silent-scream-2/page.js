"use client";
import Image from "next/image";


const Test = () => {
  return (
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

      <div className="w-full h-[50px] md:h-[100px] flex gap-6 md:gap-12 justify-center items-center">
        <button className="bg-ss2-button-bg w-[133px] md:w-[277px] md:h-[94px] h-[46px] bg-cover
                text-[17px] md:text-[35px] text-silent2_button_text font-bold pb-1 md:pb-2"
                onClick={() => {
                  window.open(
                    "",
                    "_blank"
                  );
                }}>
          BUY NOW
        </button>
        <button className="bg-ss2-button-bg w-[133px] md:w-[277px] md:h-[94px] h-[46px] bg-cover
                text-[17px] md:text-[35px] text-silent2_button_text font-bold pb-1 md:pb-2"
                onClick={() => {
                  window.open(
                    "",
                    "_blank"
                  );
                }}>
          TRAILER
        </button>

      </div>

       {/* Pitch Section */}

       <div className="w-full flex justify-center items-center">
         {/* Laptop View */}
        <div className="md:flex hidden md:w-[1320px] md:h-[288px] bg-ss2-banner-ls
              bg-full bg-no-repeat bg-center">
          <p className="flex justify-center items-center text-[20px] font-bold text-silent2_button_text
              text-center mx-14 leading-10">
              Silent Scream 2, a spine-chilling third-person adventure puzzle horror game developed by Studio 23, plunges players into the depths of terror within an abandoned asylum, where they must navigate through intricate puzzles, uncover dark mysteries, and confront malevolent entities to survive.
          </p>
       </div>
       {/* Mobile View */}
         <div className="flex md:hidden w-[290px] h-[300px] bg-ss2-banner-ms
                bg-cover bg-center bg-no-repeat">
           <p className="flex justify-start items-center text-[14px] font-bold text-silent2_button_text
               text-center mx-4 leading-5">
                Silent Scream 2, a spine-chilling third-person adventure puzzle horror game developed by Studio 23, plunges players into the depths of terror within an abandoned asylum, where they must navigate through intricate puzzles, uncover dark mysteries, and confront malevolent entities to survive.
          </p>
       </div>

       </div>

       {/* Director Section */}

       <div className="w-full flex justify-center items-center bg-slate-200">
        {/* Laptop View */}
          <div className="md:flex flex-col gap-6 hidden md:w-[1320px] md:h-[432px] bg-ss2-banner-ls bg-full bg-no-repeat bg-center">
             <h3 className="text-[40px] font-bold text-silent2_button_text
             text-center">
             WORDS FROM THE GAME DIRECTOR
             </h3>
              <p className="flex justify-center items-center text-[20px] font-bold text-silent2_button_text
              text-center mx-14 leading-10">
              Sed lectus consequat convallis faucibus etiam sit mauris hendrerit cursus. Cursus mattis eget placerat et diam. Mauris tortor risus dolor porta aliquam id vestibulum. Magna ipsum erat est augue. Malesuada etiam sit amet sem orci cursus lorem tempus. Et et est et et vitae enim. Nulla dignissim tortor adipiscing cursus egestas nisl egestas. Rhoncus pellentesque enim amet massa pretium massa ut mauris sit. Sit quis volutpat enim dignissim erat eu risus porttitor.
Praesent sapien eget velit nulla commodo. Ullamcorper sagittis nunc Ullamcorper sagittis nunc.Ullamcorper sagittis nunc..
              </p>
          </div>
          {/* Mobile View */}
          <div className="flex flex-col md:hidden w-[290px] h-[300px] bg-ss2-banner-ms
                bg-cover bg-center bg-no-repeat">
             <h3 className="text-[20px] font-bold text-silent2_button_text
             text-center">
             WORDS FROM THE GAME DIRECTOR
             </h3>
              <p className="flex justify-start items-center text-[14px] font-bold text-silent2_button_text
               text-center mx-4 leading-5">
              Sed lectus consequat convallis faucibus etiam sit mauris hendrerit cursus. Cursus mattis eget placerat et diam. Mauris tortor risus dolor porta aliquam id vestibulum. Magna ipsum erat est augue. Malesuada etiam sit amet sem orci cursus lorem tempus. Et et est et et vitae enim. Nulla dignissim tortor adipiscing cursus egestas nisl egestas. Rhoncus pellentesque enim amet massa pretium massa ut mauris sit. Sit quis volutpat enim dignissim erat eu risus porttitor.
Praesent sapien eget velit nulla commodo. Ullamcorper sagittis nunc Ullamcorper sagittis nunc.Ullamcorper sagittis nunc..
              </p>
          </div>
       </div>
       
    </div>
  );
};

export default Test;
