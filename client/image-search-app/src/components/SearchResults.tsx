import { IGoogleSearchResponse } from "../models/IGoogleSearchResponse"

interface ISearchResultProps {
    searchData: IGoogleSearchResponse | null;
}

export const SearchResult = ({searchData}: ISearchResultProps ) => {  if (!searchData || !searchData.items) {
    return <p>No images found.</p>; 
  }
    return (
        <div>
            {searchData.items.map((item, i) => (
                <div key={i}>
                    <img src={item.link} alt={item.title} />

                </div>

            ))}

        </div>
    )
}