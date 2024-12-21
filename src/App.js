import React, { useState, useCallback } from "react";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from './components/Playlist/Playlist';
import Spotify from "./services/SpotifyAuth";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1>jaMMMing</h1>
      </div>
      <div className="searchBar">
        <SearchBar onSearch={search}/>
      </div>
      <div className="app-playlist">
        <SearchResults searchResults={searchResults}/>
      </div>
    </div>
  );
}

