import React from "react";
import ReactDom from "react-dom";
import { Book } from "./Book/book.tsx";
import { listOfBooks } from "./Book/books.ts";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      {listOfBooks.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
