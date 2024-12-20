import React, { useState, useEffect } from "react";
import Spotify from "../../services/SpotifyAuth";
import TrackList from "../Tracklist/Tracklist";
import "./SearchResults.css";

export default function SearchResults({ searchQuery, onAddToPlaylist }) {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch songs when searchQuery changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSongs([]); // Reset results if query is empty
      return;
    }

    const fetchSongs = async () => {
      setIsLoading(true);
      try {
        const songsData = await Spotify.search(searchQuery);
        setSongs(songsData);
      } catch (error) {
        console.error("Error fetching songs:", error);
        alert("There was an error fetching songs. Please try again later."); // User feedback
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery.trim()) {
      fetchSongs();
    }
  }, [searchQuery]); // Run the effect whenever searchQuery changes

  return (
    <div className="search-results">
      <h3>Results</h3>
      {isLoading && <p>Loading...</p>}
      {songs.length > 0 ? (
        <TrackList tracks={songs} onAddToPlaylist={onAddToPlaylist} />
      ) : (
        searchQuery && <p>No songs found.</p>
      )}
    </div>
  );
}
