import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function SwitchTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleSwitchTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  // console.log(theme);
  return (
    <div
      className={`w-screen h-screen flex justify-center flex-col font-bold text-xl text-center ${
        theme === "light"
          ? "bg-slate-400 text-slate-900"
          : "bg-slate-900 text-slate-400"
      } transition-all`}
    >
      <section className="flex justify-center items-start flex-col ml-40 mr-40 gap-8">
        <p className="font-light text-4xl">Hey Mom!</p>
        <button
          className={`${
            theme === "light"
              ? "text-slate-900 bg-slate-400 border-slate-900"
              : "bg-slate-900 text-slate-400 border-slate-400"
          } transition-all`}
          onClick={() => handleSwitchTheme()}
        >
          Switch Theme
        </button>
      </section>
    </div>
  );
}

export default SwitchTheme;
