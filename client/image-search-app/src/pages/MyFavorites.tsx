import { useState } from "react";
import { IImages } from "../models/IImages";
import { FavoriteImages } from "../components/FavoriteImages";

export const MyFavorites = () => {
    const [favorite, setFavorite] = useState<IImages[]>([]);

    const addFavorite = (image: IImages) => {
        const isFavorite = favorite.some(fav => fav.link === image.link);
        if (!isFavorite) {
          setFavorite(prev => [...prev, image]);
        }
      };
    
    return (
        <>
            <FavoriteImages favorite={favorite} addFavorite={addFavorite}/>
        </>
    )
}