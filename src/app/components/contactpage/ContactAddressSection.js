
const ContactAddressSection = () => {
  return (
    <div className="w-[90%] 2xl:w-[70%] h-auto mx-auto mt-14 flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-2/3 flex flex-col gap-3">
        <h1 className="text-[16px] md:text-[30px] text-center">Studio 23</h1>
        <p className="text-[14px] md:text-[16px] text-center">3rd Floor, Mirpur Cultural Center, Road: 9, Avenue: 2, Mirpur DOHS, Dhaka 1216, Bangladesh</p>
        <h1 className="text-[16px] md:text-[30px] text-center">HQ: Brain Station 23 PLC</h1>
        <p className="text-[14px] md:text-[16px] text-center">8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212, Bangladesh</p>
        <h1 className="text-[16px] md:text-[30px] text-center">Email</h1>
        <p className="text-[14px] md:text-[16px] text-center">contact@studio-23.xyz</p>
      </div>
      <div className="w-full md:w-1/3">BD MAP</div>
    </div>
  );
};

export default ContactAddressSection;
