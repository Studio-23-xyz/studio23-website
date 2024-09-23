const CareersPageOpeningSection = () => {
  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex justify-center">
          <h1 className="text-[25px] md:text-[30px] font-black">
            Here are our openings!
          </h1>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[320px] md:min-w-[800px]">
            <tbody>
              <tr className="border-b-2 border-studio_blue flex flex-col md:flex-row md:table-row">
                <th className="text-[18px] md:text-[24px] font-bold py-5">
                  Game Developer Trainee
                </th>
                <th className="text-[14px] md:text-[16px] font-bold py-1 md:py-5">
                  On Site
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">
                  Dhaka, Bangladesh
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">
                  Game Development
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">
                  Full Time
                </th>
                <th className="py-2 md:py-5">
                  <a
                    href="https://form.jotform.com/242655786742065"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-black text-[14px] md:text-[16px] px-5 py-2 hover:bg-studio_blue transition duration-200 rounded-xl">
                      See Details
                    </button>
                  </a>
                </th>
              </tr>

              <tr className="border-b-2 border-studio_blue flex flex-col md:flex-row md:table-row">
                <th className="text-[18px] md:text-[24px] font-bold py-5">
                  3D Artist Trainee
                </th>
                <th className="text-[14px] md:text-[16px] font-bold py-1 md:py-5">
                  On Site
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">
                  Dhaka, Bangladesh
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">
                  Game Development
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">
                  Full Time
                </th>
                <th className="py-2 md:py-5">
                  <a
                    href="https://form.jotform.com/242655786742065"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-black text-[14px] md:text-[16px] px-5 py-2 hover:bg-studio_blue transition duration-200 rounded-xl">
                      See Details
                    </button>
                  </a>
                </th>
              </tr>

              <tr className="border-b-2 border-studio_blue flex flex-col md:flex-row md:table-row">
                <th className="text-[18px] md:text-[24px] font-bold py-5">
                  3D Animator Trainee
                </th>
                <th className="text-[14px] md:text-[16px] font-bold py-2 md:py-5">
                  On Site
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-2 md:py-5">
                  Dhaka, Bangladesh
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-2 md:py-5">
                  Game Development
                </th>
                <th className="text-[14px] md:text-[16px] font-thin py-2 md:py-5">
                  Full Time
                </th>
                <th className="py-2 md:py-5">
                  <a
                    href="https://form.jotform.com/242655786742065"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-black text-[14px] md:text-[16px] px-5 py-2 hover:bg-studio_blue transition duration-200 rounded-xl">
                      See Details
                    </button>
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CareersPageOpeningSection;
