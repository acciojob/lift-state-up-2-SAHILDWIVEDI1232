import React from "react";

function Child({ inputValue, setInputValue }) {
  return (
   <div
  className="child"
  style={{
    backgroundColor: "brown",
    padding: "20px",
  }}
>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Child;
