import Link from "next/link";
import Image from "next/image";

const GameCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  logoSrc,
  link,
  availableOn,
  reverse,
}) => {
  return (
    <div
      className={`h-[290px] md:h-[425px] flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className="md:w-3/5 2xl:w-7/12 w-full h-[410px] md:h-full bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="h-full flex flex-col justify-center items-center pt-8 md:pt-0">
          {logoSrc && (
            <Image
              src={logoSrc}
              width={1439}
              height={837}
              alt={`${title} logo`}
              className="w-[200px] md:w-[400px] h-[100px] md:h-[200px]"
            />
          )}
          <div className="h-full flex flex-col mx-3 pb-3 justify-end gap-2 md:hidden">
            <h1 className="text-[12px] font-bold">{title}</h1>
            <h6 className="text-[10px] font-medium">{subtitle}</h6>
            <Link href={link}>
              <p className="flex justify-center items-center w-[250px] h-[50px] text-[16px] font-bold md:font-black bg-studio_blue text-black rounded-2xl hover:bg-white hover:cursor-pointer">
                More Details
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-2/5 2xl:w-5/12 h-full hidden md:flex md:flex-col justify-start gap-3 pl-5 pr-5 pt-2">
        <h6 className="text-[10px] md:text-[16px] font-medium">{subtitle}</h6>
        <h1 className="text-[12px] md:text-[52px] font-bold">{title}</h1>
        <p className="text-[16px] font-medium pb-5">{description}</p>
        {availableOn && (
          <div className="flex flex-row gap-3 pb-5">
            <p className="text-[16px] font-bold">Available on</p>
            <div className="flex gap-2">
              {availableOn.map((icon, index) => (
                <div
                  key={index}
                  className="md:w-[25px] md:h-[25px] bg-white flex items-center rounded-full justify-center"
                >
                  <Image
                    src={icon.src}
                    width={30}
                    height={30}
                    alt={icon.alt}
                    className="md:w-[15px] md:h-[15px]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <Link href={link}>
          <p className="flex justify-center items-center h-[25px] md:h-[50px] text-[8px] md:text-[16px] font-bold md:font-black bg-studio_blue text-black rounded-lg md:rounded-xl hover:bg-white hover:cursor-pointer">
            More Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
