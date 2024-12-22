import React from "react";
import Track from "../Track/Track";
//import "./TrackList.css";

export default function TrackList(props) {
  return (
    <div className="Tracklist">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
}