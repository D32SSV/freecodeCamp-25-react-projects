import React, { useState } from "react";
import QRCode from "react-qr-code";

function QR() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <section className="w-screen flex items-center justify-center flex-col gap-4">
      <h3 className="mt-4 font-bold text-blue-500">LIVE QR CODE GENERATOR</h3>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "20%", width: "100%" }}
        value={value}
      />
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Enter you favorite text here!"
        className="p-2 rounded-lg bg-blue-400 placeholder:text-blue-800 text-blue-800"
        value={value}
      />
    </section>
  );
}

export default QR;
