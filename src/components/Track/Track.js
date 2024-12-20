import React from "react";
import "./Track.css";

export default function Track({ track, onAddToPlaylist  }) {
  
  const handleClick = () => {
    if (typeof onAddToPlaylist === "function") {
      onAddToPlaylist(track);
    } else {
      console.error("onAddToPlaylist is not a function");
    }
  };
  
  return (
    <div className="track-record">
      <div className="track">
        <ul>
          <li><strong>Name:</strong> {track.name}</li>
          <li><strong>Artist:</strong> {track.artist}</li>
          <li><strong>Album:</strong> {track.album}</li>
        </ul>
      </div>
      <div className="addButton">
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}