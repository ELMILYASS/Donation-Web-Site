import React from "react";
import { useState, useContext } from "react";
import { Context } from "./Home";
import img from "../../images/Login/1_E1FajNaNq1IXkXAOaF5lCw-removebg-preview.png";
const SignInNow = () => {
  const [State, setState] = useContext(Context);
  function changeState() {
    setState({
      signIn: 0,
      signUp: -200,
      signInNow: 100,
      signUpNow: 0,
      cercle: -70
    });
  }

  return (
    <div
      className="signInNow now component"
      style={{ transform: ` translateX(${State.signInNow}%)` }}
    >
      <div className="info">
        <h3>One of us ?</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel
          commodi fugit tenetur officia .
        </p>
        <button onClick={changeState}>SIGN IN</button>
      </div>
      <img
        src={img}
        alt=""
      />
    </div>
  );
};
export default SignInNow;
