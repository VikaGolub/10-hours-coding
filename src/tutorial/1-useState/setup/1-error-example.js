import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const clickHandler = () => {
    title = "hello all";
    console.log(title); // 'hello all'
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        Click
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
