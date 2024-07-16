import Image from "next/image";
import React from "react";
import contactImage from "../../../../public/assets/contact-page/contact-image.png";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10">
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <Image
            src={contactImage}
            width={626}
            height={626}
            alt="Tanimul Haque Khan"
            className="w-[320px] md:w-[538px] h-[300px] md:h-[507px] shadow-xl rounded-xl"
          />
        </div>
        <div className="w-full md:w-3/5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
