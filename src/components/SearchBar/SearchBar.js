import React from "react";
import "./SearchBar.css";

export default function SearchBar({ searchQuery, onSearchChange, onSearchButtonClick }) {
  const handleChange = (event) => {
    const query = event.target.value;
    onSearchChange(query); // Update the parent state
  };

  const handleSearch = (event) => {
    try {
      event.preventDefault(); // Prevent form submission default behavior
      onSearchButtonClick(); // Execute the search action
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="searchBarInput"
        value={searchQuery} // Use the parent-provided value
        onChange={handleChange}
        placeholder="Search for a song..."
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
}
