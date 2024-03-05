/** @format */

import { ChangeEvent, useEffect, useState } from "react";
import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<IGoogleSearchResponse | null>(
    null
  );

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }&cx=${import.meta.env.VITE_GOOGLE_ID}&num=10&searchType=image&q=${searchQuery}`
    );
    const data: IGoogleSearchResponse = await response.json();
    console.log(data);
    setSearchData(data)
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearchInput} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
