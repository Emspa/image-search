/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse";
import { IImages } from "../models/IImages";
import "./SearchResults.css";
import { useState } from "react";
import axios from "axios";

interface ISearchResultProps {
  searchData: IGoogleSearchResponse | null;
  handleSearch: (query?: string) => Promise<void>;

}

export const SearchResult = ({
  searchData,
  handleSearch,

}: ISearchResultProps) => {
  const { user, isAuthenticated } = useAuth0(); 

  const [saveImage, setSaveImage] = useState<IImages[]>([]);


  const saveFavorite = async (image: IImages) => {
    try {
      await axios.post('http://localhost:3000/api/save-favorite', { user: user?.email, imageUrl: image.link });
      setSaveImage([...saveImage, image]);
      console.log('Image saved successfully:', image);
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  }

// const saveFavorite = async (image: IImages) => {
//     try {
//       const response = await fetch('/api/save-favorite', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user: user?.email,
//           imageUrl: image.link,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Could not save image");
//       }
//       const data = await response.json();
//       console.log(data.message);
//     }catch (error) {
//       console.error("Something went wrong when trying to save image:", error)
//     }
//   }

  

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
            <button onClick={() => saveFavorite(item)}>Spara</button>

          </div>
        ))}
      </div>
    </div>
  );
};
