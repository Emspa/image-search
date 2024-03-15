import { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { IImageResultItem } from "../models/IImageResultItem";
import './FavoriteImages.css'
import axios from "axios";


export const FavoriteImages = () => {
    const {user} = useAuth0()

    const [favorites, setFavorites] = useState<IImageResultItem[]>([]);

    const userId = user?.sub;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/users/favorite/${userId}`);
                setFavorites(response.data)
                console.log(response.data)

            }catch (error) {
                console.log("Error fetching data", error)
            }
        };
        fetchData()
    },[]);


    
      return (
        <div>
            <h2>My Photos</h2>
            {favorites.length > 0 ? (
                <ul className="images-container">
                    {favorites?.map((item, i) => (
                        <li key={i}>
                            <img className="favorite-img" src={item.link} alt={item.title}  />
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No pictures available</p>
            )}
        </div>
    );
    
}