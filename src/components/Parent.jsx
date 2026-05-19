import React, { useState } from "react";
import Children from "./Children";

const Parent = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
  className="parent"
  style={{
    backgroundColor: "lightgreen",
    padding: "20px",
  }}
>
      <h1>Parent Component</h1>

      <p>{inputValue}</p>

      <Children
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default Parent;
