import React, { useEffect, useState, useContext } from "react";
import Input from "./Input";
import { BiHide, BiEdit } from "react-icons/bi";

import { AiOutlineUser, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { Context } from "./Profile";
import { useUser } from "../../contexte/UserContext";
import axios from "../../axios/axios";
function UserInfo() {
  let [inputs, setInputs, editInputs, setEditInputs] = useContext(Context);
  const { user } = useUser();
  function changeUserInfo(event) {
    event.preventDefault();
    console.log(user?.sub);
    axios.put(`/user/${user?.sub}`, inputs, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }
  return (
    <div className="sign Up component">
      <form action="">
        <div className="input">
          <Input
            type="text"
            id="firstname"
            name="firstname"
            label="First name"
            value={inputs.firstname}
            disabled={editInputs.firstname}
            icon={<AiOutlineUser className="icon" />}
          />

          <Input
            type="text"
            id="lastname"
            name="lastname"
            label="Last name"
            value={inputs.lastname}
            disabled={editInputs.lastname}
            icon={<AiOutlineUser className="icon" />}
          />
        </div>

        <div className="input">
          <Input
            type="text"
            id="user_name"
            name="user_name"
            label="user_name"
            value={inputs.user_name}
            disabled={editInputs.user_name}
            icon={<AiOutlineUser className="icon" />}
          />

          <Input
            type="text"
            id="phone"
            name="phone"
            label="Phone"
            value={inputs.phone}
            disabled={editInputs.phone}
            icon={<AiFillPhone className="icon" />}
          />
        </div>

        <Input
          type="text"
          id="address"
          name="address"
          label="Address"
          value={inputs.address}
          disabled={editInputs.address}
          icon={<FaRegAddressCard className="icon" />}
        />

        <Input
          type="text"
          id="email"
          name="email"
          label="Email"
          value={inputs.email}
          disabled={editInputs.email}
          icon={<AiOutlineMail className="icon" />}
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="password"
          value={inputs.password}
          disabled={editInputs.password}
          icon={<BiHide className="icon" />}
        />

        <input
          type="submit"
          value="Submit"
          className="submit"
          onClick={changeUserInfo}
        />
      </form>
    </div>
  );
}

export default UserInfo;
