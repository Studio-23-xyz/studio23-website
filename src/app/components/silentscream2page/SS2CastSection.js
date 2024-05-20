import Image from "next/image";
import SS2CastComponents from "./SS2CastComponents";

const SS2CastSection = () => {
  return (
    <div>
      {/*Heading */}
      <div className="w-full flex flex-col justify-center items-center mt-12 mb-6 gap-6">
        <Image
          src="/assets/ss2-icon1.png"
          width={64}
          height={100}
          alt="Silent Scream 2 Icon"
          className="w-[64px] h-[100px]"
        />
        <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_red">
          MEET THE CAST
        </h1>
      </div>

      <div>
        <SS2CastComponents items={items} />
      </div>
    </div>
  );
};

export default SS2CastSection;

const items = [
  { title: "Tab 1", content: <div className=" bg-red-200">Tab 1 Content</div> },
  {
    title: "Tab 2",
    content: <div className=" bg-slate-400">Tab 2 Content</div>,
  },
  {
    title: "Tab 3",
    content: <div className=" bg-yellow-400">Tab 3 Content</div>,
  },
  { title: "Tab 4", content: <div>Tab 4 Content</div> },
  { title: "Tab 5", content: <div>Tab 5 Content</div> },
  { title: "Tab 6", content: <div>Tab 6 Content</div> },
  { title: "Tab 7", content: <div>Tab 7 Content</div> },
  { title: "Tab 8", content: <div>Tab 8 Content</div> },
];
