import { useEffect, useRef, useState } from "react";

const SS2CastComponents = ({ items }) => {
  const firstBtnRef = useRef();
  const [selectedTab, setSelectedTab] = useState(0); // Initialize to the first tab

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className=" bg-slate-200 flex justify-center items-center py-12">
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        {/* Content Section */}
        <div>
          {items.map((item, index) => (
            <div
              key={index} // Add key prop to avoid warning
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>

        {/* Tab Section */}
        <div className=" bg-blue-300 p-1 rounded-xl flex flex-col md:flex-row justify-between items-center gap-x-2">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className=" outline-none w-full p-2 hover:bg-slate-500 rounded-xl
                         focus:ring-2 focus:bg-white focus:text-red-300"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SS2CastComponents;
