import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const listOfBooks = [
  {
    id: 1,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    id: 2,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    id: 3,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
  {
    id: 4,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    id: 5,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    id: 6,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
  {
    id: 7,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    id: 8,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    id: 9,
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
];

// CSS

function BookList() {
  return (
    <section className="bookList">
      {listOfBooks.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ imgLink, name, writer, rating, prise }) => {
  // attribute, eventHandler
  // onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Yess");
  };

  const showAuthor = (e, author) => {
    console.log(e);
    console.log(e.target);
    console.log(author);
  };

  return (
    <div className="book">
      <img
        src={imgLink}
        alt="bookCover"
        onMouseOver={() => {
          console.log(name);
        }}
      />
      <h4>{name}</h4>
      <p style={{ color: "#617d98", marginLeft: 5 }}>{writer}</p>
      <div>{rating}</div>
      <h4>
        <b style={{ color: "red" }}>${prise}</b>
      </h4>
      <button onClick={clickHandler}>Read more...</button>
      <button onClick={(e) => showAuthor(e, writer)}>About Author</button>
    </div>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
