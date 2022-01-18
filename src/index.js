import React from "react";
import ReactDom from "react-dom";

// nested components
//  React tools

function Greeting() {
  const obj = { name: "Vika", age: 26 };
  const arr = [1, 2, "a"];

  return (
    <div>
      <Person name="John" surname="Smith" />
      <Message
        msg="Hello, I have issues with Internet"
        title="Problems with Internet"
        isSended={true}
      />
    </div>
  );
}

const Person = (props) => {
  // const props = {
  //   name: 'John',
  //   surname: 'Smith',
  // };

  return (
    <h3>
      {props.name} {props.surname}
    </h3>
  );
};

const Message = ({ msg, title, isSended }) => {
  return (
    <>
      {isSended ? alert("Message was sent") : alert("Something went wrong")}
      <p>New Message</p>
      <h3>{title}</h3>
      <p>{msg}</p>
    </>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
