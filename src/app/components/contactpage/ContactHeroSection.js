const ContactHeroSection = () => {
  return (
    <div>
      <div className="bg-contact-hero bg-no-repeat -z-10 w-full h-[469px] md:h-[680px] bg-cover bg-center md:px-[130px] px-4">
        <div className="w-full h-full flex flex-col justify-center md:pt-20">
          <h1 className="text-[32px] md:text-[72px] font-bold">Contact</h1>
          <h1 className="text-[32px] md:text-[72px] font-bold">US!</h1>
          <p className="text-[14px] md:text-[20px] font-medium pt-5">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to say hello, our team at Studio 23 is here to assist you.
            Connect with us through our various channels and let’s start a
            conversation. Your insights and inquiries help us improve and grow,
            so don’t hesitate to reach out. We look forward to connecting with
            you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
