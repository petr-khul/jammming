import React, {useState} from "react";

export default function SearchBar({onSearchChange}) {
    const [searchQuery, setSearchQuery ] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        onSearchChange(event.target.value);
    };

    return (
        <div>
            <input 
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search for a song..."
            />
        </div>
    );
}

