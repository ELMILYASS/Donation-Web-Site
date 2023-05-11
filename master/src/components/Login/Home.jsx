import React from "react";
import SignUpNow from "./SignUpNow";
import SignInNow from "./SignInNow";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { createContext, useState } from "react";

export const Context = createContext();

function HomePage() {
  let [state, setState] = useState({
    signIn: 0,
    signUp: -200,
    signInNow: 100,
    signUpNow: 0,
    cercle: -70,
   
  });

  return (
    <div className="Home">
      <Context.Provider value={[state, setState]}>
        <div
          className="cercle"
          style={{ transform: `translate(${state.cercle}%,-50%)` }}
        ></div>
       
        <SignUpNow />
        <SigninForm />
        <SignupForm />
        <SignInNow />
      </Context.Provider>
    </div>
  );
}

export default HomePage;
