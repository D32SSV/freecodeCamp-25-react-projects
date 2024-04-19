import React, { useState } from "react";

function Tabs({ tabsContent }) {
  const [tabIndex, setTabIndex] = useState(0);

  function handleClick(currIndex) {
    setTabIndex(currIndex);
    // onTabChange(currIndex);
  }
  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {tabsContent.map((item, id) => (
          <div
            className={`infline-flex text-lg font-bold text-center px-[10px] py-[15px] cursor-pointer text-white transition-all ${
              tabIndex === id
                ? "bg-yellow-500 border-8 border-indigo-700"
                : " border-8 border-yellow-500 bg-lime-400"
            }`}
            onClick={() => handleClick(id)}
            key={id}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="text-center px-[30px] py-[10px] h-[300px] overflow-auto bg-lime-100 text-orange-500 font-bold text-4xl">
        {tabsContent[tabIndex] && tabsContent[tabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
