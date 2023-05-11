import React from "react";
import img from "./shopify_plugin_hero_image-768x614.png";

function ProfileHeader(props) {
  return (
    <div className="profileHeader">
      <div className="profileImg">
        <img src={img} alt="" />
      </div>
      <h3>{props.username}</h3>
    </div>
  );
}

export default ProfileHeader;
