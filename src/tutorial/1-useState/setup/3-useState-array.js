import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeUser = (personId) => {
    let updatedList = people.filter((person) => {
      return person.id !== personId;
    });

    console.log(updatedList, "updatedList");
    setPeople(updatedList);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4 className="item">
              {name}
              <button
                onClick={() => {
                  removeUser(id);
                }}
              >
                X
              </button>
            </h4>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Remove all
      </button>
    </>
  );
};

export default UseStateArray;
