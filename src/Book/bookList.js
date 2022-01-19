import React from "react";
import { listOfBooks } from "./books.ts";
import { Book } from "./book.tsx";

function BookList() {
  return (
    <section className="bookList">
      {listOfBooks.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

export default BookList;
