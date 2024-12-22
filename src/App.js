import React, { useState, useCallback } from "react";
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from './components/Playlist/Playlist';
import Spotify from "./services/SpotifyAuth";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks((prevTracks) => 
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
    }, [] );

    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);

    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    }, [playlistName, playlistTracks]);

  return (
    <div className="app">
      <div className="header">
        <h1>jaMMMing</h1>
      </div>
      <div className="searchBar">
        <SearchBar onSearch={search}/>
      </div>
      <div className="app-playlist">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}  
        />
      </div>

    </div>
  );
}

