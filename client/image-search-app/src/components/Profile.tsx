import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img className="profile-img" src={user?.picture} alt={user?.name} />
      </div>
    )
  );
};

export default Profile;