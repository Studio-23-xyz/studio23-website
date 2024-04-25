import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absulate -z-10 w-full">
        <Image
          src="/assets/hero-homepage.jpg"
          width={1409}
          height={842}
          alt="hero"
          className="w-full md:h-screen bg-no-repeat"
        />
        <div className="flex flex-col justify-start w-[200px] md:w-[750px] absolute gap-2 md:gap-5 top-14 md:top-48 pl-6 md:pl-32">
          <Image
            src="/assets/silentscream_logo.png"
            width={574}
            height={276}
            alt="silent-scream-logo"
            className="w-[185px] h-[89px] md:w-[574px] md:h-[276px]"
          />
          <p className="text-[10px] md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="text-start w-[264px] h-[50px] bg-studio_blue font-bold text-[16px] text-black flex justify-center items-center gap-2 rounded-3xl">
            Check out on Steam
            <Image
              src="/assets/steam-icon.png"
              width={30}
              height={30}
              alt="silent-scream-logo"
              className="w-[30px] h-[30px]"
            />
          </button>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <h1>Some of our other titles</h1>
          </div>
          <div>Button</div>
        </div>
        <div>
          <div>High Noon</div>
          <div>
            <div>Westwood Manor</div>
            <div>Control Override</div>
          </div>
        </div>
      </div>
    </div>
  );
}
