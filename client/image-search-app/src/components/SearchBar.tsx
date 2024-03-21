import { ChangeEvent } from 'react';
import './SearchBar.css'; 

interface ISearchBar {
  handleSearch: () => void;
  handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

export const SearchBar = ({ handleSearch, handleSearchInput, searchQuery }: ISearchBar) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInput}
        className="search-input"
        placeholder="Search"
      />
      <button className="search-button" onClick={() => handleSearch()}>
        <img src="search.png" alt="Search" />
      </button>
    </div>
  );
};
