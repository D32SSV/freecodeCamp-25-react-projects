import React from "react";
import useWindowResizeHook from "./useWindowResizeHook";

function WindowResizeTestItem() {
  const { width, height } = useWindowResizeHook();
  return (
    <div className="text-center text-xl">
      Window Resize Test Item:
      <p>width:{width}</p>
      <p>height:{height}</p>
    </div>
  );
}

export default WindowResizeTestItem;
