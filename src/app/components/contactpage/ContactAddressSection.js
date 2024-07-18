const ContactAddressSection = () => {
  return (
    <div className="w-full h-auto mx-auto mt-14 mb-14">
      <div className="flex justify-center">
        <h1 className="text-[22px] md:text-[30px] font-bold text-center">Our Location</h1>
      </div>
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
    </div>

  );
};

export default ContactAddressSection;
