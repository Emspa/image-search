/** @format */

import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse";
import "./SearchResults.css";

interface ISearchResultProps {
  searchData: IGoogleSearchResponse | null;
  handleSearch: (query?: string) => Promise<void>;
}

export const SearchResult = ({
  searchData,
  handleSearch,
}: ISearchResultProps) => {

    return (
    <div className="div-container">
      <div className="search-info">
      {searchData?.items && (
        <div className="search-time">
          Time: {searchData?.searchInformation.formattedSearchTime}
        </div>
      )}
      {searchData?.spelling?.correctedQuery && (
        <div className="corrected-query">
          <p>Did you mean:</p>
          <a
            onClick={() => handleSearch(searchData?.spelling?.correctedQuery)}
          >
            {searchData.spelling.correctedQuery}?
          </a>
        </div>
      )}

      </div>
  
      <div className="images-container">
        {searchData?.items.map((item, i) => (
          <div key={i}>
            <img className="images" src={item.link} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
