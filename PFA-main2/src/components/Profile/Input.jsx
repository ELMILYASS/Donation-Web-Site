import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";

import { Context } from "./UserInfo";
function Input(props) {
  let [inputs, setInputs, editInputs, setEditInputs] = useContext(Context);
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
    setTimeout(() => {
      target.focus();
    }, 0);
  }
  return (
    <div className="field">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="inputText">
        {props.icon}
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={changeInfo}
          disabled={props.disabled}
        />
        <BiEdit className="edit" onClick={allowEdit} />
      </div>
    </div>
  );
}

export default Input;
