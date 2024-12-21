import React, { useState, useEffect } from "react";
import Spotify from "../../services/SpotifyAuth";
import TrackList from "../Tracklist/Tracklist";
import "./SearchResults.css";

export default function SearchResults(props) {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} />
        </div>
    );
};
