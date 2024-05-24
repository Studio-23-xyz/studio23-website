import Image from "next/image";
import Screenshot1 from "../../../../public/assets/ss2-game-page/ss2-screenshots/SS2-SS-1.png";

const SS2Screenshots = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mt-2 mb-6">
        <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_red">
          SCREENSHOTS
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          className="w-[90%] md:w-[822px] aspect-video"
          src="https://www.youtube.com/embed/kGHyUYSXhUY"
          title="Silent Scream 2 Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Screenshots */}

      <div className="w-full h-auto flex justify-center items-center mt-6 md:mt-12 mb-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-10 justify-center">
          <div className="bg-ss2-ss-bg w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16">
            <Image
              src={Screenshot1}
              width={1771}
              height={985}
              alt="Silent Scream 2 Screenshot 1"
              className="h-full object-cover"
            />
          </div>
          <div className="bg-ss2-ss-bg w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16">
            <Image
              src={Screenshot1}
              width={1771}
              height={985}
              alt="Silent Scream 2 Screenshot 1"
              className="h-full object-cover"
            />
          </div>
          <div className="bg-ss2-ss-bg w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16">
            <Image
              src={Screenshot1}
              width={1771}
              height={985}
              alt="Silent Scream 2 Screenshot 1"
              className="h-full object-cover"
            />
          </div>
          <div className="bg-ss2-ss-bg w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16">
            <Image
              src={Screenshot1}
              width={1771}
              height={985}
              alt="Silent Scream 2 Screenshot 1"
              className="h-full object-cover"
            />
          </div>
          <div className="bg-ss2-ss-bg w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16">
            <Image
              src={Screenshot1}
              width={1771}
              height={985}
              alt="Silent Scream 2 Screenshot 1"
              className="h-full object-cover"
            />
          </div>
          <div className="bg-ss2-ss-bg w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16">
            <Image
              src={Screenshot1}
              width={1771}
              height={985}
              alt="Silent Scream 2 Screenshot 1"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS2Screenshots;
