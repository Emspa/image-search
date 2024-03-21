/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse";
import "./SearchResults.css";
import { useState } from "react";
import axios from "axios";
import { IImageResultItem } from "../models/IImageResultItem";

interface ISearchResultProps {
  searchData: IGoogleSearchResponse | null;
  handleSearch: (query?: string) => Promise<void>;
}

export const SearchResult = ({
  searchData,
  handleSearch,
}: ISearchResultProps) => {
  const { user } = useAuth0();

  const [saveImage, setSaveImage] = useState<IImageResultItem[]>([]);

  const saveFavorite = async (image: IImageResultItem) => {
    try {
      await axios.post('http://localhost:3000/api/users/save-favorite', { user: user?.sub, title: image.title, byteSize: image.image.byteSize, imageUrl: image.link });
      setSaveImage([...saveImage, image]);
      console.log('Image saved successfully:', image);
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  };

  return (
    <div className="div-container">
      <div className="search-info">
        {searchData?.items && (
          <>
            <div className="search-time">
              Time: {searchData.searchInformation.formattedSearchTime}
            </div>
            {searchData.spelling?.correctedQuery && (
              <div className="corrected-query">
                <p>Did you mean:</p>
                <a onClick={() => handleSearch(searchData.spelling?.correctedQuery)}>
                  {searchData.spelling.correctedQuery}?
                </a>
              </div>
            )}
          </>
        )}
      </div>

      <div className="images-container">
        {searchData?.items?.map((item, i) => (
          <div key={i} className="image-item">
            <img className="images" src={item.link} alt={item.title} />
            <button className="save-button" onClick={() => saveFavorite(item)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
};
