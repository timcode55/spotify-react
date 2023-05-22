import React, { useState } from "react";
import { fetchSearch } from "../actions/albumsAction";
import { useDispatch } from "react-redux";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const updateArtist = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchArtist();
      dispatch(fetchSearch(query));
    }
  };

  const searchArtist = (e) => {
    dispatch(fetchSearch(query));
    setQuery("");
  };

  return (
    <div className="search-container">
      <input
        type="search"
        className="searchField"
        value={query}
        onChange={updateArtist}
        onKeyPress={handleKeyPress}
        placeholder="Search for an Artist"
      />
      <input
        type="submit"
        className="submit"
        value="Search"
        onClick={searchArtist}
      />
    </div>
  );
};

export default Search;
