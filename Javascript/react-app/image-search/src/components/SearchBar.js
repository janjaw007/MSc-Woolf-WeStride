import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  // const handleClick = () => {
  //   onSubmit();
  // };
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <div>{term.length > 6 && "term is too long"}</div>
        {/* <button onClick={() => setTerm("")}>Reset Term</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
