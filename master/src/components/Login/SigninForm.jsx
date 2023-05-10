"use client";
import React from "react";

import { Context } from "./Home";
import { useContext } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";

const SigninForm = () => {
  const [State, setState] = useContext(Context);

  return (
    <div
      className="sign In component"
      style={{ transform: `translateX(${State.signIn}%)` }}
    >
      <h1>Sign in</h1>
      <form>
        <div className="field">
          <AiOutlineMail className="icon" />

          <input type="text" name="email" placeholder="Enter your email ..." />
        </div>
        <div className="field ">
          <input
            type="password"
            name="password"
            placeholder="Enter you password"
          />
          <BiHide className="icon" />
        </div>
        <input type="submit" value="SIGN IN" />
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
