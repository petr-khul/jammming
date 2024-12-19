import React from "react";
import Track from "../Track/Track";
//import "./TrackList.css";

export default function TrackList({ tracks }) {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}