"use client";
import React, { useState } from "react";
import axios from "../../axios/axios";
import { Context } from "./Home";
import { useContext } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const [isCorrect, setisCorrect] = useState("");
  const Navigate = useNavigate();
  const [State, setState] = useContext(Context);
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setuserInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSignIn(event) {
    event.preventDefault();

    await axios
      .post("/auth/authenticate", userInfo, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          mode: "cors",
        },
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("refreshToken", res.data.refresh_token);
        Navigate("/home");
      })
      .catch((e) => {
        setisCorrect(e.response.data.errorMessage);
      });
  }
  return (
    <div
      className="sign In component"
      style={{ transform: `translateX(${State.signIn}%)` }}
    >
      <h1>Sign in</h1>
      {isCorrect != "" && <span className="isCorrect">{isCorrect}</span>}
      <form>
        <div className="field">
          <AiOutlineMail className="icon" />

          <input
            type="text"
            name="email"
            placeholder="Enter your email ..."
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="field ">
          <input
            type="password"
            name="password"
            placeholder="Enter you password"
            value={userInfo.password}
            onChange={handleChange}
          />
          <BiHide className="icon" />
        </div>
        <input type="submit" value="SIGN IN" onClick={handleSignIn} />
      </form>
      <p>Or Sign up with social platforms</p>
      <div className="social">
        <FaFacebookF className="icon" />
        <BsGoogle className="icon" />
        <BsTwitter className="icon" />
        <FaLinkedinIn className="icon" />
      </div>
    </div>
  );
};

export default SigninForm;
