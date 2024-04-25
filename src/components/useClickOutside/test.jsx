import React, { useRef, useState } from "react";
import useClickOutSideHook from "./useClickOutSideHook";

function ClickOutsideTestItem() {
  const [content, setContent] = useState(false);
  const ref = useRef();
  useClickOutSideHook(ref, () => setContent(false));
  return (
    <>
      {content ? (
        <section ref={ref} className="border-2 h-[50%] p-[10rem]">
          <h1>This is a random content</h1>
        </section>
      ) : (
        <button className="text-center" onClick={() => setContent(true)}>
          Show Content
        </button>
      )}
    </>
  );
}

export default ClickOutsideTestItem;
