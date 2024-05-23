import React from "react";
import Image from "next/image";
import Studio23logoBlack from "../../../../public/assets/studio23-logo-black.png";

const SS2AboutSection = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-6">
        <div
          className="flex flex-col md:flex-row justify-center items-center w-[290px] md:w-[1320px] h-[617px] md:h-[432px]
           bg-ss2-banner-mm md:bg-ss2-banner-lm bg-no-repeat bg-center gap-10 md:gap-9"
        >
          <div className="md:w-2/5 flex justify-center items-center">
            <Image
              src={Studio23logoBlack}
              width={196}
              height={154}
              alt="Studio 23 Logo"
              className="w-[75px] md:w-[196px] h-[62px] md:h-[154px]"
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-4 md:w-3/5">
            <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_button_text text-center justify-center items-center">
              ABOUT STUDIO 23
            </h1>
            <p
              className="text-[14px] md:text-[20px] font-bold text-silent2_button_text text-center
           mx-11 md:mx-14 leading-5 md:leading-10 flex justify-center items-center"
            >
              Sed lectus consequat convallis faucibus etiam sit mauris hendrerit
              cursus. Cursus mattis eget placerat et diam. Mauris tortor risus
              dolor porta aliquam id vestibulum. Magna ipsum erat est augue.
              Malesuada etiam sit amet sem orci cursus lorem tempus. Et et est
              et et vitae enim. Nulla dignissim tortor adipiscing cursus egestas
              nisl egestas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS2AboutSection;
