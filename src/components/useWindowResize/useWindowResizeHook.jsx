import React, { useEffect, useLayoutEffect, useState } from "react";

function useWindowResizeHook() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default useWindowResizeHook;
