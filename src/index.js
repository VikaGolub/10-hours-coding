import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const listOfBooks = [
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL200_SR200,200_.jpg",
    name: "Reminders of Him: A Novel",
    writer: "Colleen Hoover",
    prise: 34.5,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/91-EIJiYneL._AC_UL200_SR200,200_.jpg",
    name: "Atomic Habits",
    writer: "James Clear",
    prise: 123.5,
  },
  {
    imgLink:
      "https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    name: "It Ends with Us: A Novel",
    writer: "Colleen Hoover",
    prise: 20.4,
  },
  {
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
      {listOfBooks.map((item) => {
        return (
          <Book
            imgLink={item.imgLink}
            name={item.name}
            writer={item.writer}
            prise={item.prise}
            key={item.name}
          />
        );
      })}
      <Book
        name="Loren"
        writer="Ipsum"
        prise={0.0}
        imgLink="https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg"
      >
        <p>Hello to everyone</p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  const { imgLink, name, writer, rating, prise, children } = props;

  return (
    <div className="book">
      <img src={imgLink} alt="bookCover" />
      <h4>{name}</h4>
      <p style={{ color: "#617d98", marginLeft: 5 }}>{writer}</p>
      <div>{rating}</div>
      <h4>
        <b style={{ color: "red" }}>${prise}</b>
      </h4>
      {children}
    </div>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
