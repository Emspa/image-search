import { ChangeEvent } from "react";

interface ISearchBar {
    handleSearch: () => void;
    handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
}


export const SearchBar = ({handleSearch, handleSearchInput, searchQuery}: ISearchBar) => {
    return (
        <div>
        <input type="text" value={searchQuery} onChange={handleSearchInput} />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
    )
}