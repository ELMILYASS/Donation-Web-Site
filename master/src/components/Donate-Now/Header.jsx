import React from "react";
import img  from "./images/Untitledfinl_page-0001__1_-removebg-preview.png";
const Header = (props) => {
  return (
    <div className="header">
      <img src={img} alt="" />
      <h1>{props.text}</h1>
    </div>
  );
};

export default Header;
