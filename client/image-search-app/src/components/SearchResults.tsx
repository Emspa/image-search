import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse"
import './SearchResults.css'

interface ISearchResultProps {
    searchData: IGoogleSearchResponse | null;
}

export const SearchResult = ({searchData}: ISearchResultProps ) => {  if (!searchData || !searchData.items) {
    return <p>No images found.</p>; 
  }
    return (
        <div className="div-container">
            <div>
            </div>
            <div className="images-container">
            {searchData.items.map((item, i) => (
                <div key={i}>
                    <img className="images" src={item.link} alt={item.title} />
                </div>

            ))}

            </div>


        </div>
    )
}