import { useState } from "react";
import data from "./data";

function Accordion() {
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [multiSelection, setMultipleSelection] = useState(false); //for button's state
  const [store, setStore] = useState([]); //for storing selected accordions

  function handleClick(currentID) {
    setCurrentAccordion(currentID === currentAccordion ? null : currentID);
  }

  function handleMultiSelection(currentID) {
    let arr = [...store];
    let indexOfCurrentAccordion = arr.indexOf(currentID);

    if (indexOfCurrentAccordion === -1) {
      arr.push(currentID);
    } else {
      arr.splice(indexOfCurrentAccordion, 1);
    }
    setStore(arr);
  }

  return (
    <>
      <p className="text-center text-3xl">This is accordion</p>
      <div className=" mt-12 flex justify-center items-center flex-col w-screen ">
        <button
          className={`text-lime-900 m-4 ${
            multiSelection ? `bg-red-500` : `bg-blue-300`
          } }`}
          onClick={() => setMultipleSelection(!multiSelection)}
        >
          Enable Multiple Selection
        </button>
        {data.length > 0 && data ? (
          data.map((d) => {
            return (
              <div className="text-black">
                <section
                  onClick={
                    multiSelection
                      ? () => handleMultiSelection(d.id)
                      : () => handleClick(d.id)
                  }
                  key={d.id}
                  className="flex item-center justify-center cursor-pointer bg-lime-400 mb-8 p-6"
                >
                  <p key={d.id} className="text-xl text-center">
                    {d.question}
                  </p>
                  <span key={d.id}>+</span>
                  {/* answer display Logic */}
                  {currentAccordion === d.id || store.indexOf(d.id) !== -1 ? (
                    <p className="text-sm text-center text-black bg-lime-400">
                      {d.answer}
                    </p>
                  ) : null}
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
