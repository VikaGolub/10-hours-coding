import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX
// camelCase for html attribute

function Greeting() {
  return (
    <React.Fragment>
      <>
        <div>
          <p>Hello World</p>
        </div>
        <div>Section2</div>
      </>
    </React.Fragment>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("p", {}, "Hello World")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
