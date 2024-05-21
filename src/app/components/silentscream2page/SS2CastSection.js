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
  {
    title: (
      <div className="flex justify-center items-start">
         <Image
            src="/assets/ss2-characters/John.png"
            width={433}
            height={577}
            alt="Alan"
            className="w-[120px] md:w-[150px] h-[120px] md:h-[150px]"
          />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
            src="/assets/ss2-characters/John.png"
            width={433}
            height={577}
            alt="Alan"
            className="w-[290px] md:w-[350px] h-[313px] md:h-[450px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:pr-10
         gap-3">
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">John, The Writer</h1>
          <p className="text-[14px] md:text-[16px] font-bold text-center">
            John, once a literary sensation, soared to fame with his debut novel
            but crumbled under the pressure of expectations. Struggling with
            writer's block, he turned to alcohol, which led to missed deadlines,
            breached contracts, and a shattered marriage.<br></br> <br></br>Now, he's
            determined to regain custody of his son and revive his career. A
            retreat at a mansion is his final attempt to find inspiration and
            rebuild his life.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: <div className="bg-slate-400">Tab 2 Content</div>,
  },
  {
    title: "Tab 3",
    content: <div className="bg-yellow-400">Tab 3 Content</div>,
  },
  { title: "Tab 4", content: <div className="bg-red-400">Tab 4 Content</div> },
  {
    title: "Tab 5",
    content: <div className="bg-green-300">Tab 5 Content</div>,
  },
  {
    title: "Tab 6",
    content: <div className="bg-yellow-600">Tab 6 Content</div>,
  },
  {
    title: "Tab 7",
    content: <div className=" bg-pink-400">Tab 7 Content</div>,
  },
  {
    title: "Tab 8",
    content: <div className=" bg-green-500">Tab 8 Content</div>,
  },
];
