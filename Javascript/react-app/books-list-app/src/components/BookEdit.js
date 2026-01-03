import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className="input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
