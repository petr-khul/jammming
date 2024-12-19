import React, { useState, useEffect } from "react";
import Spotify from "../../services/SpotifyAuth";

export default function SearchResults ({ searchQuery }){
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if (searchQuery.trim()==="") {
            setFilteredSongs([]);
            return;
        }

        async function fetchSongs() {
            setIsLoading(true);
            try {
              // Use the Spotify API to search for tracks
              const songsData = await Spotify.search(searchQuery);
      
              // Filter songs based on search query if needed
              setFilteredSongs(songsData);
            } catch (error) {
              console.error('Error fetching songs from Spotify:', error);
            } finally {
              setIsLoading(false);
            }
          }
      
          fetchSongs();
        }, [searchQuery]);
    
      return (
        <div>
        {isLoading && <p>Loading...</p>}
        {searchQuery.trim() === "" ? (
          <p>Please enter a search term.</p>  // Show message when searchQuery is empty
        ) : filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div key={song.id}>
              <h3>{song.name}</h3>
              <p>{song.artist}</p>
              <p>{song.album}</p>
            </div>
          ))
        ) : (
          <p>No songs found.</p>  // Show message when no results are found
        )}
      </div>
      );

}