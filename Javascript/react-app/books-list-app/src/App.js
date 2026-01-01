import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");

    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    await axios.delete("http://localhost:3001/books/" + id);

    //console.log(res);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    console.log(res);
    const updatedBooks = [...books, res.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put("http://localhost:3001/books/" + id, {
      title: newTitle,
    });

    console.log(res);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
