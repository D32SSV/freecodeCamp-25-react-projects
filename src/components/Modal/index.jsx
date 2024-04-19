import React, { useState } from "react";
import Modal from "./Modal";

function CustomModal() {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal((prev) => !prev);
  }
  function handleClose() {
    setModal(false);
  }
  return (
    <section className="flex justify-center items-center flex-col text-center h-screen">
      <button
        onClick={() => handleClick()}
        className="bg-blue-500 hover:bg-blue-800"
      >
        Open Modal
      </button>
      {modal && (
        <Modal
          body={"This is a good Modal"}
          header={"Jai Jai Shri Chandika"}
          footer={"Click anywhere to close"}
          onClose={handleClose}
        />
      )}
    </section>
  );
}

export default CustomModal;
