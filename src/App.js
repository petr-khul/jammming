import React, { useState } from "react";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from './components/Playlist/Playlist';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [triggeredQuery, setTriggeredQuery] = useState('');
  const [playlist, setPlaylist] = useState([]);

  window.onbeforeunload = function () {
    console.warn("Page is reloading. Check for unhandled errors or form submissions.");
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query); // Update the search input state
  };

  const handleSearchButtonClick = () => {
    if (triggeredQuery === searchQuery) return;  // Avoid resetting if already triggered
    setTriggeredQuery(searchQuery);  // Set the query only if it is different
  };

  const handleAddToPlaylist = (track) => {
    if (!playlist.find((item) => item.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const handleRemoveFromPlaylist = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  const handleSavePlaylist = () => {
    alert("Playlist saved successfully!");
    setPlaylist([]); // Clear the playlist after saving
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main>
        <div className="searchBar">
          <h2>What would you like to play?</h2>
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={handleSearchChange} 
            onSearchButtonClick={handleSearchButtonClick} 
          />

        </div>
        <div className="mainApp">
          <div className="searchResult">
            <SearchResults 
              searchQuery={triggeredQuery} 
              onAddToPlaylist={handleAddToPlaylist} 
            />
          </div>
          <div className="playlist">
            <Playlist
              playlist={playlist}
              onRemove={handleRemoveFromPlaylist}
              onSave={handleSavePlaylist}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

