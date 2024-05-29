import Titlesherosection from "../components/titlespage/Titlesherosection";

const page = () => {
  return (
    <div>
      <div className="min-h-screen">
        {/* Hero Banner Section */}
        <Titlesherosection/>

        {/* Games List Section */}

        <div className="w-full h-auto pt-7 md:pt-14 flex flex-col gap-4 md:gap-10 px-12 bg-slate-400">
          <div className="h-[290px] md:h-[425px] flex">
            <div className="md:w-3/5 w-full h-full bg-ss1-banner-1 bg-cover bg-center">
             
            </div>
            <div className="md:w-2/5 hidden h-full md:flex md:flex-col justify-start gap-3 pl-5">
              <h6 className="text-[10px] md:text-[16px] font-medium">Action, Horror-Adventure</h6>
              <h1 className="text-[12px] md:text-[52px] font-bold">Silent Scream</h1>
              <p className="text-[16px] font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="flex flex-row gap-3">
                <p className="text-[16px] font-bold">Available on</p>
                <div>icons</div>
              </div>
              <button>More Details</button>
            </div>
          </div>
          <div className="flex">
            <div>Game 2 Image</div>
            <div>Game 2 Content</div>
          </div>
          <div className="flex">
            <div>Game 3 Image</div>
            <div>Game 3 Content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
