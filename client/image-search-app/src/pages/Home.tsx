/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import { SearchApp } from "../components/SearchApp";
import { useEffect, useState } from "react";


export const Home = () => {
  const { isAuthenticated } = useAuth0();
  const [isTextZoomed, setIsTextZoomed] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTextZoomed(true);
    }, 100); 

   
    return () => clearTimeout(timeout);
  }, []); 

  return (
    <div className="container">
      <img
        className="search-img"
        src="image-search.svg"
        alt="image-searh-icon"
      />
      {!isAuthenticated ? (
        <h2 className={`text ${isTextZoomed ? 'zoom' : ''}`}>Please log in to search images :)</h2>
      ) : (
        <SearchApp />
      )}
   
    </div>
  );
};
