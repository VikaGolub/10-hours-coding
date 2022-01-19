import React, { useState } from "react";

const UseStateBasics = () => {
  console.log(useState()); // [undefined, function]
  console.log(useState("hello")); // ['hello', function]

  const [text, setText] = useState("title");

  const handleClick = () => {
    if (text === "title") {
      setText("Something new");
    } else {
      setText("title");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
