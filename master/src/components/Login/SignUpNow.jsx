import React from "react";
import { useContext } from "react";
import { Context } from "./Home";
import img from "../../images/Login/shopify_plugin_hero_image-768x614.png";
const SignUpNow = () => {
  const [State, setState] = useContext(Context);
  function changeState() {
    setState({
      signIn: 150,
      signUp: 0,
      signInNow: 0,
      signUpNow: -150,
      cercle: 25
    });
  }
  console.log(State);
  return (
    <div
      className="signUpNow now component"
      style={{ transform: `translateX(${State.signUpNow}%)` }}
    >
      <div className="info">
        <h3>New Here ?</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button onClick={changeState}>SIGN UP</button>
      </div>
      <img src={img} alt="" />
    </div>
  );
};
export default SignUpNow;
