import React, { useEffect, useState } from "react";

const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }

    setColor(hexColor);
  };

  const generateRgbColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") generateHexColor();
    else generateRgbColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="color">
        <button onClick={() => setTypeOfColor("hex")}>Create hex color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create rgb color</button>
        <button
          onClick={typeOfColor === "hex" ? generateHexColor : generateRgbColor}
        >
          Generate random color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HexColor" : "RgbColor"}</h3>
        <h4>{color}</h4>
      </div>
    </div>
  );
};

export default Color;