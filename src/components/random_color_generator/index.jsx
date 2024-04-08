import React from "react";

function RandomColorGenerator() {
  const [colorType, setColorType] = React.useState("hex");
  const [bgColor, setBGColor] = React.useState("#00cc00");

  let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function randomNum(len) {
    if (len === 1) return Math.random().toFixed(1);
    return Math.floor(Math.random() * len);
  }

  function hexColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexArr[randomNum(16)];
    }
    setColorType("hex");
    setBGColor(color);
  }

  function rgbColor() {
    let r = randomNum(256);
    let g = randomNum(256);
    let b = randomNum(256);
    setColorType("rgb");
    setBGColor(`rgb(${r},${g},${b})`);
  }
  function rgbaColor() {
    let r = randomNum(256);
    let g = randomNum(256);
    let b = randomNum(256);
    let a = randomNum(1);
    setColorType("rgba");
    setBGColor(`rgba(${r},${g},${b}, ${a})`);
  }

  return (
    <div
      style={{ background: bgColor }}
      className={`text-center text-lg w-screen h-screen`}
    >
      {/* RandomColorGenerator */}
      <button className="bg-slate-600 m-4" onClick={hexColor}>
        Random HEX COLOR
      </button>
      <button className="bg-slate-600 m-4" onClick={rgbColor}>
        RANDOM RGB COLOR{" "}
      </button>
      <button className="bg-slate-600 m-4" onClick={rgbaColor}>
        RANDOM RGBA COLOR{" "}
      </button>
      <p className="text-center text-3xl mt-48">
        {colorType == "hex" ? `HEX ${bgColor}` : bgColor}
      </p>
    </div>
  );
}
export default RandomColorGenerator;
