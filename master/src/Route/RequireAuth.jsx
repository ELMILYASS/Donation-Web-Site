import React, { useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../axios/axios";
// import jwt_decode from 'jsonwebtoken/decode';
import Home from "../components/Login/Home";
import { useUser } from "../contexte/UserContext";
const RequireAuth = () => {
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
  const [loading,setLoading]=useState(true)
  const {setUser,user}=useUser()
  let navigate = useNavigate();

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
        const user=parseJwt(access_token)
        console.log(user);
        setUser(user)
      }
    }
    setLoading(false)
  };

  useEffect(() => {
    testUser();
  }, []);

  return valid ? <Outlet /> : (!loading&&<Home />);
};

export default RequireAuth;
