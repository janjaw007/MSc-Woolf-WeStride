import { useContext, useState } from "react";
import BooksContext from "../context/books";
function BookCreate() {
  const { createBook } = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
