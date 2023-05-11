import React, { useEffect, useState } from "react";
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
    role: "Donor",
  });

  const [State, setState] = useContext(Context);

  function handleChange(event) {
    setData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }

  async function handleSignUp(event) {
    event.preventDefault();
    const res = await axios.post("/auth/register", data);
    // if (res.status === 200) {
    //   localStorage.setItem("myToken",res.data);
    // }
    console.log(res.data.access_token);
    const donors = await axios.get("/donors", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + res.data.access_token,
      },
    });
    console.log(donors);
  }

  return (
    <div
      className="sign Up component"
      style={{ transform: `translateX(${State.signUp}%)` }}
    >
      <h1>Sign up</h1>
      <form action="submit" onSubmit={handleSignUp}>
        <div className="input">
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              name="fname"
              placeholder="First name"
              value={data.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              name="lname"
              placeholder="Last name"
              value={data.lname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input">
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
            />
          </div>
          <div className="field">
            <AiFillPhone className="icon" />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={data.phone}
              required
            />
          </div>
        </div>
        <div className="field">
          <FaRegAddressCard className="icon" />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            value={data.address}
            required
          />
        </div>
        <div className="field">
          <AiOutlineMail className="icon" />

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={data.email}
            required
          />
        </div>
        <div className="field ">
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          <BiHide className="icon" />
        </div>

        <input type="submit" value="SIGN UP" />
      </form>
    </div>
  );
};

export default SignupForm;
