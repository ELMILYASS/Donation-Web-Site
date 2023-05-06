import React, { useEffect, useState } from "react";
import Input from "./Input";
import { BiHide, BiEdit } from "react-icons/bi";

import { AiOutlineUser, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { createContext } from "react";
export const Context = createContext();
function UserInfo() {
  let [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    uname: "",
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
    <div className="sign Up component">
      <Context.Provider value={[inputs, setInputs, editInputs, setEditInputs]}>
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

          <input type="submit" value="Submit" />
        </form>
      </Context.Provider>
    </div>
  );
}

export default UserInfo;
