import React from "react";
import Image from "next/image";

const SS2GameSSModal = ({ isVisible, onClose, screenshot }) => {
  if (!isVisible || !screenshot) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={() => onClose()}
    >
      <div className="bg-black w-[80%] h-[80%]">
        <Image
          src={screenshot.src}
          width={1771}
          height={985}
          alt={screenshot.alt}
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SS2GameSSModal;
