import React, { useState } from "react";

const UseStateObject = () => {
  const [user, setUser] = useState({
    name: "Mops",
    age: 3,
    message: "something special",
  });

  const changeName = () => {
    setUser({ ...user, name: "Monika" });
  };

  return (
    <>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h3>{user.message}</h3>
      <button className="btn" onClick={() => changeName()}>
        Change name
      </button>
    </>
  );
};

export default UseStateObject;
