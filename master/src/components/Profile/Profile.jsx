import React from "react";
import Header from "../Donate-Now/Header";
import Footer from "../Donate-Now/Footer";
import ProfileHeader from "./ProfileHeader";
import Navbar from "../HomeComponents/Navbar";
import UserInfo from "./UserInfo";
import { createContext, useState, useEffect } from "react";

export const Context = createContext();
function Profile() {
  let [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    uname: "ilab",
    phone: "",
    address: "",
    email: "",
    password: "",
  });
  let [editInputs, setEditInputs] = useState({
    fname: true,
    lname: true,
    uname: true,
    phone: true,
    address: true,
    email: true,
    password: true,
  });

  useEffect(() => {
    window.addEventListener("click", (event) => {
      let target = event.target;

      let array = ["svg", "path", "INPUT"];

      if (!array.includes(target.tagName)) {
        setEditInputs((prev) => {
          return {
            fname: true,
            lname: true,
            uname: true,
            phone: true,
            address: true,
            email: true,
            password: true,
          };
        });
      }
    });
  }, []);
  return (
    <div className="profile">
      <Navbar />
      <Context.Provider value={[inputs, setInputs, editInputs, setEditInputs]}>
        <Header />
        <ProfileHeader username={inputs.uname} />
        <UserInfo />
      </Context.Provider>

      <Footer />
    </div>
  );
}
export default Profile;
