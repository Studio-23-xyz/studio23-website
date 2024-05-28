import Image from "next/image";

const SS2GameSSModal = ({ isVisible, onClose, screenshot }) => {
  if (!isVisible || !screenshot) return null;

  return (
    <div
      className="fixed inset-0 bg-ss2-ss-full-bg bg-no-repeat bg-black bg-opacity-25 backdrop-blur-sm 
      flex justify-center items-center bg-center bg-contain z-30"
      onClick={() => onClose()}
    >
      <div className="flex items-center justify-center">
        <Image
          src={screenshot.src}
          width={1771}
          height={985}
          alt={screenshot.alt}
          className="w-[70%] md:w-[70%] md:h-[70%] 2xl:w-[75%] 2xl:h-[75%] object-center pb-12"
        />
      </div>
    </div>
  );
};

export default SS2GameSSModal;
