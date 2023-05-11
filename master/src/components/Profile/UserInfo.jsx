import React, { useEffect, useState, useContext } from "react";
import Input from "./Input";
import { BiHide, BiEdit } from "react-icons/bi";

import { AiOutlineUser, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { Context } from "./Profile";
function UserInfo() {
  let [inputs, setInputs, editInputs, setEditInputs] = useContext(Context);
  return (
    <div className="sign Up component">
      <form action="">
        <div className="input">
          <Input
            type="text"
            id="fname"
            name="fname"
            label="First name"
            value={inputs.fname}
            disabled={editInputs.fname}
            icon={<AiOutlineUser className="icon" />}
          />

          <Input
            type="text"
            id="lname"
            name="lname"
            label="Last name"
            value={inputs.lname}
            disabled={editInputs.lname}
            icon={<AiOutlineUser className="icon" />}
          />
        </div>

        <div className="input">
          <Input
            type="text"
            id="uname"
            name="uname"
            label="Username"
            value={inputs.uname}
            disabled={editInputs.uname}
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

        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}

export default UserInfo;
