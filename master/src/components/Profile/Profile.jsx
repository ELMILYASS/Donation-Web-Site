import React from "react";
import Header from "../Donate-Now/Header";
import Footer from "../Donate-Now/Footer";
import ProfileHeader from "./ProfileHeader";
import UserInfo from "./UserInfo";
import { createContext, useState, useEffect } from "react";
import Navbar from "../HomeComponents/Navbar";
import { useUser } from "../../contexte/UserContext";
import axios from "../../axios/axios";
export const Context = createContext();
function Profile() {
  const { user } = useUser();

  const getUserInfo = async () => {
    const res = await axios.get(`/user/${user?.sub}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setInputs({
      firstname: res.data.firstname,
      lastname: res.data.lastname,
      user_name: res.data.user_name,
      phone: res.data.phone,
      address: res.data.address,
      email: res.data.email,
      password: res.data.password,
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  let [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    user_name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });
  console.log(inputs);
  let [editInputs, setEditInputs] = useState({
    firstname: true,
    lastname: true,
    user_name: true,
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
            lastname: true,
            user_name: true,
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
        <ProfileHeader user_name={inputs.user_name} />
        <UserInfo />
      </Context.Provider>

      <Footer />
    </div>
  );
}
export default Profile;
