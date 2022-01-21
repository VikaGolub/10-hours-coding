import React, { useState } from "react";
// short-circuit evaluation (operation with || and &&)
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("ds");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>firstValue: {firstValue}</h2>
      <h2>secondValue: {secondValue}</h2>
      {/* if text is true - return text, is text false return 2nd variant */}
      <h1>{text || "John"}</h1>
      {/* if text true - return 2nd variant, if text false, don\'t return anything */}
      {text && <h2>Monika</h2>}
      {/* if text is false - return 2nd variant if true - return nothing */}
      {!text && <h2>Richard</h2>}

      <div>
        <button
          className="btn"
          style={{ marginBottom: 10 }}
          onClick={() => setIsError(!isError)}
        >
          Toggle Error
        </button>

        {isError ? <h3>There's error</h3> : <h3>There's no error</h3>}
      </div>
    </>
  );
};

export default ShortCircuit;
