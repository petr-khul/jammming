//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main>
      <h2>What would you like to play?</h2>
        <SearchBar onSearchChange={handleSearchChange}/>
        <SearchResults searchQuery={searchQuery}/>
      </main>
    </div>
  );
}

export default App;
