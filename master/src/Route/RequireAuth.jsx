import React, { useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../axios/axios";
import jwt_decode from 'jsonwebtoken/decode';
import Home from "../components/Login/Home";
import { useUser } from "../contexte/UserContext";
const RequireAuth = () => {
  function decodeToken(token) {
    try {
      const decoded = jwt_decode.decode(token);
      return decoded;
    } catch (error) {
      console.log('Error decoding token:', error);
      return null;
    }
  }  
  const {setUser}=useUser()
  let navigate = useNavigate();
  console.log("hhahah");
  const [valid, setValid] = useState(false);
  const location = useLocation();
  const testUser = async () => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      const res = await axios.get("/test/user", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          mode: "cors",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.status === 200) {
        if (location.pathname == "/") {
          navigate("/home");
        }
        setValid(true);
        setUser(decodeToken(access_token))
      }
    }
  };

  useEffect(() => {
    testUser();
  }, []);

  return valid ? <Outlet /> : <Home />;
};

export default RequireAuth;
