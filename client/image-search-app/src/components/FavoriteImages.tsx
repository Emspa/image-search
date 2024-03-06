import { IImages } from "../models/IImages"

interface IFavoriteImages {
    favorite: IImages[];
    addFavorite: (image: IImages) => void;
}

export const FavoriteImages = ({ addFavorite, favorite }: IFavoriteImages) => {
    return(
        <div>
            {favorite.map((image) => (
                <div key={image.link}>
                    <img src={image.link} alt={image.title} />
                    <p>{image.title}</p>

                </div>
                
            ))}

         


        </div>
    )
}