import React from "react";
import Header from "../Donate-Now/Header";
import Footer from "../Donate-Now/Footer";
import ProfileHeader from "./ProfileHeader";
import UserInfo from "./UserInfo";
function Profile() {
  return (
    <div className="profile">
      <Header />
      <ProfileHeader />
      <UserInfo />
      <Footer />
    </div>
  );
}

export default Profile;
