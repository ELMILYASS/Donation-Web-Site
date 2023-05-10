import React, { useState } from "react";
import axios from "../../axios/axios";
import { BiHide } from "react-icons/bi";
import {
  AiOutlineUser,
  AiFillLock,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

import { Context } from "./Home";
import { useContext } from "react";
const SignupForm = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    username: "",
    address: "",
    email: "",
    password: "",
  });

  const [State, setState] = useContext(Context);

  const res = axios.get("/donors");
  console.log(res);

  return (
    <div
      className="sign Up component"
      style={{ transform: `translateX(${State.signUp}%)` }}
    >
      <h1>Sign up</h1>
      <form action="">
        <div className="input">
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              name="fname"
              placeholder="First name"
              value={data.fname}
            />
          </div>
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              name="lname"
              placeholder="Last name"
              value={data.lname}
            />
          </div>
        </div>

        <div className="input">
          <div className="field">
            <AiOutlineUser className="icon" />

            <input type="text" placeholder="Username" name="username" />
          </div>
          <div className="field">
            <AiFillPhone className="icon" />

            <input type="text" name="phone" placeholder="Phone" />
          </div>
        </div>
        <div className="field">
          <FaRegAddressCard className="icon" />

          <input type="text" name="address" placeholder="Address" />
        </div>
        <div className="field">
          <AiOutlineMail className="icon" />

          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="field ">
          <input type="password" name="password" placeholder="password" />
          <BiHide className="icon" />
        </div>
        <input type="submit" value="SIGN UP" />
      </form>
    </div>
  );
};

export default SignupForm;
