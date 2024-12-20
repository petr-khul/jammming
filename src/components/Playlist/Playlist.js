import React from "react";
import "./Playlist.css";

export default function Playlist({playlist, onRemove, onSave}){
    return(
        <div className="playlist">
            <h2>Your Playlist</h2>
                {playlist.length === 0 && <p>No songs added yet.</p>}
                <ul>
                {playlist.map((track) => (
                <li key={track.id}>
                    <strong>{track.name}</strong> by {track.artist}
                    <button className="removeTrack" onClick={() => onRemove(track.id)}>-</button>
                </li>
                ))}
            </ul>
            <button onClick={onSave} disabled={playlist.length === 0}>
                Save Playlist
            </button>
        </div>
    );
}