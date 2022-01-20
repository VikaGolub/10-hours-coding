import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("use effect");
    if (value > 0) {
      document.title = `Message(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello 2nd useEffect");
  }, []);

  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
