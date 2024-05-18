
const SS2PitchSection = () => {
    return (
        <div>
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
                bg-cover bg-center bg-no-repeat mt-6">
           <p className="flex justify-start items-center text-[14px] font-bold text-silent2_button_text
               text-center mx-6 leading-5">
                Silent Scream 2, a spine-chilling third-person adventure puzzle horror game developed by Studio 23, plunges players into the depths of terror within an abandoned asylum, where they must navigate through intricate puzzles, uncover dark mysteries, and confront malevolent entities to survive.
          </p>
       </div>

       </div>
        </div>
    );
};

export default SS2PitchSection;