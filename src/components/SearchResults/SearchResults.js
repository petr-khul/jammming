import React, { useState, useEffect } from "react";
import Spotify from "../../services/SpotifyAuth";
import TrackList from "../Tracklist/Tracklist";

import "./SearchResults.css";

export default function SearchResults ({ searchQuery }){
    const [songs, setSongs] = useState([]);
    //const [filteredSongs, setFilteredSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if (searchQuery.trim()==="") {
            setSongs([]);
            return;
        }

        async function fetchSongs() {
            setIsLoading(true);
            try {
              // Use the Spotify API to search for tracks
              const songsData = await Spotify.search(searchQuery);
      
              // Filter songs based on search query if needed
              setSongs(songsData);
            } catch (error) {
              console.error('Error fetching songs from Spotify:', error);
            } finally {
              setIsLoading(false);
            }
          }
      
          fetchSongs();
        }, [searchQuery]);
    
        return (
            <div className="search-results">
              {isLoading && <p>Loading...</p>}
              {searchQuery.trim() === "" ? (
                <p></p>
              ) : songs.length > 0 ? (
                <TrackList tracks={songs} />
              ) : (
                <p>No songs found.</p>
              )}
            </div>
          );
        }