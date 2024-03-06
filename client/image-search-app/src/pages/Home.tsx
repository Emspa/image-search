/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";
import { SearchApp } from "../components/SearchApp";






export const Home = () => {

    const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
      <img
        className="search-img"
        src="image-search.svg"
        alt="image-searh-icon"
      />
      {!isAuthenticated ? (
        <h2>Please log in to search images :)</h2>
      ): (
        <SearchApp />
      )}
      

    </div>
  );
};
