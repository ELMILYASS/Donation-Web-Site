import React, { useEffect, useRef, useState } from "react";
import { BiHide, BiEdit } from "react-icons/bi";
import {
  AiOutlineUser,
  AiFillLock,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
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

  function changeInfo(event) {
    setInputs((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  function allowEdit(event) {
    let target = event.target;
    if (event.target.tagName === "path") {
      target = target.parentNode;
    }

    target = target.previousElementSibling;

    setEditInputs((prev) => {
      return {
        ...prev,
        [target.name]: false,
      };
    });
    target.focus();
  }
  useEffect(() => {
    window.addEventListener("click", (event) => {
      //   console.log(event.target.className.baseVal);
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
      <form action="">
        <div className="input">
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First name"
              value={inputs.fname}
              onChange={changeInfo}
              disabled={editInputs.fname}
            />
            <BiEdit className="edit" title="fname" onClick={allowEdit} />
          </div>
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last name"
              value={inputs.lname}
              onChange={changeInfo}
              disabled={editInputs.lname}
            />
            <BiEdit className="edit" onClick={allowEdit} />
          </div>
        </div>

        <div className="input">
          <div className="field">
            <AiOutlineUser className="icon" />

            <input
              type="text"
              id="uname"
              name="uname"
              placeholder="Username"
              value={inputs.uname}
              onChange={changeInfo}
              disabled={editInputs.uname}
            />
            <BiEdit className="edit" onClick={allowEdit} />
          </div>
          <div className="field">
            <AiFillPhone className="icon" />

            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={inputs.phone}
              onChange={changeInfo}
              disabled={editInputs.phone}
            />
            <BiEdit className="edit" onClick={allowEdit} />
          </div>
        </div>
        <div className="field">
          <FaRegAddressCard className="icon" />

          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            value={inputs.address}
            onChange={changeInfo}
            disabled={editInputs.address}
          />
          <BiEdit className="edit" onClick={allowEdit} />
        </div>
        <div className="field">
          <AiOutlineMail className="icon" />

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={changeInfo}
            disabled={editInputs.email}
          />
          <BiEdit className="edit" onClick={allowEdit} />
        </div>
        <div className="field ">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={inputs.password}
            onChange={changeInfo}
            disabled={editInputs.password}
          />
          <BiEdit className="edit" onClick={allowEdit} />
          <BiHide className="icon" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserInfo;
