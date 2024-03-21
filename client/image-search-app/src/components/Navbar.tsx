/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar">
        <div className="title">
          <h1>Image Search</h1>
        </div>
        <ul className="navlinks">
          <li>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            {isAuthenticated && (
              <NavLink to="/favorites" className="active">
                My Favorites
              </NavLink>
            )}
          </li>
          <li className="buttons-profile">
            {" "}
            {isAuthenticated ? (
              <>
                <LogoutButton />
                <Profile />
              </>
            ) : (
              <>
                <LoginButton />
              </>
            )}{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};
