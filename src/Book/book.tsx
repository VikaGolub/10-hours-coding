import React from "react";
import { BookType } from "./books";

export const Book = ({
  imgLink,
  name,
  writer,
  rating,
  prise,
}: BookType): JSX.Element => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
    alert("Yess");
  };

  const showAuthor = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    author: string
  ) => {
    console.log(e.target);
    console.log(author);
  };

  return (
    <div className="book">
      <img src={imgLink} alt="bookCover" />
      <h4>{name}</h4>
      <p style={{ color: "#617d98", marginLeft: 5 }}>{writer}</p>
      <div>{rating}</div>
      <h4>
        <b style={{ color: "red" }}>${prise}</b>
      </h4>
      <button className="btn" onClick={clickHandler}>
        Read more...
      </button>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          showAuthor(e, writer)
        }
      >
        About Author
      </button>
    </div>
  );
};
