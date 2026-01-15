import { useState } from "react";
import type { Place } from "../api/Place";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await search(term);

    setPlaces(result);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          id="tern"
        />
      </form>
    </div>
  );
}

export default LocationSearch;
