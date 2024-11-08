// src/BookList.jsx
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((banana) => {
         return <Book key={banana.id} book={banana}/>;
        })}
      </section>
    </>
  );
}

export default BookList;