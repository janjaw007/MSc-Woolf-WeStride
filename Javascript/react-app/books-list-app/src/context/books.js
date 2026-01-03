import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:3001/books");

    setBooks(res.data);
  };

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

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };

export default BooksContext;
