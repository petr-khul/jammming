import React, {useState, useCallback } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Search for a song..." onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>
                <img src="./search.png" alt="Search" />
            </button>
        </div>
    );   

}
