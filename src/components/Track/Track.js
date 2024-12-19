import React from "react";
//import "./Track.css";

export default function Track({ track }) {
  return (
    <div className="track">
      <ul>
        <li><strong>Name:</strong> {track.name}</li>
        <li><strong>Artist:</strong> {track.artist}</li>
        <li><strong>Album:</strong> {track.album}</li>
      </ul>
    </div>
  );
}