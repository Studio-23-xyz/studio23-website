import Image from "next/image";
import bdmap from "/public/assets/contact-page/bdmap.png";

const ContactAddressSection = () => {
  return (
    <div className="w-full h-auto mx-auto mt-14 mb-14">
      <div className="flex justify-center mb-6">
        <h1 className="text-[30px] md:text-[32px] font-bold text-center">Our Location</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="bg-white w-full h-[130px] rounded-2xl flex flex-col gap-3 justify-center">
          <h1 className="text-[22px] md:text-[30px] font-bold text-center text-black">
           HQ: Brain Station 23 PLC
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center text-black">
            8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212,
            Bangladesh
          </p>
          </div>
          <div className="bg-white w-full h-[130px] rounded-2xl flex flex-col gap-3 justify-center">
          <h1 className="text-[22px] md:text-[30px] font-bold text-center text-black">
            Studio 23
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center text-black">
            3rd Floor, Mirpur Cultural Center, Road: 9, Avenue: 2, Mirpur DOHS,
            Dhaka 1216, Bangladesh
          </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:mt-0 mt-6">
          <Image
              src={bdmap}
              width={607}
              height={841}
              alt="BD MAP"
              className="w-[60%] md:w-[30%] h-full object-cover"
          />
        </div>
      </div>
   {/* 
      <div className="w-full h-auto mx-auto mt-5 mb-14 flex flex-col md:flex-row justify-center gap-5">
        <div className="w-full md:w-1/2 flex flex-col gap-5 px-10 md:px-20">
          <h1 className="text-[22px] md:text-[30px] font-bold text-center">
           HQ: Brain Station 23 PLC
          </h1>
          <p className="text-[14px] md:text-[16px] text-center">
            8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212,
            Bangladesh
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5 px-10 md:px-20">
          <h1 className="text-[22px] md:text-[30px] font-bold text-center">
            Studio 23
          </h1>
          <p className="text-[14px] md:text-[16px] text-center">
            3rd Floor, Mirpur Cultural Center, Road: 9, Avenue: 2, Mirpur DOHS,
            Dhaka 1216, Bangladesh
          </p>
        </div>
      </div>
      */}
    </div>

  );
};

export default ContactAddressSection;
