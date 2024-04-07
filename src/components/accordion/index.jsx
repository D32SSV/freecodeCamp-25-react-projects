import { useState } from "react";
import data from "./data";

function Accordion() {
  const [currentAccordion, setCurrentAccordion] = useState(null);

  function handleClick(currentID) {
    setCurrentAccordion(currentID === currentAccordion ? null : currentID);
  }

  return (
    <>
      <p className="text-center text-3xl">This is accordion</p>
      <div className=" mt-12 flex justify-center items-center flex-col w-screen">
        {data.length > 0 && data ? (
          data.map((d) => {
            return (
              <div className="text-black">
                <section
                  onClick={() => handleClick(d.id)}
                  key={d.id}
                  className="flex item-center justify-center cursor-pointer bg-lime-400 mb-8 p-6"
                >
                  <p key={d.id} className="text-xl text-center">
                    {d.question}
                  </p>
                  <span key={d.id}>+</span>
                  {currentAccordion === d.id && (
                    <p className="text-sm text-center text-black bg-lime-400">
                      {d.answer}
                    </p>
                  )}
                </section>
              </div>
            );
          })
        ) : (
          <p>There is no accordion data.</p>
        )}
      </div>
    </>
  );
}

export default Accordion;
