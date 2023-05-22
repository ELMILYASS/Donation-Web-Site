import React from "react";
import Header from "../Donate-Now/Header";
import Footer from "../Donate-Now/Footer";
import ProfileHeader from "./ProfileHeader";
import UserInfo from "./UserInfo";
import { createContext, useState, useEffect } from "react";
import { useUser } from "../../contexte/UserContext";
import axios from "../../axios/axios";
export const Context = createContext();
function Profile() {
  const {user}=useUser()
  const getUserInfo=async()=>{
    const res = await axios.get(`/user/${user?.sub}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    console.log(res.data);
  }
  useEffect(()=>{
    getUserInfo()
  },[])
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
