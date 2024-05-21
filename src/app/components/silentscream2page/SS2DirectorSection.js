const SS2DirectorSection = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-6">
        {/* Laptop View */}
        <div
          className="md:flex flex-col gap-3 hidden md:w-[1320px] md:h-[432px] bg-ss2-banner-lm bg-full bg-no-repeat 
          bg-center pt-14"
        >
          <h3
            className="text-[40px] font-bold text-silent2_button_text flex justify-center items-center
             text-center"
          >
            WORDS FROM THE GAME DIRECTOR
          </h3>
          <p
            className="flex justify-center items-center text-[20px] font-bold text-silent2_button_text
              text-center mx-14 leading-10"
          >
            Sed lectus consequat convallis faucibus etiam sit mauris hendrerit
            cursus. Cursus mattis eget placerat et diam. Mauris tortor risus
            dolor porta aliquam id vestibulum. Magna ipsum erat est augue.
            Malesuada etiam sit amet sem orci cursus lorem tempus. Et et est et
            et vitae enim. Nulla dignissim tortor adipiscing cursus egestas nisl
            egestas. Rhoncus pellentesque enim amet massa pretium massa ut
            mauris sit. Sit quis volutpat enim dignissim erat eu risus
            porttitor. Praesent sapien eget velit nulla commodo. Ullamcorper
            sagittis nunc Ullamcorper sagittis nunc.Ullamcorper sagittis nunc..
          </p>
        </div>

        {/* Mobile View */}
        <div
          className="flex flex-col gap-2 md:hidden w-[290px] h-[617px] bg-ss2-banner-mm
                bg-cover bg-center bg-no-repeat pt-12"
        >
          <h3
            className="text-[20px] font-bold text-silent2_button_text mx-7 mt-1
             text-center leading-6"
          >
            WORDS FROM THE GAME DIRECTOR
          </h3>
          <p
            className="flex justify-start items-center text-[14px] font-bold text-silent2_button_text
               text-center mx-10 leading-5"
          >
            Sed lectus consequat convallis faucibus etiam sit mauris hendrerit
            cursus. Cursus mattis eget placerat et diam. Mauris tortor risus
            dolor porta aliquam id vestibulum. Magna ipsum erat est augue.
            Malesuada etiam sit amet sem orci cursus lorem tempus. Et et est et
            et vitae enim. Nulla dignissim tortor adipiscing cursus egestas nisl
            egestas. Rhoncus pellentesque enim amet massa pretium massa ut
            mauris sit. Sit quis volutpat enim dignissim erat eu risus
            porttitor. Praesent sapien eget velit nulla commodo. Ullamcorper
            sagittis nunc Ullamcorper sagittis nunc.Ullamcorper sagittis nunc..
          </p>
        </div>
      </div>
    </div>
  );
};

export default SS2DirectorSection;
