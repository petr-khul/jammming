import React, { useState, useEffect } from "react";

export default function SearchResults ({ searchQuery }){
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        if (searchQuery.trim()==="") {
            setFilteredSongs([]);
            return;
        }

        async function fetchSongs(){
            setIsLoading(true);
            try {
                const response = await fetch('./songs.json');
                const data = await response.json();                           //converts the response to js object
                const songsData = data.songs;

                        // Filter songs based on searchQuery
                const filtered = songsData.filter(song =>
                    song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    song.album.toLowerCase().includes(searchQuery.toLowerCase())
                );

                setFilteredSongs(filtered);
            } catch (error) {
                console.error('Error fetching songs:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSongs();
        //console.log(songs)
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