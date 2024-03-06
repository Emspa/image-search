/** @format */

import { ChangeEvent, useState } from "react";
import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse";
import { SearchResult } from "./SearchResults";
import './SearchResults.css'
import { SearchBar } from "./SearchBar";


export const SearchApp = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<IGoogleSearchResponse | null>(
    null
  );

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }


  const handleSearch = async (query?: string) => {
    const searchTerm = query || searchQuery;
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&cx=${import.meta.env.VITE_GOOGLE_ID}&num=10&searchType=image&q=${searchTerm}`
    );
    const data: IGoogleSearchResponse = await response.json();
    console.log(data);
    setSearchData(data);
    setSearchQuery("");

  };

  return (
    <div className="search-container">
      <SearchBar handleSearchInput={handleSearchInput} handleSearch={handleSearch} searchQuery={searchQuery}/>
      <SearchResult searchData={searchData} handleSearch={handleSearch}/>
  

    </div>
  );
};
