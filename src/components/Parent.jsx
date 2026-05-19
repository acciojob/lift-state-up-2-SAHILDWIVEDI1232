import React, { useState } from "react";
import Child from "./Child.jsx";

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

      <Child
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default Parent;
