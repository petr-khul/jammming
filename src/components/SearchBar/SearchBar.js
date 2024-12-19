import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar({onSearchChange}) {
    const [searchQuery, setSearchQuery ] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        onSearchChange(event.target.value);
    };

    return (
        <div className="search-bar">
            <input 
                type="text"
                className="searchBarInput"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search for a song..."
            />
        </div>
    );
}

