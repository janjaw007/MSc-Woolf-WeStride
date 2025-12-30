import { useState } from "react";
function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);

    setTitle("");
  };
  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
