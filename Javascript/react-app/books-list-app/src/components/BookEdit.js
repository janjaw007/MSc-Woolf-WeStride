import { useState } from "react";

function BookEdit({ book, onEdit, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(book.id, title);
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
