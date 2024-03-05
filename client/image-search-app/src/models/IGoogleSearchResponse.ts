import { IImageResultItem } from "./IImageResultItem";
import { ISearchInformation } from "./ISearchInformation";
import { ISpelling } from "./ISpelling";

export interface IGoogleSearchResponse {
    items: IImageResultItem[]; 
    searchInformation: ISearchInformation; 
    spelling?: ISpelling; 
}