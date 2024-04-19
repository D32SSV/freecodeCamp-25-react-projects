import React from "react";

function Modal({ body, footer, header, onClose }) {
  return (
    <div
      onClick={onClose}
      className="absolute animate-animateModal h-screen w-11/12 overflow-hidden bg-[beige] flex flex-col justify-center items-center"
    >
      <p className=" p-4 m-3  bg-blue-900 text-red-800 hover:text-blue-900 text-center font-bold text-4xl hover:bg-red-800">
        {header ? header : "Default Header"}
      </p>
      <p className=" p-4 m-3 bg-green-500 text-center hover:bg-green-700">
        {body ? body : "Default Body"}
      </p>
      <p className=" p-4 m-3 bg-red-500 text-center hover:bg-red-700">
        {footer ? footer : "Default Footer"}
      </p>
    </div>
  );
}

export default Modal;
