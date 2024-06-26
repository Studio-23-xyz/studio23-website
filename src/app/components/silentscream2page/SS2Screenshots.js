import Image from "next/image";
import { Fragment, useState } from "react";
import Screenshot1 from "/public/assets/ss2-game-page/ss2-screenshots/ss2-ss-01.png";
import Screenshot2 from "/public/assets/ss2-game-page/ss2-screenshots/ss2-ss-02.png";
import Screenshot3 from "/public/assets/ss2-game-page/ss2-screenshots/ss2-ss-03.png";
import Screenshot4 from "/public/assets/ss2-game-page/ss2-screenshots/ss2-ss-04.png";
import Screenshot5 from "/public/assets/ss2-game-page/ss2-screenshots/ss2-ss-05.png";
import Screenshot6 from "/public/assets/ss2-game-page/ss2-screenshots/ss2-ss-06.png";
import SS2GameSSModal from "./SS2GameSSModal";

const screenshots = [
  { src: Screenshot1, alt: "Silent Scream 2 Screenshot 1" },
  { src: Screenshot2, alt: "Silent Scream 2 Screenshot 2" },
  { src: Screenshot3, alt: "Silent Scream 2 Screenshot 3" },
  { src: Screenshot4, alt: "Silent Scream 2 Screenshot 4" },
  { src: Screenshot5, alt: "Silent Scream 2 Screenshot 5" },
  { src: Screenshot6, alt: "Silent Scream 2 Screenshot 6" },
];

const SS2Screenshots = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(null);

  const openModal = (screenshot) => {
    setCurrentScreenshot(screenshot);
    setShowModal(true);
  };

  const backgroundClasses = [
    "bg-ss2-ss-small-bg1",
    "bg-ss2-ss-small-bg2",
    "bg-ss2-ss-small-bg3",
    "bg-ss2-ss-small-bg4",
    "bg-ss2-ss-small-bg5",
    "bg-ss2-ss-small-bg6",
  ];

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
      <Fragment>
        <div className="w-full h-auto flex justify-center items-center mt-6 md:mt-12 mb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-10 justify-center">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`${
                  backgroundClasses[index % backgroundClasses.length]
                } w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16 bg-cover 
                  transform transition-transform duration-300 hover:scale-105 hover:brightness-110`}
                onClick={() => openModal(screenshot)}
              >
                <Image
                  src={screenshot.src}
                  width={1771}
                  height={985}
                  alt={screenshot.alt}
                  className="h-full object-cover"
                />
              </div>
            ))}
          </div>
          <SS2GameSSModal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            screenshot={currentScreenshot}
          />
        </div>
      </Fragment>
    </div>
  );
};

export default SS2Screenshots;
